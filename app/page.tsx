import Image from "next/image"
import AnnouncementBar from "./components/AnnouncementBar"
import CountdownSection from "./components/CountdownSection"
import HeroSection from "./components/HeroSection"
import Reveal from "./components/Reveal"
import VideoGrid from "./components/VideoGrid"

const CHECKOUT = "https://pay.onprofit.com.br/H8cdL2ni?off=EHyreQ"

/* ── DATA ─────────────────────────────────────────────────────── */

const courses = [
  { id: 1,  title: "Imagens e Vídeos Publicitários com IA" },
  { id: 2,  title: "Ensaios Fotográficos com IA" },
  { id: 3,  title: "Criar Anúncios Meta Ads com IA" },
  { id: 4,  title: "Criar Influencer de IA" },
  { id: 5,  title: "Clonagem de Movimentos com IA" },
  { id: 6,  title: "Anúncios em Vídeo com IA" },
  { id: 7,  title: "Banners Esportivos com IA" },
  { id: 8,  title: "Criação de Carrosséis com IA" },
  { id: 9,  title: "Upscale de Imagens com IA" },
  { id: 10, title: "Lipsync Profissional com IA" },
  { id: 11, title: "Destravando o ComfyUI" },
  { id: 12, title: "Vídeos Virais e Trends com IA" },
  { id: 13, title: "Como Monetizar com IA" },
  { id: 14, title: "Trabalhando com Flow (Grátis)" },
]

const bonuses = [
  { img: "/assets/bonus/bonus-01.webp",          title: "Curso Web.IA",                        price: "R$197", desc: "Crie páginas e sites do zero com IA em minutos — sem saber programar, sem experiência em design." },
  { img: "/assets/bonus/bonus-02.webp",          title: "Curso Logo Express",                  price: "R$147", desc: "Logos de elite em 15 minutos. Vetorização profissional, pronta para impressão, pronta para vender." },
  { img: "/assets/bonus/bonus-05.webp",          title: "Sua Primeira Venda com IA em 7 Dias", price: "R$97",  desc: "Método prático para sair do zero, montar portfólio em tempo real e fechar o primeiro cliente em menos de uma semana." },
  { img: "/assets/bonus/bonus-template.avif",    title: "Templates Automáticos",               price: "R$197", desc: "Coleção de templates prontos para turbinar sua produção com IA — use, adapte e entregue mais rápido." },
  { img: "/assets/bonus/bonus-agentes.avif",     title: "Pacote de Agentes",                   price: "R$97",  desc: "Agentes de IA configurados para automatizar tarefas criativas e ganhar horas por semana." },
  { img: "/assets/bonus/bonus-masterclass.avif", title: "Masterclass de Prospecção",           price: "R$297", desc: "Como encontrar, abordar e fechar clientes criativos usando IA — sem carteira de clientes." },
  { img: "/assets/bonus/bonus-03.webp",          title: "Lives Periódicas com o Professor",    price: "R$597", desc: "Sessões ao vivo para tirar dúvidas, aprender as novidades de IA e aplicar em tempo real com o professor Douglas." },
  { img: "/assets/bonus/bonus-04.webp",          title: "Comunidade de Alunos",                price: "R$397", desc: "Suporte direto com o professor. Troque experiências com +1.500 criativos que caminham junto com você." },
]

const faqs = [
  { q: "O acesso é realmente vitalício ou tem mensalidade?", a: "Sim, o acesso é 100% vitalício. Você paga uma vez e tem acesso para sempre, incluindo todas as atualizações futuras sem custo adicional." },
  { q: "Como funciona a garantia de 30 dias?", a: "Se você assistir todo o conteúdo, colocar em prática e não conseguir criar nada com o que é ensinado, devolvemos o que investiu em dobro. Basta enviar um e-mail com o comprovante de acesso dentro de 30 dias. Devolvemos pelo mesmo meio de pagamento, em até 5 dias úteis. O risco é 100% nosso." },
  { q: "Como é feito o pagamento?", a: "O pagamento pode ser feito em até 12x de R$19,71 ou à vista via PIX por R$197. O acesso é liberado imediatamente após a confirmação." },
  { q: "Preciso ter a versão paga do ChatGPT?", a: "Não é obrigatório. Os cursos ensinam a usar diversas ferramentas de IA, muitas delas gratuitas. Você pode começar sem nenhum custo adicional." },
  { q: "Funciona para o meu nicho de mercado?", a: "Sim! Os métodos ensinados se aplicam a qualquer nicho criativo — design, marketing, fotografia, vídeo, moda, esportes, produtos e muito mais." },
  { q: "Preciso de conhecimento técnico em marketing ou design?", a: "Não. Os cursos são desenhados para todos os níveis, do completo iniciante ao profissional que quer acelerar sua produção com IA." },
  { q: "Como recebo o acesso após a compra?", a: "Imediatamente após a confirmação do pagamento você recebe um e-mail com os dados de acesso à plataforma de aulas. É instantâneo." },
  { q: "Em quanto tempo vejo resultados?", a: "Alunos que seguem os cursos na sequência e praticam relatam os primeiros resultados em 7 a 14 dias. Resultados financeiros mais expressivos costumam aparecer entre o 1º e 3º mês." },
]

const tickerItems = ["Acesso Vitalício", "Resultados em Dias", "Comunidade Ativa", "Atualizações Grátis", "Aulas ao Vivo", "Garantia 30 Dias", "Sem Mensalidade", "Suporte Contínuo"]

/* ── HELPERS ──────────────────────────────────────────────────── */
const C = {
  bg:      "var(--color-bg)",
  surf:    "var(--color-surface)",
  surf2:   "var(--color-surface-2)",
  white:   "#ffffff",
  muted:   "var(--color-muted)",
  subdued: "var(--color-subdued)",
  dim:     "var(--color-dim)",
  lime:    "var(--color-lime)",
  purple:  "var(--color-purple)",
  border:  "var(--color-border)",
  bLime:   "var(--color-border-lime)",
}

const sectionPad = "clamp(64px,10vw,120px) 0"

/* ── PAGE ─────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <>
      {/* Spacer for fixed AnnouncementBar */}
      <div style={{ height: "44px" }} />

      {/* NAV + HERO + Sticky CTA (client) */}
      <HeroSection />

      {/* ── TICKER ─────────────────────────────────────────── */}
      <div className="overflow-hidden" style={{ background: C.surf, borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", padding: "12px 0" }}>
        <div className="flex items-center gap-8 w-max ticker-track" aria-hidden="true">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--color-lime)", boxShadow: "var(--glow-lime-sm)", flexShrink: 0, display: "block" }} />
              <span style={{ fontFamily: "var(--font-mono),monospace", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: C.muted, whiteSpace: "nowrap" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── O QUE VOCÊ VAI CRIAR — Vídeos ──────────────────── */}
      <section style={{ padding: sectionPad, background: C.bg, borderTop: "1px solid var(--color-border)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden className="grid-bg" />
        <div className="max-w-6xl mx-auto px-5" style={{ position: "relative", zIndex: 1 }}>
          <Reveal className="text-center mb-12">
            <div className="section-label" style={{ justifyContent: "center" }}>O que você vai criar</div>
            <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 700, color: C.white, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Trabalhos reais,{" "}
              <span className="text-gradient">feitos com IA.</span>
            </h2>
            <p style={{ marginTop: "12px", fontSize: "1rem", color: C.muted, maxWidth: "48ch", margin: "12px auto 0" }}>
              Esses são exemplos do que você vai dominar — criados pelos métodos ensinados no nexIA.
            </p>
          </Reveal>
          <VideoGrid />
        </div>
      </section>

      {/* ── TRABALHOS DOS ALUNOS — marquee ─────────────────── */}
      {(() => {
        const imgs = ["01","02","03","04","05","06","07","09","11","12","13","14","15","16","17","18","19","20","21"]
        const half = Math.ceil(imgs.length / 2)
        const row1 = imgs.slice(0, half)
        const row2 = imgs.slice(half)
        return (
          <section className="overflow-hidden" style={{ padding: sectionPad, background: C.surf, borderTop: "1px solid var(--color-border)" }}>
            <div className="max-w-6xl mx-auto px-5 mb-10">
              <Reveal className="text-center">
                <div className="section-label" style={{ justifyContent: "center" }}>Portfólio</div>
                <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 700, color: C.white, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                  O que os alunos{" "}
                  <span className="text-gradient">já estão entregando.</span>
                </h2>
                <p style={{ marginTop: "12px", fontSize: "1rem", color: C.muted }}>
                  Anúncios, posts e campanhas reais — criados por alunos nexIA em menos de uma semana.
                </p>
              </Reveal>
            </div>
            <div className="overflow-hidden mb-3" aria-hidden="true">
              <div className="flex marquee-track" style={{ gap: "12px" }}>
                {[...row1, ...row1].map((f, i) => (
                  <img key={i} src={`/assets/hero/${f}.webp`} alt="" loading="lazy" decoding="async"
                    style={{ height: "clamp(160px,20vw,240px)", width: "auto", borderRadius: "12px", flexShrink: 0, objectFit: "cover", border: "1px solid var(--color-border)", aspectRatio: "1/1" }} />
                ))}
              </div>
            </div>
            <div className="overflow-hidden" aria-hidden="true">
              <div className="flex marquee-track-rev" style={{ gap: "12px", animationDuration: "50s" }}>
                {[...row2, ...row2].map((f, i) => (
                  <img key={i} src={`/assets/hero/${f}.webp`} alt="" loading="lazy" decoding="async"
                    style={{ height: "clamp(160px,20vw,240px)", width: "auto", borderRadius: "12px", flexShrink: 0, objectFit: "cover", border: "1px solid var(--color-border)", aspectRatio: "1/1" }} />
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* ── PROBLEMA — "Enquanto você lê isso…" ────────────── */}
      <section style={{ padding: sectionPad, background: C.bg, borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <Reveal className="text-center mb-14">
            <div className="section-label" style={{ justifyContent: "center" }}>A Realidade</div>
            <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 700, color: C.white, letterSpacing: "-0.03em", lineHeight: 1.15, textWrap: "balance" }}>
              Enquanto você lê isso, seus concorrentes{" "}
              <span className="text-gradient">já estão usando IA.</span>
            </h2>
            <p style={{ marginTop: "12px", fontSize: "1rem", color: C.muted, maxWidth: "48ch", margin: "12px auto 0" }}>
              Cada dia sem dominar IA é dinheiro que vai direto para o bolso de quem chegou antes.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "⚡", text: "\"Eles entregam em 2 horas o que leva 2 dias sem IA — e cobram o mesmo preço. Você vai continuar competindo assim?\"" },
              { icon: "💬", text: "\"Clientes já perguntam: 'você usa IA?' — quem diz não está perdendo o job na hora.\"" },
              { icon: "🏆", text: "\"O criativo que dominar IA agora vai dominar o mercado nos próximos 3 anos. Essa janela está se fechando.\"" },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="surface-card hover-lift" style={{ padding: "clamp(24px,4vw,36px)", height: "100%" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "16px" }} aria-hidden>{c.icon}</div>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: C.subdued, fontStyle: "italic" }}>{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANNOUNCEMENT BAR (sticky, client) ──────────────── */}
      <AnnouncementBar />

      {/* ── GALERIA — infinite marquee ──────────────────────── */}
      {(() => {
        const row1 = ["g-01","g-02","g-03","g-04","g-05","g-06","g-07","g-08","g-09","g-10","g-11","g-12","g-13","g-14","f-01","f-02","f-03"]
        const row2 = ["g-15","g-16","g-17","g-18","g-19","g-20","g-21","g-22","g-23","g-24","g-25","g-26","g-27","g-28","f-04","f-05","f-06"]
        return (
          <section className="overflow-hidden" style={{ padding: sectionPad, background: C.surf, borderTop: "1px solid var(--color-border)" }}>
            <div className="max-w-6xl mx-auto px-5 mb-12">
              <Reveal className="text-center">
                <div className="section-label" style={{ justifyContent: "center" }}>O que você vai criar</div>
                <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 700, color: C.white, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                  O que você vai criar{" "}
                  <span className="text-gradient">em minutos.</span>
                </h2>
              </Reveal>
            </div>
            <div className="overflow-hidden mb-3" aria-hidden="true">
              <div className="flex marquee-track" style={{ gap: "12px" }}>
                {[...row1, ...row1].map((f, i) => (
                  <img key={i} src={`/assets/galeria/${f}.webp`} alt="" loading="lazy" decoding="async"
                    style={{ height: "clamp(140px,18vw,220px)", width: "auto", borderRadius: "12px", flexShrink: 0, objectFit: "cover", border: "1px solid var(--color-border)" }} />
                ))}
              </div>
            </div>
            <div className="overflow-hidden" aria-hidden="true">
              <div className="flex marquee-track-rev" style={{ gap: "12px", animationDuration: "50s" }}>
                {[...row2, ...row2].map((f, i) => (
                  <img key={i} src={`/assets/galeria/${f}.webp`} alt="" loading="lazy" decoding="async"
                    style={{ height: "clamp(140px,18vw,220px)", width: "auto", borderRadius: "12px", flexShrink: 0, objectFit: "cover", border: "1px solid var(--color-border)" }} />
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* ── ANTES / DEPOIS ──────────────────────────────────── */}
      <section style={{ padding: sectionPad, background: C.bg, borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center mb-12">
            <div className="section-label" style={{ justifyContent: "center" }}>Transformação com IA</div>
            <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 700, color: C.white, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Da foto comum ao{" "}
              <span className="text-gradient">anúncio profissional.</span>
            </h2>
            <p style={{ marginTop: "12px", fontSize: "1rem", color: C.muted, maxWidth: "44ch", margin: "12px auto 0" }}>
              Imagens reais criadas com as técnicas ensinadas no nexIA. Produto real. IA do lado. Nenhuma agência envolvida.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: "/assets/antes-depois/01.webp", alt: "Perfume Asad Bourbon transformado em cena desértica cinematográfica com IA" },
              { src: "/assets/antes-depois/02.webp", alt: "Perfume VF Wepink transformado em cena tropical sobre barco com IA" },
              { src: "/assets/antes-depois/03.webp", alt: "Dove Clinical transformado em explosão de gelo ártico com IA" },
              { src: "/assets/antes-depois/04.webp", alt: "Old Spice VIP com modelo gerado por IA em ambiente premium" },
              { src: "/assets/antes-depois/05.webp", alt: "Ban antiperspirante em cânion de gelo ártico com IA" },
              { src: "/assets/antes-depois/06.webp", alt: "Óleo essencial de Lavanda em jardim zen com IA" },
              { src: "/assets/antes-depois/07.webp", alt: "Nivea Milk em cena floral azul escuro criada com IA" },
              { src: "/assets/antes-depois/08.webp", alt: "Máscara Brilho Ybera com modelo feminino gerado por IA" },
            ].map((item, i) => (
              <Reveal key={item.src} delay={i * 0.04}>
                <div className="hover-lift" style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid var(--color-border)" }}>
                  <img src={item.src} alt={item.alt} loading="lazy" decoding="async"
                    style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p style={{ fontSize: "0.75rem", color: C.muted, textAlign: "center", marginTop: "24px" }}>
              Criações de alunos nexIA® — usando apenas ferramentas de IA ensinadas nos cursos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── DEPOIMENTOS ─────────────────────────────────────── */}
      <section style={{ padding: sectionPad, background: C.surf, borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center mb-12">
            <div className="section-label" style={{ justifyContent: "center" }}>Alunos Reais</div>
            <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 700, color: C.white, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Sem filtro. Sem roteiro.{" "}
              <span className="text-gradient">Só resultado.</span>
            </h2>
            <p style={{ marginTop: "12px", fontSize: "1rem", color: C.muted, maxWidth: "52ch", margin: "12px auto 0" }}>
              Prints diretos da comunidade — do aluno que fechou R$15k ao que a cliente achou que era ridículo de fácil.
            </p>
          </Reveal>
          {/* masonry — CSS columns */}
          <div style={{ columnCount: 2, columnGap: "12px" }} className="md:[column-count:3]">
            {[
              { src: "/assets/depoimentos/IMG_3126.webp",  alt: "Aluno fechou cliente de R$15k usando o nexIA" },
              { src: "/assets/depoimentos/rafa.webp",       alt: "Aluno Rafa conseguiu projeto de R$4.000 em packshots 3D" },
              { src: "/assets/depoimentos/whatsapp-04.webp",alt: "Aluno montou catálogo em 6h e cobrou R$1.950" },
              { src: "/assets/depoimentos/whatsapp-02.webp",alt: "Cliente da aluna ficou impressionada com a qualidade" },
              { src: "/assets/depoimentos/IMG_3367.webp",   alt: "André publicou primeiro trabalho — vídeo para marca Vestem" },
              { src: "/assets/depoimentos/IMG_2803.webp",   alt: "Joelles lançou site usando imagens feitas no nexIA" },
              { src: "/assets/depoimentos/FazlrdtvwA.webp", alt: "Múltiplos alunos elogiando o curso e resultados" },
              { src: "/assets/depoimentos/whatsapp-01.webp",alt: "Aluno elogia didática e suporte do grupo" },
              { src: "/assets/depoimentos/whatsapp-03.webp",alt: "João Pestana conseguiu bons resultados rápido" },
            ].map((t) => (
              <div key={t.src} style={{ breakInside: "avoid", marginBottom: "12px" }}>
                <img src={t.src} alt={t.alt} loading="lazy" decoding="async"
                  style={{ width: "100%", borderRadius: "12px", display: "block", border: "1px solid var(--color-border)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGITATE ─────────────────────────────────────────── */}
      <section style={{ padding: sectionPad, background: C.bg, borderTop: "1px solid var(--color-border)", position: "relative", overflow: "hidden" }}>
        {/* Big glow */}
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(204,255,0,0.04) 0%, transparent 70%)" }} />
        <div className="max-w-3xl mx-auto px-5 text-center" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.75rem,5vw,3.5rem)", fontWeight: 700, color: C.white, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px", textWrap: "balance" }}>
              Não é falta de talento.{" "}
              <span className="text-gradient">É falta do sistema certo.</span>
            </h2>
            <p style={{ fontSize: "clamp(1rem,1.5vw,1.15rem)", lineHeight: 1.7, color: C.muted, maxWidth: "52ch", margin: "0 auto" }}>
              Outros criativos não são mais inteligentes que você. Eles só descobriram as ferramentas certas antes. Cada semana que passa, a distância aumenta — e recuperar esse terreno vai custar mais tempo e mais dinheiro.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── COMO FUNCIONA ────────────────────────────────────── */}
      <section style={{ padding: sectionPad, background: C.surf, borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <Reveal className="text-center mb-14">
            <div className="section-label" style={{ justifyContent: "center" }}>Como Funciona</div>
            <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 700, color: C.white, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Simples. Prático. Direto ao resultado.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { num: "01", icon: "📖", title: "Escolha o curso", desc: "14 habilidades práticas cobrindo as áreas que o mercado paga: anúncios, vídeos, fotos, influenciadores virtuais, identidades visuais." },
              { num: "02", icon: "⚡", title: "Aprenda e aplique", desc: "Aulas diretas ao ponto. Nada de enrolação. Você aprende assistindo e já aplica no próximo projeto real." },
              { num: "03", icon: "💸", title: "Comece a cobrar", desc: "Com IA do lado, você entrega mais rápido e com qualidade profissional. O cliente paga pelo resultado — e você tem ele." },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="surface-card" style={{ padding: "clamp(24px,4vw,36px)", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--color-lime-ghost)", border: "1px solid var(--color-border-lime)", fontSize: "1.25rem" }} aria-hidden>
                      {step.icon}
                    </div>
                    <span style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "3rem", fontWeight: 800, color: "rgba(255,255,255,0.04)", lineHeight: 1 }}>{step.num}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "1.25rem", fontWeight: 700, color: C.white, marginBottom: "8px" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: C.muted }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURSOS ──────────────────────────────────────────── */}
      <section id="conteudo" style={{ padding: sectionPad, background: C.bg, borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="section-label">O Arsenal Completo</div>
              <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 700, color: C.white, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Aprenda. Aplique.{" "}
                <span className="text-gradient">Comece a cobrar.</span>
              </h2>
            </div>
            <p style={{ fontSize: "0.875rem", color: C.muted, maxWidth: "30ch", lineHeight: 1.7 }}>
              Cada curso entrega uma habilidade que você pode monetizar imediatamente.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {courses.map((c) => (
              <div key={c.id} className="surface-card hover-lift" style={{
                overflow: "hidden",
                borderColor: c.id === 1 ? "var(--color-border-lime)" : "var(--color-border)",
              }}>
                {c.id === 1 && (
                  <div style={{ position: "absolute", top: "10px", left: "10px", zIndex: 10, fontFamily: "var(--font-mono),monospace", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "9999px", background: "var(--color-lime)", color: "#000", fontWeight: 700 }}>
                    Comece aqui →
                  </div>
                )}
                <div style={{ overflow: "hidden" }}>
                  <img src={`/assets/cursos/curso-${String(c.id).padStart(2, "0")}.webp`} alt={c.title}
                    loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div style={{ padding: "12px 14px", borderTop: "1px solid var(--color-border)" }}>
                  <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-lime)", marginBottom: "4px" }}>
                    Curso {String(c.id).padStart(2, "0")}
                  </div>
                  <h3 style={{ fontSize: "0.8rem", fontWeight: 700, color: C.white, lineHeight: 1.4 }}>{c.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUEM ────────────────────────────────────────── */}
      <section style={{ background: C.surf, borderTop: "1px solid var(--color-border)" }}>
        <div className="grid md:grid-cols-2">
          {/* É para você */}
          <Reveal style={{ padding: "clamp(40px,6vw,80px)", borderBottom: "1px solid var(--color-border)" } as React.CSSProperties}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--color-lime)", fontSize: "0.9rem" }} aria-hidden>✦</div>
              <span style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "1.25rem", fontWeight: 700, color: C.white }}>É para você</span>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Designer, criador de conteúdo, videomaker ou freelancer criativo",
                "Você sente que a IA está dominando o mercado e não quer ficar para trás",
                "Quer entregar projetos mais rápido e cobrar mais por isso",
                "Quer ter algo que seus concorrentes ainda não têm",
                "Cansado de trocar horas por dinheiro sem escalar",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.875rem", lineHeight: 1.6, color: C.subdued }}>
                  <span style={{ color: "var(--color-lime)", flexShrink: 0, marginTop: "2px" }} aria-hidden>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          {/* NÃO é para você */}
          <Reveal delay={0.1} style={{ padding: "clamp(40px,6vw,80px)" } as React.CSSProperties}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", fontSize: "0.9rem" }} aria-hidden>✕</div>
              <span style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "1.25rem", fontWeight: 700, color: C.muted }}>NÃO é para você se…</span>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Você quer resultados sem aplicar nada",
                "Acha que IA vai te substituir (ela vai substituir quem não a usa)",
                "Prefere ficar na zona de conforto enquanto o mercado muda",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.875rem", lineHeight: 1.6, color: C.dim }}>
                  <span style={{ flexShrink: 0, marginTop: "2px" }} aria-hidden>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── OBJEÇÕES ─────────────────────────────────────────── */}
      <section style={{ padding: sectionPad, background: C.bg, borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-3xl mx-auto px-5">
          <Reveal className="text-center mb-10">
            <div className="section-label" style={{ justifyContent: "center" }}>Suas Dúvidas</div>
            <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.5rem,3.5vw,2.5rem)", fontWeight: 700, color: C.white, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              O que você pode estar pensando agora.
            </h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { q: "\"Já tentei outros cursos e não consegui aplicar nada.\"", a: "A diferença é que nexIA não ensina teoria. Cada aula termina com algo concreto que você pode mostrar para um cliente. Não existe módulo de \"fundamentos\" de 3 horas antes de você ver resultado. Você abre o curso, acompanha, e sai com algo feito." },
              { q: "\"Não sei se tenho tempo para acompanhar os cursos.\"", a: "O acesso é vitalício. Você acessa no seu ritmo — seja 20 minutos no almoço ou um bloco de horas no fim de semana. Não há prazo, não há aula expirando. A maioria das aulas tem menos de 15 minutos: direto ao ponto, sem enrolação." },
              { q: "\"E se eu comprar e não gostar?\"", a: "Você tem 30 dias de garantia com devolução em dobro. Se assistir tudo, praticar e não criar nada, devolvemos o dobro do que pagou. Não existe risco para você. O único risco é não entrar e continuar perdendo mercado para quem entrou." },
            ].map((obj, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="surface-card" style={{ padding: "clamp(20px,4vw,32px)" }}>
                  <h3 style={{ fontSize: "clamp(0.95rem,1.5vw,1.1rem)", fontWeight: 700, marginBottom: "12px", fontStyle: "italic", color: C.white }}>{obj.q}</h3>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: C.subdued }}>{obj.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BÔNUS ────────────────────────────────────────────── */}
      <section style={{ padding: sectionPad, background: C.surf, borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="section-label" style={{ justifyContent: "center" }}>Bônus Exclusivos</div>
            <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 700, color: C.white, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              8 bônus que você{" "}
              <span className="text-gradient">leva hoje.</span>
            </h2>
            <p style={{ marginTop: "12px", fontSize: "1rem", color: C.muted, maxWidth: "40ch", margin: "12px auto 0" }}>
              Não estão à venda separadamente. Apenas quem entrar nessa oferta recebe todos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {bonuses.map((b, i) => (
              <Reveal key={b.img} delay={i * 0.06}>
                <div className="surface-card hover-lift" style={{ overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
                  <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
                    <img src={b.img} alt={b.title} loading="lazy" decoding="async"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", top: "12px", left: "12px", width: "28px", height: "28px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono),monospace", fontSize: "11px", fontWeight: 900, background: "var(--color-lime)", color: "#000" }}>
                      {i + 1}
                    </div>
                  </div>
                  <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "8px" }}>
                      <div>
                        <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "8px", letterSpacing: "0.16em", textTransform: "uppercase", color: C.muted, marginBottom: "4px" }}>Bônus {i + 1}</div>
                        <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: C.white, lineHeight: 1.3 }}>{b.title}</h3>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "8px", letterSpacing: "0.12em", textTransform: "uppercase", color: C.muted }}>valor</div>
                        <div style={{ fontFamily: "var(--font-syne),sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--color-lime)" }}>{b.price}</div>
                      </div>
                    </div>
                    <p style={{ fontSize: "0.8rem", lineHeight: 1.65, color: C.muted, marginTop: "auto" }}>{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="surface-card" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "20px 28px", borderColor: "var(--color-border-lime)" }}>
              <span style={{ fontWeight: 600, color: C.subdued }}>Valor total dos bônus:</span>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                <span style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "1.5rem", fontWeight: 800, textDecoration: "line-through", color: "#444" }}>R$2.026</span>
                <span style={{ fontFamily: "var(--font-mono),monospace", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 16px", borderRadius: "9999px", background: "var(--color-lime-ghost)", color: "var(--color-lime)", border: "1px solid var(--color-border-lime)", fontWeight: 700 }}>
                  GRÁTIS para você
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PRICING + COUNTDOWN (client) ─────────────────────── */}
      <CountdownSection />

      {/* ── GARANTIA ─────────────────────────────────────────── */}
      <section style={{ padding: sectionPad, background: C.bg, borderTop: "1px solid var(--color-border)", position: "relative", overflow: "hidden" }}>
        {/* Glow */}
        <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse, rgba(168,85,247,0.08) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
        <div className="max-w-4xl mx-auto px-5" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <div className="surface-card" style={{ display: "grid", gap: "clamp(24px,5vw,48px)", padding: "clamp(32px,6vw,56px)", borderColor: "var(--color-border-purple)", gridTemplateColumns: "auto 1fr", alignItems: "center" }}>
              {/* Badge 30d */}
              <div style={{
                width: "clamp(100px,14vw,140px)", height: "clamp(100px,14vw,140px)",
                borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexShrink: 0,
                background: "linear-gradient(135deg, var(--color-purple-deep), #1a0040)",
                border: "2px solid var(--color-border-purple)",
                boxShadow: "var(--glow-purple)",
              }}>
                <div style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", lineHeight: 1 }}>30</div>
                <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "8px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginTop: "4px", lineHeight: 1.3 }}>dias de<br />garantia</div>
              </div>
              <div>
                <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.5rem,4vw,2.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "16px", color: C.white }}>
                  Garantia de 30 Dias{" "}
                  <span className="text-gradient">ou devolvemos em dobro.</span>
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: 1.7, color: C.subdued }}>
                  Se você assistir todo o conteúdo, colocar em prática e não conseguir criar nada com o que é ensinado, devolvemos o que investiu <strong style={{ color: C.white }}>em dobro</strong>. Basta enviar um e-mail com o comprovante de acesso — devolvemos pelo mesmo meio de pagamento em até 5 dias úteis. Sem burocracia, sem perguntas.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section style={{ padding: sectionPad, background: C.surf, borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-[1fr,2fr] gap-10 md:gap-16 items-start">
            <Reveal className="md:sticky md:top-24">
              <div className="section-label">Tire sua dúvida</div>
              <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.5rem,3.5vw,2.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, color: C.white }}>
                Perguntas{" "}
                <span className="text-gradient">frequentes.</span>
              </h2>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {faqs.map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-trigger">
                    {faq.q}
                    <svg viewBox="0 0 24 24" aria-hidden><polyline points="6 9 12 15 18 9" /></svg>
                  </summary>
                  <div className="faq-body">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section style={{ padding: sectionPad, background: C.bg, borderTop: "1px solid var(--color-border)", position: "relative", overflow: "hidden" }}>
        {/* Glow */}
        <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(204,255,0,0.05) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div className="max-w-2xl mx-auto px-5 text-center" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <div className="section-label" style={{ justifyContent: "center" }}>A Decisão É Agora</div>
            <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(2.25rem,7vw,5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 0.95, color: C.white, marginBottom: "20px", textWrap: "balance" }}>
              Quem cresce com IA{" "}
              <span className="text-gradient">começa hoje.</span>
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: C.muted, maxWidth: "44ch", margin: "0 auto 32px" }}>
              Enquanto você pensa, outro criativo aprende, aplica e fecha o cliente que seria seu.
            </p>

            {/* Price display */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "28px" }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: C.muted, marginBottom: "4px" }}>
                  De <s>R$297</s> por apenas
                </div>
                <div style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(2.5rem,8vw,4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: C.white }}>
                  R$<span className="text-lime">197</span>
                </div>
                <div style={{ fontSize: "0.875rem", color: C.muted, marginTop: "6px" }}>à vista no PIX · ou 12× de R$19,71</div>
              </div>
            </div>

            {/* CTA */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
              <a href={CHECKOUT} id="cta-final-section" className="btn-cta cta-checkout">
                <span className="btn-cta-spin" aria-hidden />
                <span className="btn-cta-body" style={{ padding: "18px 52px" }}>
                  <span className="btn-cta-shimmer" aria-hidden />
                  <span className="btn-cta-label" style={{ fontSize: "11px" }}>Quero Minha Vantagem Competitiva →</span>
                </span>
              </a>
            </div>

            {/* Payment badge */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px", opacity: 0.4 }}>
              <img src="/assets/onprofit.svg" alt="Plataforma OnProfit" width={180} height={14} />
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
              {[{ icon: "🛡️", text: "Garantia 30 dias" }, { icon: "⚡", text: "Acesso imediato" }, { icon: "♾️", text: "Vitalício" }].map(b => (
                <div key={b.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-mono),monospace", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: C.muted }}>
                  <span aria-hidden>{b.icon}</span>{b.text}
                </div>
              ))}
            </div>

            <p style={{ fontSize: "0.875rem", marginTop: "28px", fontStyle: "italic", color: "#444" }}>
              P.S. A IA não vai esperar. A pergunta é só quando você decide entrar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer style={{ padding: "28px 0", background: C.surf, borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/assets/logo-nexia-new.svg" alt="nexIA" width={90} height={26}
            style={{ filter: "brightness(0) invert(1)" }} />
          <p style={{ fontFamily: "var(--font-mono),monospace", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: C.muted }}>
            © 2025 nexIA®. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  )
}
