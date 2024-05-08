import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Siteheader from "./home/siteheader";
import BodyContent from "./home/bodyContent";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "MediSoft",
  description: "You Health Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>
          <Navbar />
          <Siteheader />
          <BodyContent />
          {children}
        </main>
      </body>
    </html>
  );
}
