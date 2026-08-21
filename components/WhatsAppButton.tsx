"use client";

import { motion } from "framer-motion";
import { company } from "@/components/siteContent";

function normalizeWhatsAppNumber(input: string) {
  const trimmedInput = input.trim().replace(/^tel:/i, "");
  const digits = trimmedInput.replace(/\D+/g, "");

  if (!digits) return "";
  if (trimmedInput.startsWith("+")) return digits;
  if (digits.startsWith("00")) return digits.slice(2);
  if (digits.startsWith("49") && digits.length >= 12) return digits;
  if (digits.startsWith("0")) return `49${digits.slice(1)}`;

  return `49${digits}`;
}

const WHATSAPP_NUMBER = normalizeWhatsAppNumber(
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? company.phoneHref ?? company.phone,
);
const WHATSAPP_MESSAGE =
  "Hallo, ich interessiere mich für Ihre Immobilienservices. Könnten Sie mir mehr Informationen zukommen lassen?";

export default function WhatsAppButton() {
  if (!WHATSAPP_NUMBER) return null;

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Via WhatsApp kontaktieren"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.8, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-[5.5rem] right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-luxury transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5d]"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.67 4.61 1.832 6.505L4 29l7.752-1.801A12.93 12.93 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a10.94 10.94 0 0 1-5.496-1.479l-.394-.233-4.598 1.068 1.103-4.473-.252-.407A9.952 9.952 0 0 1 6 15c0-5.514 4.486-10 10-10zm-3.293 5.5c-.2 0-.524.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.1 3.2 5.125 4.35.717.275 1.275.44 1.713.563.72.2 1.376.172 1.894.104.578-.075 1.775-.726 2.025-1.426.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35-.3-.15-1.775-.876-2.05-.976-.275-.1-.475-.15-.675.15s-.775.976-0.95 1.176c-.175.2-.35.225-.65.075-.3-.15-1.267-.468-2.41-1.49-.892-.795-1.494-1.775-1.669-2.075-.175-.3-.019-.46.131-.61.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.243-.583-.49-.504-.675-.513l-.575-.01z" />
      </svg>
    </motion.a>
  );
}
