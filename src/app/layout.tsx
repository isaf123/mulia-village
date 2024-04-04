import type { Metadata } from "next";
import { Inter, Montserrat, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavbarDesktop from "@/components/NavbarDesktop";
import NavbarMobile from "@/components/NavbarMobile";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mulia Village",
  description:
    "Mulia Village Juanda Hunian Premium Surabaya-Sidoarjo. Mempersembahkan hunian dengan konsep islami baik dalam lingkungan maupun transaksi. Berlokasikan sangat strategis karena berdekatan dengan Bandara Juanda dan Fasilitas Umum lainnya. Didukung pula dengan fasilitas berkualitas tinggi untuk menunjang kenyamanan tinggal anda seperti Masjid, Yayasan Tahfidz, dan Area Memanah. Sehingga sangat cocok untuk investasi masa depan.",
};
``;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}",{
                page_path:window.location.pathname,
              });
          `}
        </Script>
      </head>
      <body className={montserrat.className}>
        <div className="h-fit relative">
          <NavbarMobile />
          <NavbarDesktop />
          <div className="min-w-[390px] md:max-w-[1920px] m-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
