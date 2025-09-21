import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-mont",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Leydi Vega - Desarrolladora de Soluciones Informáticas",
  description: "Portfolio de Leydi Vega - Especialista en crear soluciones informáticas adaptables usando diferentes frameworks y metodologías ágiles",
  keywords: "desarrolladora, soluciones informáticas, apps, webs, frameworks, metodologías ágiles",
  authors: [{ name: "Leydi Vega" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
