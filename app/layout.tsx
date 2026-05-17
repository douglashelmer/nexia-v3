import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import RevealInit from "./components/RevealInit";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["500", "700", "800"],
});

export const metadata: Metadata = {
  title: "nexIA® — Crie Imagens, Vídeos e Anúncios Incríveis com IA em Menos de 5 Minutos",
  description: "Sem designer, estúdio, modelos, equipamentos ou experiência. Aprenda a criar com IA e comece a cobrar por isso. Garantia de 30 dias ou devolvemos em dobro.",
  openGraph: {
    title: "nexIA® — Crie Imagens, Vídeos e Anúncios Incríveis com IA em Menos de 5 Minutos",
    description: "Sem designer, estúdio ou experiência. Alunos fechando projetos de R$1.950, R$4.000 e R$15.000 usando IA.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${syne.variable} ${mono.variable}`}>
      <head>
        {/* UTMify — pixel */}
        <script dangerouslySetInnerHTML={{
          __html: `window.pixelId="69c6e9e04d7d4f8e24385f46";var a=document.createElement("script");a.setAttribute("async","");a.setAttribute("defer","");a.setAttribute("src","https://cdn.utmify.com.br/scripts/pixel/pixel.js");document.head.appendChild(a);`
        }} />
        {/* UTMify — UTM tracking */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          data-utmify-ignore-iframe=""
          data-utmify-ignore-retry=""
          async
          defer
        />
      </head>
      <body className="antialiased">
        <RevealInit />
        {children}
      </body>
    </html>
  );
}
