"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, Shield, Sparkles } from "lucide-react"

const CHECKOUT = "https://payfast.greenn.com.br/mzn9ucy/offer/EYS2Ud?ch_id=136886"

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
        <div aria-hidden className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
        <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "rgba(201,212,0,.09)", filter: "blur(100px)" }} />

        <div className="relative max-w-4xl mx-auto px-5 text-center z-10">
          <div className="h-anim h-anim-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{ background: "rgba(201,212,0,.1)", border: "1px solid rgba(201,212,0,.28)" }}>
            <Sparkles className="w-3 h-3 text-[#C9D400]" aria-hidden="true" />
            <span className="text-[11px] font-bold text-[#C9D400] tracking-widest uppercase">
              Acesso Vitalício · Garantia 30 Dias · Sem Mensalidade
            </span>
          </div>

          <h1 className="h-anim h-anim-1 font-black tracking-tighter leading-[0.92] mb-6"
            style={{ fontSize: "clamp(3rem, 11vw, 8rem)" }}>
            Domine IA.<br />
            <span className="text-gradient">Ganhe dinheiro real.</span>
          </h1>

          <p className="h-anim h-anim-2 text-base md:text-lg max-w-[44ch] mx-auto mb-10 leading-relaxed"
            style={{ color: "#d4d4d8" }}>
Aprenda a criar imagens e vídeos com IA — e cobrar por isso. Sem câmera, sem equipe, sem experiência prévia.
          </p>

          <div className="h-anim h-anim-3 flex flex-col items-center gap-4 max-w-md mx-auto">
            <a href="#pricing" onClick={scrollToPricing}
              className="pulse-cta flex items-center justify-center gap-3 w-full px-6 py-4 rounded-full font-black text-sm tracking-wide uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9D400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
              style={{ background: "#C9D400", color: "#090909" }}>
              GARANTIR MINHA VAGA COM 80% OFF
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>

            <div className="flex items-center gap-5 flex-wrap justify-center">
              {[{ icon: "⚡", text: "Acesso imediato" }, { icon: "♾️", text: "Vitalício" }, { icon: "🔓", text: "Sem mensalidade" }].map(b => (
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
          </div>

          <div className="h-anim h-anim-4 flex items-stretch max-w-xs mx-auto mt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,.07)", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
            {[{ num: "+1.500", label: "Alunos" }, { num: "14", label: "Habilidades" }, { num: "4", label: "Bônus" }].map((s, i) => (
              <div key={s.label} className="flex items-center flex-1">
                <div className="flex-1 text-center py-4">
                  <div className="text-2xl font-black tracking-tight tabular-nums" style={{ color: "#C9D400" }}>{s.num}</div>
                  <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "#71717a" }}>{s.label}</div>
                </div>
                {i < 2 && <div className="w-px self-stretch" style={{ background: "rgba(255,255,255,.07)" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      {stickyVisible && (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-50 backdrop-blur-xl px-4 pt-3"
          style={{ background: "rgba(20,20,20,.95)", borderTop: "1px solid rgba(201,212,0,.25)", paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
          <a href="#pricing" onClick={scrollToPricing}
            className="flex items-center justify-between gap-3 px-5 py-3 rounded-full font-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9D400]"
            style={{ background: "#C9D400", color: "#090909" }}>
            <div className="text-left">
              <div className="text-[10px] leading-none" style={{ color: "rgba(0,0,0,.55)" }}>Combo nexIA® · acesso vitalício</div>
              <div className="text-sm leading-snug mt-0.5">12× R$20,25 · ou R$197 PIX</div>
            </div>
            <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
          </a>
        </div>
      )}

      {/* CHECKOUT LINK injector — keeps UTM on all CTAs */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var u=${JSON.stringify(checkoutUrl)};document.querySelectorAll('.cta-checkout').forEach(function(a){a.href=u;});})();`,
        }}
      />
    </>
  )
}
