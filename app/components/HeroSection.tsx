"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Shield, Sparkles } from "lucide-react"

const CHECKOUT = "https://payfast.greenn.com.br/mzn9ucy/offer/pAjTDd?ch_id=136886&b_id_1=qt73vwh&b_offer_1=HtJr1o&b_id_2=67eh8rf&b_offer_2=zJN4gt"

const HERO_IMAGES = [
  "/assets/antes-depois/01.webp",
  "/assets/antes-depois/02.webp",
  "/assets/antes-depois/03.webp",
  "/assets/antes-depois/04.webp",
  "/assets/antes-depois/05.webp",
  "/assets/antes-depois/06.webp",
  "/assets/antes-depois/07.webp",
  "/assets/antes-depois/08.webp",
]

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

function HeroImages() {
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setIdx(i => (i + 1) % HERO_IMAGES.length)
        setFading(false)
      }, 450)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full rounded-2xl overflow-hidden"
      style={{ boxShadow: "0 12px 48px rgba(109,40,217,.18)", border: "1px solid rgba(0,0,0,.08)" }}>
      <img
        src={HERO_IMAGES[idx]}
        alt="Resultado antes e depois criado com nexIA"
        className="w-full h-auto block"
        style={{ opacity: fading ? 0 : 1, transition: "opacity 0.45s ease" }}
      />
      {/* Labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between p-2.5 md:p-3">
        <span className="text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full"
          style={{ background: "rgba(30,30,30,.75)", color: "#fff", backdropFilter: "blur(6px)" }}>
          Sem nexIA ❌
        </span>
        <span className="text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full"
          style={{ background: "rgba(109,40,217,.85)", color: "#fff", backdropFilter: "blur(6px)" }}>
          Com nexIA ✅
        </span>
      </div>
      {/* Dots */}
      <div className="absolute top-3 right-3 flex gap-1">
        {HERO_IMAGES.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full transition-all"
            style={{ background: i === idx ? "#fff" : "rgba(255,255,255,.4)", transform: i === idx ? "scale(1.3)" : "scale(1)" }} />
        ))}
      </div>
    </div>
  )
}

export default function HeroSection() {
  const checkoutUrl = useCheckoutUrl()
  const stickyVisible = useStickyBarVisible()

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center py-12 overflow-hidden"
        style={{ background: "#ffffff" }}>

        <div aria-hidden className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div aria-hidden className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[380px] rounded-full pointer-events-none"
          style={{ background: "rgba(109,40,217,.08)", filter: "blur(130px)" }} />

        <div className="relative max-w-6xl mx-auto px-5 z-10 w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14">

            {/* On mobile: images first (order-1), text second (order-2) */}
            {/* On desktop: text left (order-1), images right (order-2) */}

            {/* TEXT */}
            <div className="flex-1 min-w-0 text-center md:text-left order-2 md:order-1">

              <div className="h-anim h-anim-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
                style={{ background: "rgba(109,40,217,.07)", border: "1px solid rgba(109,40,217,.22)" }}>
                <Sparkles className="w-3 h-3 text-[#6d28d9]" aria-hidden="true" />
                <span className="text-[11px] font-bold text-[#6d28d9] tracking-widest uppercase">
                  Acesso Vitalício · Garantia 30 Dias · Sem Mensalidade
                </span>
              </div>

              <h1 className="h-anim h-anim-1 font-black tracking-tighter leading-[1.05] mb-5"
                style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.25rem)", color: "#111111" }}>
                Crie Imagens, Vídeos e Anúncios Incríveis<br />
                <span className="text-gradient">em Menos de 5 Minutos</span><br />
                Usando Inteligência Artificial
              </h1>

              <p className="h-anim h-anim-2 text-base md:text-lg max-w-[50ch] mx-auto md:mx-0 mb-7 leading-relaxed"
                style={{ color: "#555555" }}>
                Sem designer, estúdio, modelos, equipamentos, fotógrafos, maquiadores ou experiência!
              </p>

              <div className="h-anim h-anim-3 flex flex-col items-center md:items-start gap-4 max-w-md mx-auto md:mx-0">
                <a href="#pricing" onClick={scrollToPricing}
                  className="pulse-cta btn-3d flex items-center justify-center gap-3 w-full px-6 py-4 rounded-full font-black text-sm tracking-wide uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  style={{ background: "linear-gradient(135deg, #6d28d9, #4f46e5)", color: "#fff" }}>
                  GARANTIR MINHA VAGA COM R$200 OFF
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>

                <div className="flex items-center gap-5 flex-wrap justify-center md:justify-start">
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

              <div className="h-anim h-anim-4 flex items-stretch max-w-xs mx-auto md:mx-0 mt-7"
                style={{ borderTop: "1px solid rgba(0,0,0,.1)", borderBottom: "1px solid rgba(0,0,0,.1)" }}>
                {[{ num: "+1.500", label: "Alunos" }, { num: "14", label: "Habilidades" }, { num: "6", label: "Bônus" }].map((s, i) => (
                  <div key={s.label} className="flex items-center flex-1">
                    <div className="flex-1 text-center py-3.5">
                      <div className="text-2xl font-black tracking-tight tabular-nums" style={{ color: "#6d28d9" }}>{s.num}</div>
                      <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "#999999" }}>{s.label}</div>
                    </div>
                    {i < 2 && <div className="w-px self-stretch" style={{ background: "rgba(0,0,0,.1)" }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGES */}
            <div className="w-full md:w-[46%] shrink-0 order-1 md:order-2">
              <HeroImages />
            </div>

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

      {/* CHECKOUT LINK injector */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var u=${JSON.stringify(checkoutUrl)};document.querySelectorAll('.cta-checkout').forEach(function(a){a.href=u;});})();`,
        }}
      />
    </>
  )
}
