import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tahir Bibić — Portfolio",
  description: "Full Stack Developer | 15 y/o | Backend-focused | Novi Pazar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}