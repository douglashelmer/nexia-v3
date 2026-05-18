"use client"

import { useEffect, useState } from "react"

const CHECKOUT = "https://pay.onprofit.com.br/H8cdL2ni?off=EHyreQ"

function useCheckoutUrl() {
  const [url, setUrl] = useState(CHECKOUT)
  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    if (!p.toString()) return
    const base = new URL(CHECKOUT)
    p.forEach((v, k) => base.searchParams.set(k, v))
    setUrl(base.toString())
  }, [])
  return url
}

function useStickyBarVisible() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const check = () => {
      const hero = document.querySelector<HTMLElement>("section")
      const pricing = document.getElementById("pricing")
      const pastHero = hero ? hero.getBoundingClientRect().bottom < 0 : false
      const atPricing = pricing ? pricing.getBoundingClientRect().top < window.innerHeight * 0.6 : false
      setShow(pastHero && !atPricing)
    }
    check()
    window.addEventListener("scroll", check, { passive: true })
    return () => window.removeEventListener("scroll", check)
  }, [])
  return show
}

function scrollToPricing(e: React.MouseEvent) {
  e.preventDefault()
  document.getElementById("pricing")?.scrollIntoView({ behavior: "instant" })
}

export default function HeroSection() {
  const checkoutUrl = useCheckoutUrl()
  const stickyVisible = useStickyBarVisible()

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      {/*
        Mobile:  flex-col — vídeo (60vh) em cima, conteúdo em dark bg abaixo
        Desktop: relative + justify-end — vídeo cobre tudo, conteúdo sobreposto
      */}
      <section
        className="flex flex-col md:relative md:justify-end overflow-hidden"
        style={{ minHeight: "100dvh", background: "var(--color-bg)" }}
      >
        {/* ── VIDEO ─────────────────────────────────────────── */}
        {/*
          Mobile:  position relative, height 60vh (mostra mais conteúdo do vídeo)
          Desktop: position absolute, inset 0 (cobre a seção inteira)
        */}
        <div
          className="relative overflow-hidden shrink-0 h-[60vh] md:h-auto md:absolute md:inset-0"
          aria-hidden="true"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://res.cloudinary.com/dumfhfjuh/video/upload/so_0,f_auto,q_auto,w_1280/VIDEO-PAGINA2_tzgvin.jpg"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
          >
            <source
              media="(min-width: 768px)"
              src="https://res.cloudinary.com/dumfhfjuh/video/upload/f_auto,q_auto,w_1920,ac_none/VIDEO-PAGINA2_tzgvin.mp4"
              type="video/mp4"
            />
            <source
              media="(max-width: 767px)"
              src="https://res.cloudinary.com/dumfhfjuh/video/upload/f_auto,q_auto,w_720,ac_none/VIDEO-PAGINA2_tzgvin.mp4"
              type="video/mp4"
            />
          </video>

          {/* Fade inferior no mobile para blending suave com o dark bg */}
          <div
            className="md:hidden absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{ height: "80px", background: "linear-gradient(to bottom, transparent, var(--color-bg))" }}
          />
        </div>

        {/* Gradiente sobre o vídeo — desktop only */}
        <div aria-hidden className="hidden md:block absolute inset-0 pointer-events-none" style={{ zIndex: 1,
          background: "linear-gradient(to top, #050505 0%, rgba(5,5,5,0.80) 35%, rgba(5,5,5,0.40) 70%, rgba(5,5,5,0.20) 100%)" }} />

        {/* Grid decorativo — desktop only */}
        <div aria-hidden className="grid-bg hidden md:block" style={{ zIndex: 1 }} />

        {/* Glow orbs — desktop only */}
        <div aria-hidden className="hidden md:block" style={{
          position: "absolute", zIndex: 2, pointerEvents: "none",
          top: "15%", left: "50%", transform: "translateX(-50%)",
          width: "900px", height: "500px",
          background: "radial-gradient(ellipse, rgba(204,255,0,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />
        <div aria-hidden className="hidden md:block" style={{
          position: "absolute", zIndex: 2, pointerEvents: "none",
          top: "5%", right: "5%",
          width: "600px", height: "400px",
          background: "radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }} />

        {/* ─ CONTEÚDO ─────────────────────────────────────── */}
        {/*
          Mobile:  flow normal abaixo do vídeo, fundo escuro, padding top
          Desktop: overlaid no fundo da section, z-index 10
        */}
        <div
          className="relative w-full max-w-6xl mx-auto px-5 md:px-10"
          style={{ zIndex: 10, paddingTop: "clamp(24px, 4vw, 40px)", paddingBottom: 0 }}
        >

          {/* Badge */}
          <div className="anim-rise delay-100 mb-5">
            <div className="badge" style={{ width: "fit-content" }}>
              <span className="live-dot" aria-hidden />
              Acesso Imediato · Vitalício · Sem Mensalidade
            </div>
          </div>

          {/* Headline */}
          <h1
            className="anim-rise delay-200 mb-5"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "clamp(1.55rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#ffffff",
              maxWidth: "18ch",
              textWrap: "balance",
            }}
          >
            Crie Imagens, Vídeos e Anúncios Incríveis{" "}
            <span style={{ color: "var(--color-lime)" }}>
              com IA em Menos de 5 Minutos
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="anim-rise delay-300 leading-relaxed mb-6"
            style={{ color: "var(--color-muted)", maxWidth: "46ch", fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}
          >
            Sem designer, estúdio, modelos ou experiência.{" "}
            <strong style={{ color: "var(--color-subdued)", fontWeight: 500 }}>
              Alunos fechando projetos de R$1.950, R$4.000 e R$15.000 usando IA.
            </strong>
          </p>

          {/* CTA + urgency */}
          <div className="anim-rise delay-400 flex flex-col items-start gap-4 mb-10" style={{ maxWidth: "360px" }}>

            {/* Primary CTA */}
            <a href="#pricing" onClick={scrollToPricing} className="btn-cta" style={{ width: "100%" }}
              aria-label="Garantir vaga no nexIA">
              <span className="btn-cta-spin" aria-hidden />
              <span className="btn-cta-body">
                <span className="btn-cta-shimmer" aria-hidden />
                <span className="btn-cta-label">Garantir Minha Vaga →</span>
              </span>
            </a>

            {/* Progress bar */}
            <div style={{ width: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontFamily: "var(--font-mono),monospace", fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-muted)" }}>
                  Vagas preenchidas
                </span>
                <span style={{ fontFamily: "var(--font-mono),monospace", fontSize: "10px", color: "var(--color-lime)", fontWeight: 700, letterSpacing: "0.08em" }}>
                  89%
                </span>
              </div>
              <div className="progress-track">
                <div className="progress-fill anim-fill-bar" />
              </div>
            </div>

            {/* Guarantee */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span aria-hidden style={{ fontSize: "1rem" }}>🛡️</span>
              <span style={{ fontFamily: "var(--font-mono),monospace", fontSize: "9px", letterSpacing: "0.10em", textTransform: "uppercase", color: "var(--color-muted)" }}>
                Garantia 30 dias · Devolvemos em dobro
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── STICKY MOBILE CTA ────────────────────────────────── */}
      {stickyVisible && (
        <div
          className="md:hidden fixed bottom-0 inset-x-0 z-50 px-4 pt-3"
          style={{
            background: "rgba(5,5,5,0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid var(--color-border)",
            paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
          }}
        >
          <a href="#pricing" onClick={scrollToPricing} className="btn-cta cta-checkout" style={{ width: "100%" }}>
            <span className="btn-cta-spin" aria-hidden />
            <span className="btn-cta-body" style={{ padding: "14px 24px", justifyContent: "space-between" }}>
              <span className="btn-cta-shimmer" aria-hidden />
              <div style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "8px", letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(0,0,0,0.55)", lineHeight: 1 }}>
                  Combo nexIA® · acesso vitalício
                </div>
                <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", letterSpacing: "0.08em", fontWeight: 900, color: "#000", marginTop: "2px" }}>
                  Garantir minha vaga — acesso imediato →
                </div>
              </div>
            </span>
          </a>
        </div>
      )}

      {/* Checkout URL injector */}
      <script dangerouslySetInnerHTML={{
        __html: `(function(){var u=${JSON.stringify(checkoutUrl)};document.querySelectorAll('.cta-checkout').forEach(function(a){a.href=u;});})();`
      }} />
    </>
  )
}
