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
      <body className="antialiased">{children}</body>
    </html>
  );
}
