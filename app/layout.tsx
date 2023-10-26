import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import ToasterContext from "./context/ToasterContext";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Chat Fusion",
  description:
    "Bringing Conversations to Life with Chat Fusion: Connect, Communicate, Create",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
