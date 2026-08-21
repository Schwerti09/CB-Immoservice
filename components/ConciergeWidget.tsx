"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, LoaderCircle, MessageSquare, Send, X } from "lucide-react";
import type { ConciergeResponse } from "@/lib/concierge";
import type { ServiceSlug } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  content: string;
};

export default function ConciergeWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [flow, setFlow] = useState<ConciergeResponse | null>(null);
  const [category, setCategory] = useState<ServiceSlug | null>(null);
  const [objective, setObjective] = useState<string | null>(null);
  const [objectiveLabel, setObjectiveLabel] = useState<string | null>(null);
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messageId = useRef(0);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    container.scrollTop = container.scrollHeight;
  }, [messages, loading]);

  const appendMessage = (role: ChatMessage["role"], content: string) => {
    messageId.current += 1;
    setMessages((current) => [
      ...current,
      { id: messageId.current, role, content },
    ]);
  };

  const initialiseConversation = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/concierge");
      const data = (await response.json()) as ConciergeResponse;
      messageId.current = 1;
      setMessages([{ id: messageId.current, role: "assistant", content: data.prompt }]);
      setFlow(data);
    } catch {
      setError("Der Beratungsassistent ist aktuell nicht verfügbar.");
    } finally {
      setLoading(false);
    }
  };

  const openWidget = async () => {
    setIsOpen(true);
    if (!flow) {
      await initialiseConversation();
    }
  };

  const submitStep = async (payload: Record<string, string>) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/concierge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as ConciergeResponse & { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Die Anfrage konnte nicht verarbeitet werden.");
      }

      appendMessage("assistant", data.prompt);
      if (data.summary) {
        appendMessage("assistant", `Zusammenfassung: ${data.summary}`);
      }
      setFlow(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein unbekannter Fehler ist aufgetreten.");
    } finally {
      setLoading(false);
    }
  };

  const handleOption = async (value: string, label: string) => {
    if (!flow) return;

    appendMessage("user", label);

    if (flow.step === "category") {
      setCategory(value as ServiceSlug);
      await submitStep({ step: "category", category: value });
      return;
    }

    if (flow.step === "objective" && category) {
      setObjective(value);
      setObjectiveLabel(label);
      await submitStep({ step: "objective", category, objective: value, objectiveLabel: label });
    }
  };

  const handleDetailsSubmit = async () => {
    if (!flow || flow.step !== "details" || !category || !objective) {
      setError("Bitte starten Sie die Anfrage erneut, damit wir Ihr Anliegen korrekt erfassen können.");
      return;
    }

    if (details.trim().length < 10) {
      setError("Bitte geben Sie mindestens 10 Zeichen ein.");
      return;
    }

    appendMessage("user", details.trim());
    const message = details.trim();
    setDetails("");
    await submitStep({
      step: "details",
      category,
      objective,
      objectiveLabel: objectiveLabel || objective,
      details: message,
    });
  };

  const resetConversation = async () => {
    setMessages([]);
    setFlow(null);
    setCategory(null);
    setObjective(null);
    setObjectiveLabel(null);
    setDetails("");
    messageId.current = 0;
    await initialiseConversation();
  };

  return (
    <>
      <button
        type="button"
        onClick={isOpen ? () => setIsOpen(false) : openWidget}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-navy px-5 py-4 text-sm font-semibold text-white shadow-luxury transition-all duration-300 hover:bg-gold"
      >
        {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <MessageSquare className="h-5 w-5" aria-hidden="true" />}
        CB Concierge
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-2rem)] max-w-sm rounded-[2rem] border border-navy/10 bg-white shadow-luxury">
          <div className="flex items-start justify-between rounded-t-[2rem] bg-navy px-5 py-4 text-white">
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-white/10 p-2">
                <Bot className="h-5 w-5 text-gold" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold">CB Concierge – Beratungsassistent</p>
                <p className="text-sm text-white/70">Strukturierte Erstaufnahme Ihres Anliegens</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 transition-all duration-300 hover:bg-white/10"
              aria-label="Chat schließen"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={messagesContainerRef} className="max-h-[28rem] space-y-4 overflow-y-auto px-5 py-5">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-6",
                  message.role === "assistant"
                    ? "bg-[#f8f9fa] text-navy"
                    : "ml-auto bg-navy text-white",
                )}
              >
                {message.content}
              </div>
            ))}

            {loading && (
              <div className="inline-flex items-center gap-2 rounded-3xl bg-[#f8f9fa] px-4 py-3 text-sm text-navy">
                <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                Antwort wird vorbereitet...
              </div>
            )}

            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>

          <div className="border-t border-navy/10 px-5 py-4">
            {flow?.options && flow.step !== "complete" && (
              <div className="flex flex-wrap gap-2">
                {flow.options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleOption(option.value, option.label)}
                    disabled={loading}
                    className="rounded-full border border-navy/10 px-3 py-2 text-sm text-navy transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white disabled:opacity-60"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}

            {flow?.step === "details" && (
              <div className="space-y-3">
                <textarea
                  rows={4}
                  value={details}
                  onChange={(event) => setDetails(event.target.value)}
                  placeholder="Kurzbeschreibung Ihres Objekts oder Ihrer aktuellen Herausforderung"
                  className="w-full rounded-2xl border border-navy/10 px-4 py-3 text-sm text-navy outline-none transition-all duration-300 focus:border-gold"
                />
                <button
                  type="button"
                  onClick={handleDetailsSubmit}
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold disabled:opacity-60"
                >
                  Details senden
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}

            {flow?.step === "complete" && (
              <button
                type="button"
                onClick={resetConversation}
                className="rounded-full border border-navy/10 px-4 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:border-gold hover:text-gold"
              >
                Neue Anfrage starten
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
