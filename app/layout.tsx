import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
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
    <html lang="pt-BR" className={outfit.variable}>
      <head>
        {/* Preload LCP hero image — browser starts fetching before JS runs */}
        {/* eslint-disable-next-line @next/next/no-head-element */}
        <link rel="preload" as="image" href="/assets/antes-depois/01.webp" fetchPriority="high" />
        {/* Clarity + GTM — both deferred to window.load to avoid blocking LCP/TBT */}
        <script dangerouslySetInnerHTML={{
          __html: `window.addEventListener('load',function(){
            (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wr0bsewjai");
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://api.douglashelmer.com.br/etwmdnsbp.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','6=GQZOKTAgWiAoLkZdKVpFUgZfQUBVSxMaTQYcGwMBFgcYBx8DAR9ZFx8PXQwW');
          });`
        }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
