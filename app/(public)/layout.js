import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="font-sans grid grid-rows-[120px_1fr_20px] justify-items-center min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
