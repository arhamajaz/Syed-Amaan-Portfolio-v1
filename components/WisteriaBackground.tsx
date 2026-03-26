"use client";

import { useEffect, useState } from "react";

export function WisteriaBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {[...Array(15)].map((_, i) => {
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 15; // 15-25s
        const delay = Math.random() * -20; // Pre-loaded
        const scale = Math.random() * 0.5 + 0.8;
        const swayDuration = duration / 3;

        return (
          <div
            key={i}
            className="wisteria-petal"
            style={{
              left: `${left}%`,
              scale: scale,
              animation: `
                petal-fall ${duration}s linear ${delay}s infinite,
                petal-sway ${swayDuration}s ease-in-out ${delay}s infinite,
                petal-rotate ${duration}s linear infinite
              `,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-20 drop-shadow-sm"
            >
              <path
                d="M12 2C12 2 4 8 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 8 12 2 12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
