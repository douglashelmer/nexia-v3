import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "nexIA® — Domine IA. Ganhe dinheiro real.",
  description: "Aprenda a criar imagens e vídeos com IA e comece a cobrar por isso. Sem câmera, sem equipe, sem experiência prévia. Garantia de 30 dias ou devolvemos em dobro.",
  openGraph: {
    title: "nexIA® — Domine IA. Ganhe dinheiro real.",
    description: "Aprenda a criar imagens e vídeos com IA — e cobrar por isso. Alunos fechando projetos de R$1.950, R$4.000 e R$15.000.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <head>
        {/* Microsoft Clarity */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "wr0bsewjai");`
        }} />
        {/* GTM — carregado após window.load para não bloquear LCP/TBT */}
        <script dangerouslySetInnerHTML={{
          __html: `window.addEventListener('load',function(){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://api.douglashelmer.com.br/etwmdnsbp.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','6=GQZOKTAgWiAoLkZdKVpFUgZfQUBVSxMaTQYcGwMBFgcYBx8DAR9ZFx8PXQwW');});`
        }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
