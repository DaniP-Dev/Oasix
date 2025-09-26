import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-mont",
  display: 'swap',
});

// NOTE: We assume the production site URL is https://leidyvega.dev — change SITE_URL below to your real domain.
const SITE_URL = "https://womenoasix.com/";

export const metadata: Metadata = {
  title: "Leidy Vega - Desarrolladora de Soluciones Informáticas",
  description:
    "Portfolio de Leidy Vega - Especialista en crear soluciones informáticas adaptables usando diferentes frameworks y metodologías ágiles",
  keywords: "desarrolladora, soluciones informáticas, apps, webs, frameworks, metodologías ágiles",
  authors: [{ name: "Leidy Vega" }],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Leidy Vega - Desarrolladora de Soluciones Informáticas",
    description:
      "Portfolio de Leidy Vega - Especialista en crear soluciones informáticas adaptables usando diferentes frameworks y metodologías ágiles",
    url: SITE_URL,
    siteName: "Leidy Vega",
    images: [
      {
        url: `${SITE_URL}/social-og.svg`,
        width: 1200,
        height: 630,
        alt: "Leidy Vega - Portfolio",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leidy Vega - Desarrolladora de Soluciones Informáticas",
    description:
      "Portfolio de Leidy Vega - Especialista en crear soluciones informáticas adaptables",
    images: [`${SITE_URL}/social-twitter.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }, { media: "(prefers-color-scheme: dark)", color: "#000000" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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
        {/* JSON-LD structured data for Person, Organization and a sample Project */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "name": "Leidy Vega",
              "url": "${SITE_URL}",
              "sameAs": [
                "https://www.linkedin.com/in/leidy-vega-b1b1b42b2/",
                "https://www.instagram.com/womenoasix/"
              ],
              "jobTitle": "Desarrolladora Full Stack",
              "worksFor": { "@type": "Organization", "name": "Leidy Vega" }
            },
            {
              "@type": "Organization",
              "name": "Leidy Vega",
              "url": "${SITE_URL}",
              "logo": "${SITE_URL}/file.svg"
            },
            {
              "@type": "CreativeWork",
              "name": "Portfolio - Leidy Vega",
              "url": "${SITE_URL}",
              "description": "Portfolio personal con proyectos de aplicaciones y sitios web.",
              "thumbnailUrl": "${SITE_URL}/social-og.svg"
            }
          ]
        }` }} />
      </head>
      <body
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
