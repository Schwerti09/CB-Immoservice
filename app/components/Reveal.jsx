"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Staggered scroll reveal. Renders as the given element so it can BE the
 * styled item (.service, .step, .voice) rather than wrapping it — nth-child
 * rhythms in the stylesheet depend on that. Falls back to visible-on-mount
 * when IntersectionObserver is unavailable, so content is never trapped.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
  ...rest
}) {
  const node = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = node.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={node}
      className={`reveal ${className}`.trim()}
      data-shown={shown}
      style={{ "--delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
