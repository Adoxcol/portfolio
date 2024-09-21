import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Inter} from "next/font/google";
import { ThemeProvider } from "./provider";

const inter = Inter({subsets: ['latin']});


export const metadata: Metadata = {
  title: "Mahmoods Portfolio",
  description: "Minamalistic Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}><ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider></body>
      
       
    </html>
  );
}
