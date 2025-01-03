import { Metadata } from "next";
import "./globals.css";
import { Manrope, Gabarito } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
});

export const metadata: Metadata = {
  title: "Tushar Jadhav",
  description: "A Visionary Artist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${gabarito.variable} font-primary`}>
        {children}
      </body>
    </html>
  );
}
