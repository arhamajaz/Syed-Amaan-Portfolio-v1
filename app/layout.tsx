import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SYED AMAAN | Visionary Curator & Data Analyst",
  description: "A premium, minimalist portfolio showcasing strategic mindset and analytical precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Inter:wght@300;400;600;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="selection:bg-primary selection:text-on-primary">
        {children}
      </body>
    </html>
  );
}
