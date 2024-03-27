import type { Metadata } from "next";
import { Inter, Montserrat, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavbarDesktop from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavbarDesktop />
        {children}
      </body>
    </html>
  );
}
