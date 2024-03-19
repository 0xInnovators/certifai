import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Web3Provider from "./providers/Web3Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Hackathon Nearx + Optimism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-6xl w-full m-auto bg-blue-400">
          <Web3Provider>
            <NavBar />
            <div className="bg-green-300">{children}</div>
            <Footer />
          </Web3Provider>
        </div>
      </body>
    </html>
  );
}
