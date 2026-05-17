"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, Shield, Sparkles } from "lucide-react"

const CHECKOUT = "https://payfast.greenn.com.br/ebnwgbt/offer/TFlokq?cupom=MAIO200&ch_id=138823&b_id_1=qt73vwh&b_offer_1=HtJr1o&b_id_2=67eh8rf&b_offer_2=V0iuEs&b_id_3=mzn9ucy&b_offer_3=9WkNK6"

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
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b"
        style={{ background: "rgba(255,255,255,.92)", borderColor: "rgba(0,0,0,.08)" }}>
        <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <Image src="/assets/logo-nexia-new.svg" alt="nexIA" width={120} height={36} priority />
          <a
            href="#pricing" onClick={scrollToPricing}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9]"
            style={{ borderColor: "rgba(109,40,217,.35)", color: "#6d28d9" }}
            onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "#6d28d9"; a.style.color = "#fff"; a.style.borderColor = "#6d28d9" }}
            onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = ""; a.style.color = "#6d28d9"; a.style.borderColor = "rgba(109,40,217,.35)" }}
          >
            Ver oferta <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center pt-20 pb-16 overflow-hidden"
        style={{ background: "#ffffff" }}>

        {/* Decorations */}
        <div aria-hidden className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] rounded-full pointer-events-none"
          style={{ background: "rgba(109,40,217,.1)", filter: "blur(120px)" }} />
        <div aria-hidden className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "rgba(109,40,217,.05)", filter: "blur(120px)" }} />

        <div className="relative max-w-4xl mx-auto px-5 text-center z-10">
          <div className="h-anim h-anim-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{ background: "rgba(109,40,217,.07)", border: "1px solid rgba(109,40,217,.22)" }}>
            <Sparkles className="w-3 h-3 text-[#6d28d9]" aria-hidden="true" />
            <span className="text-[11px] font-bold text-[#6d28d9] tracking-widest uppercase">
              Acesso Vitalício · Garantia 30 Dias · Sem Mensalidade
            </span>
          </div>

          <h1 className="h-anim h-anim-1 font-black tracking-tighter leading-[1.0] mb-6"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#111111" }}>
            Crie Imagens, Vídeos e Anúncios Incríveis<br />
            <span className="text-gradient">em Menos de 5 Minutos</span><br />
            Usando Inteligência Artificial
          </h1>

          <p className="h-anim h-anim-2 text-base md:text-lg max-w-[52ch] mx-auto mb-10 leading-relaxed"
            style={{ color: "#555555" }}>
            Sem designer, estúdio, modelos, equipamentos, fotógrafos, maquiadores ou experiência!
          </p>

          <div className="h-anim h-anim-3 flex flex-col items-center gap-4 max-w-md mx-auto">
            <a href="#pricing" onClick={scrollToPricing}
              className="pulse-cta btn-3d flex items-center justify-center gap-3 w-full px-6 py-4 rounded-full font-black text-sm tracking-wide uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              style={{ background: "linear-gradient(135deg, #6d28d9, #4f46e5)", color: "#fff" }}>
              GARANTIR MINHA VAGA COM R$200 OFF
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>

            <div className="flex items-center gap-5 flex-wrap justify-center">
              {[{ icon: "⚡", text: "Acesso imediato" }, { icon: "♾️", text: "Vitalício" }, { icon: "🔓", text: "Sem mensalidade" }].map(b => (
                <div key={b.text} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "#888888" }}>
                  <span aria-hidden>{b.icon}</span>{b.text}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 w-full rounded-xl px-4 py-3 text-left"
              style={{ background: "rgba(109,40,217,.06)", border: "1px solid rgba(109,40,217,.2)" }}>
              <Shield className="w-5 h-5 text-[#6d28d9] shrink-0" aria-hidden="true" />
              <div>
                <div className="text-xs font-black text-[#6d28d9]">Garantia de 30 dias — devolvemos em dobro</div>
                <div className="text-[11px] mt-0.5" style={{ color: "#888888" }}>
                  Assista, pratique e não criou nada? Você recebe o dobro de volta.
                </div>
              </div>
            </div>
          </div>

          <div className="h-anim h-anim-4 flex items-stretch max-w-xs mx-auto mt-10"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)", borderBottom: "1px solid rgba(0,0,0,.1)" }}>
            {[{ num: "+1.500", label: "Alunos" }, { num: "14", label: "Habilidades" }, { num: "6", label: "Bônus" }].map((s, i) => (
              <div key={s.label} className="flex items-center flex-1">
                <div className="flex-1 text-center py-4">
                  <div className="text-2xl font-black tracking-tight tabular-nums" style={{ color: "#6d28d9" }}>{s.num}</div>
                  <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "#999999" }}>{s.label}</div>
                </div>
                {i < 2 && <div className="w-px self-stretch" style={{ background: "rgba(0,0,0,.1)" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      {stickyVisible && (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-50 backdrop-blur-xl px-4 pt-3"
          style={{ background: "rgba(255,255,255,.97)", borderTop: "1px solid rgba(0,0,0,.1)", paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
          <a href="#pricing" onClick={scrollToPricing}
            className="btn-3d flex items-center justify-between gap-3 px-5 py-3 rounded-full font-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9]"
            style={{ background: "linear-gradient(135deg, #6d28d9, #4f46e5)", color: "#fff" }}>
            <div className="text-left">
              <div className="text-[10px] leading-none" style={{ color: "rgba(255,255,255,.6)" }}>Combo nexIA® · acesso vitalício</div>
              <div className="text-sm leading-snug mt-0.5">R$97 no PIX · acesso imediato</div>
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
