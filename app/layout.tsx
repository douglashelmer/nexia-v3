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
  description: "14 cursos de IA aplicada para criativos. Aprenda, aplique e seja o profissional que o mercado não dispensa. Garantia de 30 dias ou devolvemos em dobro.",
  openGraph: {
    title: "nexIA® — Domine IA. Ganhe dinheiro real.",
    description: "14 cursos de IA aplicada para criativos. Sem câmera, sem seguidores. Você aprende e começa a faturar.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://api.douglashelmer.com.br/etwmdnsbp.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','6=GQZOKTAgWiAoLkZdKVpFUgZfQUBVSxMaTQYcGwMBFgcYBx8DAR9ZFx8PXQwW');` }} />
        {/* End Google Tag Manager */}
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://api.douglashelmer.com.br/ns.html?6=GQZOKTAgWiAoLkZdKVpFUgZfQUBVSxMaTQYcGwMBFgcYBx8DAR9ZFx8PXQwW"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
