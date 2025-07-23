import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "../(public)/components/ui/header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js ile Web Geliştirme",
  description: "BTK Akademi Next.js ile Web Geliştirme Eğitimi",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="font-sans justify-items-center">
          <Header />
          <h1>Auth Layout</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
