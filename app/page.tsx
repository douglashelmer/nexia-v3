"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight, CheckCircle2, XCircle, Shield, Zap,
  BookOpen, DollarSign, Clock, Sparkles, ChevronDown,
} from "lucide-react";

const CHECKOUT = "https://payfast.greenn.com.br/mzn9ucy/offer/EYS2Ud?ch_id=136886";

const HERO_PHRASES = [
  "Ganhe dinheiro real.",
  "Sem precisar de equipamento.",
  "Produza 10× mais rápido.",
  "Domine o mercado criativo.",
  "Venda mais com IA.",
];

function useTypewriter(phrases: string[]) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(phrases[0]);
  const stateRef = useRef({ phrase: 0, char: phrases[0].length, deleting: false });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reduce) return;
    const tick = () => {
      const s = stateRef.current;
      const current = phrases[s.phrase];
      if (!s.deleting) {
        if (s.char < current.length) {
          s.char++;
          setText(current.slice(0, s.char));
          timerRef.current = setTimeout(tick, 55 + Math.random() * 35);
        } else {
          s.deleting = true;
          timerRef.current = setTimeout(tick, 2400);
        }
      } else {
        if (s.char > 0) {
          s.char--;
          setText(current.slice(0, s.char));
          timerRef.current = setTimeout(tick, 28 + Math.random() * 18);
        } else {
          s.deleting = false;
          s.phrase = (s.phrase + 1) % phrases.length;
          timerRef.current = setTimeout(tick, 350);
        }
      }
    };
    timerRef.current = setTimeout(tick, 2600);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [phrases, reduce]);

  return text;
}

function useCheckout() {
  const [url, setUrl] = useState(CHECKOUT);
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (!p.toString()) return;
    const base = new URL(CHECKOUT);
    p.forEach((v, k) => base.searchParams.set(k, v));
    setUrl(base.toString());
  }, []);
  return url;
}

function useFadeUp(delay = 0) {
  const reduce = useReducedMotion();
  return {
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: reduce ? 0 : 0.55, delay },
  };
}

function useCountdown(target: Date) {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  return {
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    mounted,
  };
}

const courses = [
  { id: 1, title: "Imagens e Vídeos Publicitários com IA" },
  { id: 2, title: "Ensaios Fotográficos com IA" },
  { id: 3, title: "Criar Anúncios Meta Ads com IA" },
  { id: 4, title: "Criar Influencer de IA" },
  { id: 5, title: "Clonagem de Movimentos com IA" },
  { id: 6, title: "Anúncios em Vídeo com IA" },
  { id: 7, title: "Banners Esportivos com IA" },
  { id: 8, title: "Criação de Carrosséis com IA" },
  { id: 9, title: "Upscale de Imagens com IA" },
  { id: 10, title: "Lipsync Profissional com IA" },
  { id: 11, title: "Destravando o ComfyUI" },
  { id: 12, title: "Vídeos Virais e Trends com IA" },
  { id: 13, title: "Como Monetizar com IA" },
  { id: 14, title: "Trabalhando com Flow (Grátis)" },
];

const bonuses = [
  { id: 1, title: "Curso Web.IA", price: "R$197", desc: "Aprenda a criar sites e landing pages com IA — sem saber programar. Um serviço que você pode cobrar por projeto ou mensalidade desde a primeira semana." },
  { id: 2, title: "Curso Logo Express", price: "R$147", desc: "Crie logos profissionais em minutos com IA. Método de 15 minutos — aprenda a encontrar clientes e precificar para escalar seus ganhos." },
  { id: 3, title: "Lives Periódicas", price: "R$597", desc: "Sessões ao vivo para tirar dúvidas, aprender as novidades de IA e aplicar em tempo real com o professor Douglas." },
  { id: 4, title: "Comunidade de Alunos", price: "R$397", desc: "Suporte direto com o professor. Troque experiências com +1.500 criativos que caminham junto com você." },
];

const faqs = [
  { q: "O acesso é realmente vitalício ou tem mensalidade?", a: "Sim, o acesso é 100% vitalício. Você paga uma vez e tem acesso para sempre, incluindo todas as atualizações futuras sem custo adicional." },
  { q: "Como funciona a garantia de 30 dias?", a: "Se você assistir todo o conteúdo, colocar em prática e não conseguir criar nada com o que é ensinado, devolvemos o que investiu em dobro. Sem burocracia, sem perguntas. O risco é 100% nosso." },
  { q: "Preciso ter a versão paga do ChatGPT?", a: "Não é obrigatório. Os cursos ensinam a usar diversas ferramentas de IA, muitas delas gratuitas. Você pode começar sem nenhum custo adicional." },
  { q: "Funciona para o meu nicho de mercado?", a: "Sim! Os métodos ensinados se aplicam a qualquer nicho criativo — design, marketing, fotografia, vídeo, moda, esportes, produtos e muito mais." },
  { q: "Preciso de conhecimento técnico em marketing ou design?", a: "Não. Os cursos são desenhados para todos os níveis, do completo iniciante ao profissional que quer acelerar sua produção com IA." },
  { q: "Como recebo o acesso após a compra?", a: "Imediatamente após a confirmação do pagamento você recebe um e-mail com os dados de acesso à plataforma de aulas. É instantâneo." },
  { q: "Em quanto tempo vejo resultados?", a: "Alunos que seguem os cursos na sequência e praticam relatam os primeiros resultados em 7 a 14 dias. Resultados financeiros mais expressivos costumam aparecer entre o 1º e 3º mês." },
];

const videos = [
  { src: "/assets/videos/video-01.webm", poster: "/assets/video-01.webp" },
  { src: "/assets/videos/video-02.mp4",  poster: "/assets/video-02.webp" },
  { src: "/assets/videos/video-03.mp4",  poster: "/assets/video-03.webp" },
  { src: "/assets/videos/video-04.webm", poster: "/assets/video-04.webp" },
  { src: "/assets/videos/video-05.webm", poster: "/assets/video-05.webp" },
  { src: "/assets/videos/video-06.webm", poster: "/assets/video-06.webp" },
];

const tickerItems = ["Acesso Vitalício", "14 Cursos Completos", "Comunidade de Alunos", "Atualizações Grátis", "Aulas ao Vivo", "Garantia 30 Dias", "Sem Mensalidade", "Suporte Contínuo"];

const valueStack = [
  { label: "14 Cursos Completos de IA", val: "R$1.235" },
  { label: "Bônus 1: Curso Web.IA", val: "R$197" },
  { label: "Bônus 2: Curso Logo Express", val: "R$147" },
  { label: "Bônus 3: Lives Periódicas", val: "R$597" },
  { label: "Bônus 4: Comunidade de Alunos", val: "R$397" },
];

function getTonightMidnight() {
  const d = new Date();
  d.setHours(23, 59, 59, 0);
  return d;
}

function useStickyBarVisible() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const check = () => {
      const hero = document.querySelector<HTMLElement>("section");
      const pricing = document.getElementById("pricing");
      const pastHero = hero ? hero.getBoundingClientRect().bottom < 0 : false;
      const atPricing = pricing ? pricing.getBoundingClientRect().top < window.innerHeight * 0.6 : false;
      setShow(pastHero && !atPricing);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);
  return show;
}

function scrollToPricing(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("pricing")?.scrollIntoView({ behavior: "instant" });
}

export default function Page() {
  const checkoutUrl = useCheckout();
  const [target] = useState(getTonightMidnight);
  const countdown = useCountdown(target);
  const fadeUp = useFadeUp();
  const stickyBarVisible = useStickyBarVisible();
  const typedText = useTypewriter(HERO_PHRASES);

  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#090909]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <Image src="/assets/logo-nexia.svg" alt="nexIA" width={110} height={25} priority />
          <a
            href="#pricing" onClick={scrollToPricing}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9D400]/40 text-[#C9D400] hover:bg-[#C9D400] hover:text-[#090909] transition-colors text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9D400]"
          >
            Ver oferta <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center pt-20 pb-16 overflow-hidden">
        {/* Hero BG — single image with perspective tilt */}
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/assets/hero-bg.webp"
            alt=""
            fetchPriority="high"
            decoding="async"
            style={{
              position: "absolute", inset: "-10% -8%",
              width: "116%", height: "120%",
              objectFit: "cover",
              opacity: 0.55,
              filter: "saturate(0.7) brightness(0.85)",
              transform: "perspective(900px) rotateX(9deg) rotateY(-5deg) scale(1.05)",
              transformOrigin: "50% 0%",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 55% 50% at 50% 44%, rgba(9,9,9,.75) 0%, rgba(9,9,9,.25) 60%, transparent 100%), linear-gradient(to bottom, rgba(9,9,9,.85) 0%, transparent 25%, transparent 60%, rgba(9,9,9,1) 100%), linear-gradient(to right, rgba(9,9,9,.9) 0%, transparent 22%, transparent 78%, rgba(9,9,9,.9) 100%)",
          }} />
        </div>

        {/* Grid + glow */}
        <div aria-hidden className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
        <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "rgba(201,212,0,.09)", filter: "blur(100px)" }} />

        <div className="relative max-w-4xl mx-auto px-5 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{ background: "rgba(201,212,0,.1)", border: "1px solid rgba(201,212,0,.28)" }}>
            <Sparkles className="w-3 h-3 text-[#C9D400]" aria-hidden="true" />
            <span className="text-[11px] font-bold text-[#C9D400] tracking-widest uppercase">
              14 Cursos · Acesso Vitalício · Garantia 30 Dias
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            className="font-black tracking-tighter leading-[0.92] mb-6"
            style={{ fontSize: "clamp(3rem, 11vw, 8rem)" }}>
            Domine IA.<br />
            <span className="text-gradient">{typedText}</span>
            <span className="typing-cursor" aria-hidden="true" />
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base md:text-lg max-w-[44ch] mx-auto mb-10 leading-relaxed"
            style={{ color: "#d4d4d8" }}>
            A IA já está substituindo quem não sabe usá-la. Aprenda, aplique e seja o profissional que o mercado não dispensa.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <a href="#pricing" onClick={scrollToPricing}
              className="pulse-cta flex items-center justify-between gap-3 w-full px-5 py-4 rounded-full font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9D400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
              style={{ background: "#C9D400", color: "#090909" }}>
              <div className="flex items-center gap-2.5 text-left">
                <span aria-hidden>🔒</span>
                <div>
                  <div className="text-sm font-black leading-tight">Combo nexIA® — oferta especial</div>
                  <div className="text-xs mt-0.5" style={{ opacity: 0.6 }}>14 cursos com 80% de desconto</div>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "#090909" }}>
                <ArrowRight className="w-4 h-4 text-[#C9D400]" aria-hidden="true" />
              </div>
            </a>

            <div className="flex items-center gap-5 flex-wrap justify-center">
              {[
                { icon: "⚡", text: "Acesso imediato" },
                { icon: "♾️", text: "Vitalício" },
                { icon: "🔓", text: "Sem mensalidade" },
              ].map(b => (
                <div key={b.text} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "#a1a1aa" }}>
                  <span aria-hidden>{b.icon}</span>{b.text}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 w-full rounded-xl px-4 py-3 text-left"
              style={{ background: "rgba(201,212,0,.07)", border: "1px solid rgba(201,212,0,.18)" }}>
              <Shield className="w-5 h-5 text-[#C9D400] shrink-0" aria-hidden="true" />
              <div>
                <div className="text-xs font-black text-[#C9D400]">Garantia de 30 dias — devolvemos em dobro</div>
                <div className="text-[11px] mt-0.5" style={{ color: "#a1a1aa" }}>
                  Assista, pratique e não criou nada? Você recebe o dobro de volta.
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-stretch max-w-xs mx-auto mt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,.07)", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
            {[{ num: "+1.500", label: "Alunos" }, { num: "14", label: "Cursos" }, { num: "4", label: "Bônus" }].map((s, i) => (
              <div key={s.label} className="flex items-center flex-1">
                <div className="flex-1 text-center py-4">
                  <div className="text-2xl font-black tracking-tight tabular-nums" style={{ color: "#C9D400" }}>{s.num}</div>
                  <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "#71717a" }}>{s.label}</div>
                </div>
                {i < 2 && <div className="w-px self-stretch" style={{ background: "rgba(255,255,255,.07)" }} />}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden py-3" style={{ background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,.06)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div className="flex items-center gap-8 w-max ticker-track">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#C9D400", opacity: 0.7 }} aria-hidden />
              <span className="text-[11px] font-bold tracking-[.12em] uppercase whitespace-nowrap" style={{ color: "#a1a1aa" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <section className="py-20 md:py-32" style={{ background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-5 px-3 py-1 rounded"
              style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>A REALIDADE</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-balance">
              Enquanto você lê isso, seus<br className="hidden md:block" /> concorrentes já estão usando IA
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "#a1a1aa" }}>
              Cada dia sem dominar IA é dinheiro que vai direto para o bolso de quem chegou antes.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "⚡", text: "\"Eles entregam em 2 horas o que leva 2 dias sem IA — e cobram o mesmo preço. Você vai continuar competindo assim?\"" },
              { icon: "💬", text: "\"Clientes já perguntam: 'você usa IA?' — quem diz não está perdendo o job na hora.\"" },
              { icon: "🏆", text: "\"O criativo que dominar IA agora vai dominar o mercado nos próximos 3 anos. Essa janela está se fechando.\"" },
            ].map((c, i) => (
              <motion.div key={i} {...useFadeUp(i * 0.08)}
                className="rounded-2xl p-8 text-center transition-colors"
                style={{ background: "#141414", border: "1px solid rgba(255,255,255,.08)" }}>
                <div className="text-4xl mb-5" aria-hidden>{c.icon}</div>
                <p className="text-sm leading-relaxed italic" style={{ color: "#a1a1aa" }}>{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VÍDEOS */}
      <section className="py-20 md:py-32" style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-5 px-3 py-1 rounded"
              style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>O QUE VOCÊ VAI CRIAR</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-balance">
              Trabalhos reais,<br /><span className="text-gradient">feitos com IA.</span>
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "#a1a1aa" }}>
              Esses são exemplos do que você vai dominar — criados pelos métodos ensinados no nexIA.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {videos.map((v, i) => (
              <motion.div key={i} {...useFadeUp((i % 3) * 0.08)}
                className="rounded-2xl overflow-hidden"
                style={{ background: "#141414", border: "1px solid rgba(255,255,255,.08)" }}>
                <video
                  src={v.src}
                  poster={v.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover block"
                  style={{ aspectRatio: "9/16", display: "block" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AGITATE */}
      <section className="py-20 md:py-28" style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-3xl mx-auto px-5 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-6 text-balance">
              Não é falta de talento.<br />
              <span className="text-gradient">É falta do sistema certo.</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#a1a1aa" }}>
              Outros criativos não são mais inteligentes que você. Eles só descobriram as ferramentas certas antes. Cada semana que passa, a distância aumenta — e recuperar esse terreno vai custar mais tempo e mais dinheiro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 md:py-32" style={{ background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-5 px-3 py-1 rounded"
              style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>COMO FUNCIONA</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-balance">Simples. Prático. Direto ao resultado.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", Icon: BookOpen, title: "Escolha o curso", desc: "14 habilidades práticas cobrindo as áreas que o mercado paga: anúncios, vídeos, fotos, influenciadores virtuais, identidades visuais." },
              { num: "02", Icon: Zap, title: "Aprenda e aplique", desc: "Aulas diretas ao ponto. Nada de enrolação. Você aprende assistindo e já aplica no próximo projeto real." },
              { num: "03", Icon: DollarSign, title: "Comece a cobrar", desc: "Com IA do lado, você entrega mais rápido e com qualidade profissional. O cliente paga pelo resultado — e você tem ele." },
            ].map((step, i) => (
              <motion.div key={step.num} {...useFadeUp(i * 0.1)}
                className="rounded-2xl p-8 transition-colors group"
                style={{ background: "#141414", border: "1px solid rgba(255,255,255,.08)" }}>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors"
                    style={{ background: "rgba(201,212,0,.1)", color: "#C9D400" }}>
                    <step.Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-4xl font-black tabular-nums" style={{ color: "rgba(255,255,255,.08)" }}>{step.num}</span>
                </div>
                <h3 className="text-xl font-black mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CURSOS */}
      <section className="py-20 md:py-32" style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-4 px-3 py-1 rounded"
                style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>O ARSENAL COMPLETO</div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                14 cursos. Uma habilidade<br />
                <span className="text-gradient">que paga por si só.</span>
              </h2>
            </div>
            <p className="text-sm max-w-[32ch] leading-relaxed" style={{ color: "#a1a1aa" }}>
              Cada curso entrega uma habilidade que você pode monetizar imediatamente.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {courses.map((c, i) => (
              <motion.div key={c.id} {...useFadeUp((i % 4) * 0.06)}
                className="rounded-xl overflow-hidden transition-colors group"
                style={{ background: "#141414", border: "1px solid rgba(255,255,255,.08)" }}>
                <div className="overflow-hidden">
                  <img src={`/assets/cursos/curso-${String(c.id).padStart(2, "0")}.webp`} alt={c.title} loading="lazy"
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-3.5" style={{ background: "rgba(255,255,255,.02)", borderTop: "1px solid rgba(255,255,255,.06)" }}>
                  <div className="inline-flex text-[10px] font-bold tracking-wide rounded-full px-2.5 py-0.5 mb-2"
                    style={{ color: "rgba(255,255,255,.7)", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.12)" }}>
                    Curso {String(c.id).padStart(2, "0")}
                  </div>
                  <h3 className="text-sm font-bold leading-snug">{c.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="grid md:grid-cols-2">
          <motion.div {...useFadeUp()} className="p-10 md:p-16" style={{ background: "#090909", borderBottom: "1px solid rgba(255,255,255,.05)" }}>
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
          </motion.div>
          <motion.div {...useFadeUp(0.1)} className="p-10 md:p-16" style={{ background: "#0e0e0e" }}>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)" }}>
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
          </motion.div>
        </div>
      </section>

      {/* OBJEÇÃO */}
      <section className="py-20 md:py-28" style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-2xl mx-auto px-5 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-5 text-balance">
              &ldquo;Já tentei outros cursos e não consegui aplicar nada.&rdquo;
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#a1a1aa" }}>
              A diferença é que nexIA não ensina teoria. Cada aula termina com algo concreto que você pode mostrar para um cliente. Não existe módulo de &ldquo;fundamentos&rdquo; de 3 horas antes de você ver resultado. Você abre o curso, acompanha, e sai com algo feito.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="py-20 md:py-32" style={{ background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-4 px-3 py-1 rounded"
                style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>BÔNUS EXCLUSIVOS</div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                4 bônus que você<br /><span className="text-gradient">leva hoje.</span>
              </h2>
            </div>
            <p className="text-sm max-w-[36ch] leading-relaxed" style={{ color: "#a1a1aa" }}>
              Não estão à venda separadamente. Apenas quem entrar hoje nessa oferta recebe todos os 4.
            </p>
          </motion.div>
          <div className="flex flex-col rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,.08)" }}>
            {bonuses.map((b, i) => (
              <motion.div key={b.id} {...useFadeUp(i * 0.08)}
                className="grid transition-colors"
                style={{ gridTemplateColumns: "160px 1fr", background: i % 2 === 0 ? "#141414" : "#111", borderTop: i > 0 ? "1px solid rgba(255,255,255,.06)" : undefined }}>
                <img src={`/assets/bonus/bonus-0${b.id}.webp`} alt={b.title} loading="lazy"
                  className="w-full h-full object-cover block" style={{ minHeight: 120 }} />
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#52525b" }}>Bônus {b.id}</span>
                    <span className="text-xs font-bold line-through" style={{ color: "rgba(255,255,255,.25)" }}>{b.price}</span>
                  </div>
                  <h3 className="font-black text-base md:text-lg mb-1.5">{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background: "#C9D400" }}>
        <div className="grid md:grid-cols-2">
          <motion.div {...useFadeUp()} className="p-10 md:p-16 flex flex-col justify-center" style={{ borderBottom: "1px solid rgba(0,0,0,.12)" }}>
            <div className="text-[11px] font-bold tracking-[.18em] uppercase mb-6" style={{ color: "rgba(0,0,0,.5)" }}>OFERTA ESPECIAL — HOJE SOMENTE</div>
            <div className="text-sm mb-0.5" style={{ color: "rgba(0,0,0,.55)" }}>DE <span className="line-through">R$2.573</span> POR</div>
            <div className="text-sm font-bold tracking-tight" style={{ color: "rgba(0,0,0,.6)" }}>12×</div>
            <div className="font-black tracking-tighter leading-[0.85] text-[#090909] mb-3"
              style={{ fontSize: "clamp(4.5rem,13vw,8rem)" }}>R$20,25</div>
            <div className="text-base font-semibold mb-8" style={{ color: "rgba(0,0,0,.6)" }}>ou R$197 à vista no PIX</div>
            <a href={checkoutUrl}
              id="cta-pricing"
              className="cta-checkout btn-3d w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#090909]"
              style={{ background: "#090909", color: "#C9D400", animation: "pulse-ring-dark 2.2s ease-in-out infinite" }}>
              <span>GARANTIR ACESSO VITALÍCIO</span>
              <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
            </a>
            <a href={checkoutUrl}
              id="cta-guarantee"
              className="cta-checkout flex items-start gap-3 rounded-xl p-4 mt-6 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#090909]"
              style={{ background: "rgba(0,0,0,.12)", border: "1px solid rgba(0,0,0,.18)" }}>
              <Shield className="w-7 h-7 shrink-0" style={{ color: "rgba(0,0,0,.7)" }} aria-hidden="true" />
              <div>
                <div className="font-black text-sm mb-0.5" style={{ color: "rgba(0,0,0,.8)" }}>Garantia 30 Dias — Devolvemos em Dobro</div>
                <div className="text-xs leading-relaxed" style={{ color: "rgba(0,0,0,.55)" }}>Assista tudo, pratique, não criou nada? Devolvemos o dobro. Sem perguntas.</div>
              </div>
            </a>
          </motion.div>
          <motion.div {...useFadeUp(0.1)} className="p-10 md:p-16 flex flex-col justify-center" style={{ background: "#090909", color: "#f5f5f5" }}>
            <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-5" style={{ color: "#C9D400" }}>ESSA CONDIÇÃO EXPIRA EM:</div>
            <div className="flex items-center gap-3 mb-2" aria-live="polite" suppressHydrationWarning>
              <Clock className="w-4 h-4 shrink-0" style={{ color: "#C9D400" }} aria-hidden="true" />
              {countdown.mounted ? (
                <div className="flex gap-3 font-black tabular-nums tracking-tight" style={{ fontSize: "clamp(1.75rem,5vw,2.5rem)", color: "#C9D400" }}>
                  <span>{String(countdown.hours).padStart(2, "0")}<span className="text-sm ml-0.5" style={{ color: "rgba(255,255,255,.3)" }}>h</span></span>
                  <span style={{ color: "rgba(255,255,255,.2)" }}>:</span>
                  <span>{String(countdown.minutes).padStart(2, "0")}<span className="text-sm ml-0.5" style={{ color: "rgba(255,255,255,.3)" }}>m</span></span>
                  <span style={{ color: "rgba(255,255,255,.2)" }}>:</span>
                  <span>{String(countdown.seconds).padStart(2, "0")}<span className="text-sm ml-0.5" style={{ color: "rgba(255,255,255,.3)" }}>s</span></span>
                </div>
              ) : (
                <div className="opacity-0 font-black tabular-nums" style={{ fontSize: "2rem" }}>00h:00m:00s</div>
              )}
            </div>
            <p className="text-xs mb-8" style={{ color: "rgba(255,255,255,.4)" }}>Depois disso, o valor sobe para R$497</p>
            <div style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}>
              {valueStack.map((row) => (
                <div key={row.label} className="flex justify-between items-center py-3.5 text-sm"
                  style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                  <span style={{ color: "rgba(255,255,255,.55)" }}>{row.label}</span>
                  <span className="line-through whitespace-nowrap ml-4" style={{ color: "rgba(255,255,255,.25)" }}>{row.val}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 font-black text-base">
                <span>Hoje somente</span>
                <span className="text-xl" style={{ color: "#C9D400" }}>R$197</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-20 md:py-32" style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-4xl mx-auto px-5">
          <motion.div {...fadeUp} className="grid md:grid-cols-[140px,1fr] gap-8 md:gap-12 items-center rounded-2xl p-8 md:p-12"
            style={{ background: "#141414", border: "1px solid rgba(201,212,0,.22)" }}>
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
                Se você assistir todo o conteúdo, colocar em prática e não conseguir criar nada com o que é ensinado, devolvemos o que investiu <strong style={{ color: "#f5f5f5" }}>em dobro</strong>. Sem burocracia, sem perguntas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32" style={{ background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-[1fr,2fr] gap-10 md:gap-16 items-start">
            <motion.div {...fadeUp} className="md:sticky md:top-24">
              <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-5 px-3 py-1 rounded"
                style={{ color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>TIRE SUA DÚVIDA</div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight">
                Perguntas<br /><span className="text-gradient">frequentes.</span>
              </h2>
            </motion.div>
            <div className="space-y-2.5">
              {faqs.map((faq, i) => (
                <motion.details key={i} {...useFadeUp(i * 0.05)}
                  className="group rounded-xl overflow-hidden transition-colors"
                  style={{ background: "#141414", border: "1px solid rgba(255,255,255,.08)" }}>
                  <summary className="cursor-pointer px-6 py-5 flex items-center justify-between gap-4 list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9D400] focus-visible:ring-inset">
                    <span className="font-semibold text-sm text-left">{faq.q}</span>
                    <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: "#C9D400" }} aria-hidden="true" />
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>{faq.a}</div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32" style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-2xl mx-auto px-5 text-center">
          <motion.div {...fadeUp}>
            <div className="inline-block text-[11px] font-bold tracking-[.16em] uppercase mb-8 px-3 py-1 rounded"
              style={{ color: "rgba(201,212,0,.7)", border: "1px solid rgba(201,212,0,.2)" }}>A DECISÃO É AGORA</div>
            <h2 className="font-black tracking-tighter leading-[.95] mb-6 text-balance"
              style={{ fontSize: "clamp(2.5rem,7vw,5rem)" }}>
              Quem cresce com IA<br /><span className="text-gradient">começa hoje.</span>
            </h2>
            <p className="text-base leading-relaxed mb-10 max-w-[44ch] mx-auto" style={{ color: "#a1a1aa" }}>
              Enquanto você pensa, outro criativo aprende, aplica e fecha o cliente que seria seu.
            </p>
            <a href={checkoutUrl}
              id="cta-final"
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
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/assets/logo-nexia.svg" alt="nexIA" width={90} height={20} />
          <p className="text-xs" style={{ color: "#52525b" }}>© 2025 nexIA®. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      {stickyBarVisible && (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-50 backdrop-blur-xl px-4 pt-3"
          style={{ background: "rgba(20,20,20,.95)", borderTop: "1px solid rgba(201,212,0,.25)", paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
          <a href="#pricing" onClick={scrollToPricing}
            className="flex items-center justify-between gap-3 px-5 py-3 rounded-full font-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9D400]"
            style={{ background: "#C9D400", color: "#090909" }}>
            <div className="text-left">
              <div className="text-[10px] leading-none" style={{ color: "rgba(0,0,0,.55)" }}>Combo nexIA® · 14 cursos</div>
              <div className="text-sm leading-snug mt-0.5">12× R$20,25 · ou R$197 PIX</div>
            </div>
            <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
          </a>
        </div>
      )}
    </>
  );
}
