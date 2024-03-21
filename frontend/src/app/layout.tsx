import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Web3Provider from "./providers/Web3Provider";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CertifAI",
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
        <div className="max-w-6xl w-full m-auto">
          <Web3Provider>
            <NavBar />
            <div className="">{children}</div>
            <Footer />
            <ToastContainer />
          </Web3Provider>
        </div>
      </body>
    </html>
  );
}
