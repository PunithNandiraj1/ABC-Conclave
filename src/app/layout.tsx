import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Navbar";
import Header from "@/components/Header";
import { Lexend_Giga } from 'next/font/google'
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Script from "next/script";

const myFont = Lexend_Giga({
  variable: '--font-sequel',
  subsets:['latin'],
  weight:["700"]
});
const myFont1 = localFont({ src: "../components/fonts/Sequel.ttf", variable: '--font-v' });
const myFont2 = localFont({ src: '../components/fonts/sato.otf', variable: '--font-sato' });

export const metadata: Metadata = {
  title: "AbcConclave",
  description: "AbcConclave",
  verification: {
    google: "d80EdPZpaAoRirwV349F41giaOu5hLXOCeDIrELPACQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${myFont.variable} ${myFont2.variable} scroll-smooth`} lang="en">
      <head>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "n22o0s04hq");
          `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RHLLCXS53Y" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RHLLCXS53Y');
          `}
        </Script>
      </head>
      <body className={myFont.className}>
        <Header />
        {children}
        <a
          href="https://t.me/ABC_Conclave "
          target="_blank"
          className="fixed z-[8888] bottom-4 right-4 md:bottom-10 md:right-8 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:drop-shadow-2xl transition-all ease-in-out duration-150"
        >
          <img src="/tel.svg" className="w-16 h-16" alt="" />
        </a>
        <Footer />
      </body>
    </html>
  );
}