import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "./header";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "platform",
  description: "Measruing impact using the SDGs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" suppressHydrationWarning >
    <body className={inter.className}>
    <Providers> 
    
      
        < Header />
        {children}
        </Providers>
        </body>
    
    </html>
  );
}
