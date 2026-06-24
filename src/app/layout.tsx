import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DiaStyle — Live Beyond Diabetes",
  description:
    "The premium lifestyle and technology platform for people living with Type 1 Diabetes. AI coaching, community, education, and beautiful device accessories.",
  keywords: ["diabetes", "T1D", "dexcom", "glucose", "AI coach", "Type 1 Diabetes", "lifestyle"],
  openGraph: {
    title: "DiaStyle — Live Beyond Diabetes",
    description: "Understand more. Worry less. Live better.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
