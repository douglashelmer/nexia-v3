import { ArrowRight, BookOpen, CheckCircle2, ChevronDown, DollarSign, Shield, XCircle, Zap } from "lucide-react"
import Image from "next/image"
import CountdownSection from "./components/CountdownSection"
import HeroSection from "./components/HeroSection"
import Reveal from "./components/Reveal"
import VideoGrid from "./components/VideoGrid"

const CHECKOUT = "https://payfast.greenn.com.br/ebnwgbt/offer/TFlokq?cupom=MAIO200&ch_id=138823&b_id_1=qt73vwh&b_offer_1=HtJr1o&b_id_2=67eh8rf&b_offer_2=V0iuEs&b_id_3=mzn9ucy&b_offer_3=9WkNK6"

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
  { id: 3, title: "Lives Periódicas", price: "R$597", desc: "Sessões ao vivo para tirar dúvidas, aprender as novidades de IA e aplicar em tempo real com o professor Douglas." },
  { id: 4, title: "Comunidade de Alunos", price: "R$397", desc: "Suporte direto com o professor. Troque experiências com +1.500 criativos que caminham junto com você." },
]

const faqs = [
  { q: "O acesso é realmente vitalício ou tem mensalidade?", a: "Sim, o acesso é 100% vitalício. Você paga uma vez e tem acesso para sempre, incluindo todas as atualizações futuras sem custo adicional." },
  { q: "Como funciona a garantia de 30 dias?", a: "Se você assistir todo o conteúdo, colocar em prática e não conseguir criar nada com o que é ensinado, devolvemos o que investiu em dobro. Basta enviar um e-mail com o comprovante de acesso dentro de 30 dias. Devolvemos pelo mesmo meio de pagamento, em até 5 dias úteis. O risco é 100% nosso." },
  { q: "Posso parcelar no cartão de crédito?", a: "Sim! Você parcela em até 12× de R$9,97 no cartão — sem custo adicional na plataforma. Prefere pagar à vista? No PIX o valor é R$97." },
  { q: "Preciso ter a versão paga do ChatGPT?", a: "Não é obrigatório. Os cursos ensinam a usar diversas ferramentas de IA, muitas delas gratuitas. Você pode começar sem nenhum custo adicional." },
  { q: "Funciona para o meu nicho de mercado?", a: "Sim! Os métodos ensinados se aplicam a qualquer nicho criativo — design, marketing, fotografia, vídeo, moda, esportes, produtos e muito mais." },
  { q: "Preciso de conhecimento técnico em marketing ou design?", a: "Não. Os cursos são desenhados para todos os níveis, do completo iniciante ao profissional que quer acelerar sua produção com IA." },
  { q: "Como recebo o acesso após a compra?", a: "Imediatamente após a confirmação do pagamento você recebe um e-mail com os dados de acesso à plataforma de aulas. É instantâneo." },
  { q: "Em quanto tempo vejo resultados?", a: "Alunos que seguem os cursos na sequência e praticam relatam os primeiros resultados em 7 a 14 dias. Resultados financeiros mais expressivos costumam aparecer entre o 1º e 3º mês." },
]

const tickerItems = ["Acesso Vitalício", "Resultados em Dias", "Comunidade de Alunos", "Atualizações Grátis", "Aulas ao Vivo", "Garantia 30 Dias", "Sem Mensalidade", "Suporte Contínuo"]

export default function Page() {
  return (
    <>
      {/* CLIENT: Nav + Hero + Sticky bar */}
      <HeroSection />

      {/* TICKER — pure CSS, no JS */}
      <div className="overflow-hidden py-3" style={{ background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,.06)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div className="flex items-center gap-8 w-max ticker-track" aria-hidden="true">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#C9D400", opacity: 0.7 }} />
              <span className="text-[11px] font-bold tracking-[.12em] uppercase whitespace-nowrap" style={{ color: "#a1a1aa" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <section className="py-20 md:py-32" style={{ background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <Reveal className="text-center mb-14">
            <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-5 px-3 py-1 rounded"
              style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>A REALIDADE</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-balance">
              Enquanto você lê isso, seus<br className="hidden md:block" /> concorrentes já estão usando IA
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "#a1a1aa" }}>
              Cada dia sem dominar IA é dinheiro que vai direto para o bolso de quem chegou antes.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "⚡", text: "\"Eles entregam em 2 horas o que leva 2 dias sem IA — e cobram o mesmo preço. Você vai continuar competindo assim?\"" },
              { icon: "💬", text: "\"Clientes já perguntam: 'você usa IA?' — quem diz não está perdendo o job na hora.\"" },
              { icon: "🏆", text: "\"O criativo que dominar IA agora vai dominar o mercado nos próximos 3 anos. Essa janela está se fechando.\"" },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.08}
                className="rounded-2xl p-8 text-center transition-colors"
                style={{ background: "#141414", border: "1px solid rgba(255,255,255,.08)" } as React.CSSProperties}>
                <div className="text-4xl mb-5" aria-hidden>{c.icon}</div>
                <p className="text-sm leading-relaxed italic" style={{ color: "#a1a1aa" }}>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VÍDEOS — CLIENT: lazy loading */}
      <section className="py-20 md:py-32" style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center mb-12">
            <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-5 px-3 py-1 rounded"
              style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>O QUE VOCÊ VAI CRIAR</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-balance">
              Trabalhos reais,<br /><span className="text-gradient">feitos com IA.</span>
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "#a1a1aa" }}>
              Esses são exemplos do que você vai dominar — criados pelos métodos ensinados no nexIA.
            </p>
          </Reveal>
          <VideoGrid />
        </div>
      </section>

      {/* GALERIA — infinite image marquee */}
      {(() => {
        const row1 = ["g-01","g-02","g-03","g-04","g-05","g-06","g-07","g-08","g-09","g-10","g-11","g-12","g-13","g-14","f-01","f-02","f-03"]
        const row2 = ["g-15","g-16","g-17","g-18","g-19","g-20","g-21","g-22","g-23","g-24","g-25","g-26","g-27","g-28","f-04","f-05","f-06"]
        const imgClass = "h-44 md:h-56 w-auto rounded-xl shrink-0 object-cover block"
        const rowStyle = { gap: "12px" }
        return (
          <section className="py-20 md:py-32 overflow-hidden" style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,.05)" }}>
            <div className="max-w-6xl mx-auto px-5 mb-12">
              <Reveal className="text-center">
                <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-5 px-3 py-1 rounded"
                  style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>PORTFÓLIO</div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-balance">
                  O que os alunos<br /><span className="text-gradient">já estão entregando.</span>
                </h2>
              </Reveal>
            </div>
            {/* Row 1 — scroll left */}
            <div className="overflow-hidden mb-3" aria-hidden="true">
              <div className="flex marquee-track" style={rowStyle}>
                {[...row1, ...row1].map((f, i) => (
                  <img key={i} src={`/assets/galeria/${f}.webp`} alt="" loading="lazy" decoding="async"
                    className={imgClass} style={{ border: "1px solid rgba(255,255,255,.07)" }} />
                ))}
              </div>
            </div>
            {/* Row 2 — scroll right */}
            <div className="overflow-hidden" aria-hidden="true">
              <div className="flex marquee-track-rev" style={rowStyle}>
                {[...row2, ...row2].map((f, i) => (
                  <img key={i} src={`/assets/galeria/${f}.webp`} alt="" loading="lazy" decoding="async"
                    className={imgClass} style={{ border: "1px solid rgba(255,255,255,.07)" }} />
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* ANTES / DEPOIS */}
      <section className="py-20 md:py-32" style={{ background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center mb-12">
            <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-5 px-3 py-1 rounded"
              style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>TRANSFORMAÇÃO COM IA</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-balance">
              Da foto comum ao<br /><span className="text-gradient">anúncio profissional.</span>
            </h2>
            <p className="mt-4 text-base max-w-[42ch] mx-auto" style={{ color: "#a1a1aa" }}>
              Imagens reais criadas com as técnicas ensinadas no nexIA. Produto real. IA do lado. Nenhuma agência envolvida.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: "/assets/antes-depois/01.webp", alt: "Perfume Asad Bourbon transformado em cena desértica cinematográfica com IA" },
              { src: "/assets/antes-depois/02.webp", alt: "Perfume VF Wepink transformado em cena tropical sobre barco com IA" },
              { src: "/assets/antes-depois/03.webp", alt: "Dove Clinical transformado em explosão de gelo ártico com IA" },
              { src: "/assets/antes-depois/04.webp", alt: "Old Spice VIP com modelo gerado por IA em ambiente de banheiro premium" },
              { src: "/assets/antes-depois/05.webp", alt: "Ban antiperspirante em cânion de gelo ártico criado com IA" },
              { src: "/assets/antes-depois/06.webp", alt: "Óleo essencial de Lavanda em jardim zen com IA" },
              { src: "/assets/antes-depois/07.webp", alt: "Nivea Milk em cena floral azul escuro criada com IA" },
              { src: "/assets/antes-depois/08.webp", alt: "Máscara Brilho Ybera com modelo feminino gerado por IA" },
            ].map((item, i) => (
              <Reveal key={item.src} delay={i * 0.04}
                className="rounded-xl overflow-hidden group"
                style={{ border: "1px solid rgba(255,255,255,.07)" } as React.CSSProperties}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <p className="text-xs" style={{ color: "#52525b" }}>
              Criações de alunos nexIA® — usando apenas ferramentas de IA ensinadas nos cursos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 md:py-32" style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="text-center mb-12">
            <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-5 px-3 py-1 rounded"
              style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>ALUNOS REAIS</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-balance">
              Sem filtro. Sem roteiro.<br /><span className="text-gradient">Só resultado.</span>
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "#a1a1aa" }}>
              Prints diretos da comunidade — do aluno que fechou R$15k ao que a cliente achou que era ridículo de fácil.
            </p>
          </Reveal>
          {/* masonry grid — CSS columns */}
          <div style={{ columnCount: 3, columnGap: "12px" }} className="[column-count:2] md:[column-count:3]">
            {[
              { src: "/assets/depoimentos/IMG_3126.webp",  alt: "Aluno fechou cliente de R$15k usando o nexIA" },
              { src: "/assets/depoimentos/rafa.webp",       alt: "Aluno Rafa conseguiu projeto de R$4.000 em packshots 3D" },
              { src: "/assets/depoimentos/whatsapp-04.webp",alt: "Aluno montou catálogo em 6h (vs 17h) e cobrou R$1.950" },
              { src: "/assets/depoimentos/whatsapp-02.webp",alt: "Cliente da aluna ficou impressionada com a qualidade" },
              { src: "/assets/depoimentos/IMG_3367.webp",   alt: "André publicou primeiro trabalho — vídeo para marca Vestem" },
              { src: "/assets/depoimentos/IMG_2803.webp",   alt: "Joelles lançou site usando imagens feitas no nexIA" },
              { src: "/assets/depoimentos/FazlrdtvwA.webp", alt: "Múltiplos alunos elogiando o curso e resultados" },
              { src: "/assets/depoimentos/whatsapp-01.webp",alt: "Aluno elogia didática e suporte do grupo" },
              { src: "/assets/depoimentos/whatsapp-03.webp",alt: "João Pestana conseguiu bons resultados rápido" },
            ].map((t) => (
              <div key={t.src} style={{ breakInside: "avoid", marginBottom: "12px" }}>
                <img
                  src={t.src}
                  alt={t.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-xl block"
                  style={{ border: "1px solid rgba(255,255,255,.06)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGITATE */}
      <section className="py-20 md:py-28" style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-3xl mx-auto px-5 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-6 text-balance">
              Não é falta de talento.<br />
              <span className="text-gradient">É falta do sistema certo.</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#a1a1aa" }}>
              Outros criativos não são mais inteligentes que você. Eles só descobriram as ferramentas certas antes. Cada semana que passa, a distância aumenta — e recuperar esse terreno vai custar mais tempo e mais dinheiro.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 md:py-32" style={{ background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <Reveal className="text-center mb-14">
            <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-5 px-3 py-1 rounded"
              style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>COMO FUNCIONA</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-balance">Simples. Prático. Direto ao resultado.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", Icon: BookOpen, title: "Escolha o curso", desc: "14 habilidades práticas cobrindo as áreas que o mercado paga: anúncios, vídeos, fotos, influenciadores virtuais, identidades visuais." },
              { num: "02", Icon: Zap,      title: "Aprenda e aplique", desc: "Aulas diretas ao ponto. Nada de enrolação. Você aprende assistindo e já aplica no próximo projeto real." },
              { num: "03", Icon: DollarSign, title: "Comece a cobrar", desc: "Com IA do lado, você entrega mais rápido e com qualidade profissional. O cliente paga pelo resultado — e você tem ele." },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}
                className="rounded-2xl p-8 transition-colors"
                style={{ background: "#141414", border: "1px solid rgba(255,255,255,.08)" } as React.CSSProperties}>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(201,212,0,.1)", color: "#C9D400" }}>
                    <step.Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-4xl font-black tabular-nums" style={{ color: "rgba(255,255,255,.08)" }}>{step.num}</span>
                </div>
                <h3 className="text-xl font-black mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CURSOS */}
      <section className="py-20 md:py-32" style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-4 px-3 py-1 rounded"
                style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>O ARSENAL COMPLETO</div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                Aprenda. Aplique.<br />
                <span className="text-gradient">Comece a cobrar.</span>
              </h2>
            </div>
            <p className="text-sm max-w-[32ch] leading-relaxed" style={{ color: "#a1a1aa" }}>
              Cada curso entrega uma habilidade que você pode monetizar imediatamente.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {courses.map((c) => (
              <div key={c.id} className="rounded-xl overflow-hidden transition-colors group relative"
                style={{ background: "#141414", border: c.id === 1 ? "1px solid rgba(201,212,0,.4)" : "1px solid rgba(255,255,255,.08)" }}>
                {c.id === 1 && (
                  <div className="absolute top-2 left-2 z-10 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: "#C9D400", color: "#090909" }}>
                    Comece aqui →
                  </div>
                )}
                <div className="overflow-hidden">
                  <img src={`/assets/cursos/curso-${String(c.id).padStart(2, "0")}.webp`} alt={c.title}
                    loading="lazy" decoding="async" width={400} height={400}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-3.5" style={{ background: "rgba(255,255,255,.02)", borderTop: "1px solid rgba(255,255,255,.06)" }}>
                  <div className="inline-flex text-[10px] font-bold tracking-wide rounded-full px-2.5 py-0.5 mb-2"
                    style={{ color: "rgba(255,255,255,.7)", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.12)" }}>
                    Curso {String(c.id).padStart(2, "0")}
                  </div>
                  <h3 className="text-sm font-bold leading-snug">{c.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="grid md:grid-cols-2">
          <Reveal className="p-10 md:p-16" style={{ background: "#090909", borderBottom: "1px solid rgba(255,255,255,.05)" } as React.CSSProperties}>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#C9D400" }}>
                <CheckCircle2 className="w-4 h-4 text-[#090909]" aria-hidden="true" />
              </div>
              <span className="text-lg font-black">É para você</span>
            </div>
            <ul className="space-y-5">
              {["Designer, criador de conteúdo, videomaker ou freelancer criativo", "Você sente que a IA está dominando o mercado e não quer ficar para trás", "Quer entregar projetos mais rápido e cobrar mais por isso", "Quer ter algo que seus concorrentes ainda não têm", "Cansado de trocar horas por dinheiro sem escalar"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
                  <ArrowRight className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#C9D400" }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="p-10 md:p-16" style={{ background: "#0e0e0e" } as React.CSSProperties}>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)" }}>
                <XCircle className="w-4 h-4" style={{ color: "rgba(255,255,255,.4)" }} aria-hidden="true" />
              </div>
              <span className="text-lg font-black" style={{ color: "#a1a1aa" }}>NÃO é para você se…</span>
            </div>
            <ul className="space-y-5">
              {["Você quer resultados sem aplicar nada", "Acha que IA vai te substituir (ela vai substituir quem não a usa)", "Prefere ficar na zona de conforto enquanto o mercado muda"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "#52525b" }}>
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,.2)" }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* OBJEÇÕES */}
      <section className="py-20 md:py-28" style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-3xl mx-auto px-5">
          <Reveal className="text-center mb-10">
            <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-5 px-3 py-1 rounded"
              style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>SUAS DÚVIDAS</div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-balance">
              O que você pode estar pensando agora.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {[
              {
                q: "\"Já tentei outros cursos e não consegui aplicar nada.\"",
                a: "A diferença é que nexIA não ensina teoria. Cada aula termina com algo concreto que você pode mostrar para um cliente. Não existe módulo de \"fundamentos\" de 3 horas antes de você ver resultado. Você abre o curso, acompanha, e sai com algo feito.",
              },
              {
                q: "\"Não sei se tenho tempo para acompanhar os cursos.\"",
                a: "O acesso é vitalício. Você acessa no seu ritmo — seja 20 minutos no almoço ou um bloco de horas no fim de semana. Não há prazo, não há aula expirando. E a maioria das aulas tem menos de 15 minutos: direto ao ponto, sem enrolação.",
              },
              {
                q: "\"E se eu comprar e não gostar?\"",
                a: "Você tem 30 dias de garantia com devolução em dobro. Se assistir tudo, praticar e não criar nada, devolvemos o dobro do que pagou. Não existe risco para você. O único risco é não entrar e continuar perdendo mercado para quem entrou.",
              },
            ].map((obj, i) => (
              <Reveal key={i} delay={i * 0.08}
                className="rounded-2xl p-8"
                style={{ background: "#141414", border: "1px solid rgba(255,255,255,.08)" } as React.CSSProperties}>
                <h3 className="text-base md:text-lg font-black mb-3 italic">{obj.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>{obj.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="py-20 md:py-32" style={{ background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-4 px-3 py-1 rounded"
                style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>BÔNUS EXCLUSIVOS</div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                2 bônus que você<br /><span className="text-gradient">leva hoje.</span>
              </h2>
            </div>
            <p className="text-sm max-w-[36ch] leading-relaxed" style={{ color: "#a1a1aa" }}>
              Não estão à venda separadamente. Apenas quem entrar hoje nessa oferta recebe todos os 4.
            </p>
          </Reveal>
          <div className="flex flex-col rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,.08)" }}>
            {bonuses.map((b, i) => (
              <Reveal key={b.id} delay={i * 0.08}
                className="grid"
                style={{ gridTemplateColumns: "160px 1fr", background: i % 2 === 0 ? "#141414" : "#111", borderTop: i > 0 ? "1px solid rgba(255,255,255,.06)" : undefined } as React.CSSProperties}>
                <img src={`/assets/bonus/bonus-0${b.id}.webp`} alt={b.title} loading="lazy" decoding="async"
                  width={160} height={160}
                  className="w-full h-full object-cover block" style={{ minHeight: 120 }} />
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#52525b" }}>Bônus {i + 1}</span>
                    <span className="text-xs font-bold line-through" style={{ color: "rgba(255,255,255,.25)" }}>{b.price}</span>
                  </div>
                  <h3 className="font-black text-base md:text-lg mb-1.5">{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — CLIENT: countdown + UTM checkout */}
      <CountdownSection />

      {/* GARANTIA */}
      <section className="py-20 md:py-32" style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-4xl mx-auto px-5">
          <Reveal className="grid md:grid-cols-[140px,1fr] gap-8 md:gap-12 items-center rounded-2xl p-8 md:p-12"
            style={{ background: "#141414", border: "1px solid rgba(201,212,0,.22)" } as React.CSSProperties}>
            <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full flex flex-col items-center justify-center text-center mx-auto md:mx-0 shrink-0"
              style={{ background: "#C9D400", boxShadow: "0 0 48px rgba(201,212,0,.35)" }}>
              <div className="text-4xl font-black text-[#090909] leading-none">30</div>
              <div className="text-[10px] font-black text-[#090909] uppercase tracking-wide leading-tight mt-1">dias de<br />garantia</div>
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-4 leading-tight">
                Garantia de 30 Dias<br /><span className="text-gradient">ou devolvemos em dobro.</span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#a1a1aa" }}>
                Se você assistir todo o conteúdo, colocar em prática e não conseguir criar nada com o que é ensinado, devolvemos o que investiu <strong style={{ color: "#f5f5f5" }}>em dobro</strong>. Basta enviar um e-mail com o comprovante de acesso — devolvemos pelo mesmo meio de pagamento em até 5 dias úteis. Sem burocracia, sem perguntas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ — native <details>, no JS needed */}
      <section className="py-20 md:py-32" style={{ background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-[1fr,2fr] gap-10 md:gap-16 items-start">
            <Reveal className="md:sticky md:top-24">
              <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-5 px-3 py-1 rounded"
                style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>TIRE SUA DÚVIDA</div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight">
                Perguntas<br /><span className="text-gradient">frequentes.</span>
              </h2>
            </Reveal>
            <div className="space-y-2.5">
              {faqs.map((faq, i) => (
                <details key={i} className="group rounded-xl overflow-hidden transition-colors"
                  style={{ background: "#141414", border: "1px solid rgba(255,255,255,.08)" }}>
                  <summary className="cursor-pointer px-6 py-5 flex items-center justify-between gap-4 list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9D400] focus-visible:ring-inset">
                    <span className="font-semibold text-sm text-left">{faq.q}</span>
                    <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: "#C9D400" }} aria-hidden="true" />
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32" style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-2xl mx-auto px-5 text-center">
          <Reveal>
            <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-8 px-3 py-1 rounded"
              style={{ color: "rgba(201,212,0,.7)", border: "1px solid rgba(201,212,0,.2)" }}>A DECISÃO É AGORA</div>
            <h2 className="font-black tracking-tighter leading-[.95] mb-6 text-balance"
              style={{ fontSize: "clamp(2.5rem,7vw,5rem)" }}>
              Quem cresce com IA<br /><span className="text-gradient">começa hoje.</span>
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-[44ch] mx-auto" style={{ color: "#a1a1aa" }}>
              Enquanto você pensa, outro criativo aprende, aplica e fecha o cliente que seria seu.
            </p>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div>
                <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-1" style={{ color: "rgba(201,212,0,.6)" }}>De <span className="line-through">R$297</span> por</div>
                <div className="font-black tracking-tighter leading-none" style={{ fontSize: "clamp(2.25rem,8vw,3.5rem)", color: "#C9D400" }}>R$97</div>
                <div className="text-sm mt-1" style={{ color: "#a1a1aa" }}>à vista no PIX · ou 12× R$9,97</div>
              </div>
            </div>
            <a href={CHECKOUT}
              className="cta-checkout inline-flex items-center gap-2 px-8 py-4 rounded-full font-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9D400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
              style={{ background: "#C9D400", color: "#090909", boxShadow: "0 0 40px rgba(201,212,0,.25)" }}>
              QUERO MINHA VANTAGEM COMPETITIVA <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <div className="flex items-center justify-center gap-5 mt-6 flex-wrap">
              {[{ icon: "🛡️", text: "Garantia 30 dias" }, { icon: "⚡", text: "Acesso imediato" }, { icon: "♾️", text: "Vitalício" }].map(b => (
                <div key={b.text} className="flex items-center gap-1.5 text-xs" style={{ color: "#52525b" }}>
                  <span aria-hidden>{b.icon}</span>{b.text}
                </div>
              ))}
            </div>
            <p className="text-sm mt-8 italic" style={{ color: "#52525b" }}>
              P.S. A IA não vai esperar. A pergunta é só quando você decide entrar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/assets/logo-nexia.svg" alt="nexIA" width={90} height={20} />
          <p className="text-xs" style={{ color: "#52525b" }}>© 2025 nexIA®. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}
