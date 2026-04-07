import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NYC Business Litigation Lawyers | Manhattan Commercial Litigation Attorneys | Sanford Sandy Young",
  description: "The Law Offices of Sanford F. Young P.C. provides skilled legal representation for complex litigation, appeals, and contract disputes in New York and New Jersey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${notoSans.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
