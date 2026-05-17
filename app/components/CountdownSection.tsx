"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Clock, Shield } from "lucide-react"

const CHECKOUT = "https://payfast.greenn.com.br/ebnwgbt/offer/TFlokq?cupom=MAIO200&ch_id=138823&b_id_1=qt73vwh&b_offer_1=HtJr1o&b_id_2=67eh8rf&b_offer_2=V0iuEs&b_id_3=mzn9ucy&b_offer_3=cuBT9a"

const valueStack = [
  { label: "14 Cursos Completos de IA", val: "R$1.235" },
  { label: "Bônus 1: Lives Periódicas", val: "R$597" },
  { label: "Bônus 2: Comunidade de Alunos", val: "R$397" },
]

function getTonightMidnight() {
  const d = new Date()
  d.setHours(23, 59, 59, 0)
  return d
}

/** DOM-ref countdown — updates text nodes directly, zero re-renders per tick */
function useCountdown(target: Date) {
  const hoursRef   = useRef<HTMLSpanElement>(null)
  const minutesRef = useRef<HTMLSpanElement>(null)
  const secondsRef = useRef<HTMLSpanElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now())
      const h = String(Math.floor((diff / 3600000) % 24)).padStart(2, "0")
      const m = String(Math.floor((diff / 60000)   % 60)).padStart(2, "0")
      const s = String(Math.floor((diff / 1000)    % 60)).padStart(2, "0")
      if (hoursRef.current)   hoursRef.current.textContent   = h
      if (minutesRef.current) minutesRef.current.textContent = m
      if (secondsRef.current) secondsRef.current.textContent = s
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  return { hoursRef, minutesRef, secondsRef, mounted }
}

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

export default function CountdownSection() {
  const [target] = useState(getTonightMidnight)
  const countdown = useCountdown(target)
  const checkoutUrl = useCheckoutUrl()

  return (
    <section id="pricing" style={{ background: "#C9D400" }}>
      <div className="grid md:grid-cols-2">
        <div className="p-10 md:p-16 flex flex-col justify-center" style={{ borderBottom: "1px solid rgba(0,0,0,.12)" }}>
          <div className="text-[11px] font-bold tracking-[.18em] uppercase mb-6" style={{ color: "rgba(0,0,0,.5)" }}>OFERTA ESPECIAL — HOJE SOMENTE</div>
          <div className="text-sm mb-0.5" style={{ color: "rgba(0,0,0,.55)" }}>DE <span className="line-through">R$297</span> POR</div>

          {/* PIX price — primary option */}
          <div className="font-black tracking-tighter leading-[0.85] text-[#090909]"
            style={{ fontSize: "clamp(4.5rem,13vw,8rem)" }}>R$97</div>
          <div className="flex items-center gap-2 mt-1 mb-2">
            <span className="text-sm font-black px-2.5 py-0.5 rounded-full" style={{ background: "rgba(0,0,0,.12)", color: "rgba(0,0,0,.75)" }}>PIX</span>
            <span className="text-sm font-semibold" style={{ color: "rgba(0,0,0,.55)" }}>à vista — acesso em segundos</span>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,.15)" }} />
            <span className="text-xs font-bold" style={{ color: "rgba(0,0,0,.4)" }}>ou</span>
            <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,.15)" }} />
          </div>

          {/* Card installment */}
          <div className="mb-8">
            <div className="text-sm font-bold" style={{ color: "rgba(0,0,0,.6)" }}>12× de</div>
            <div className="font-black tracking-tighter leading-none text-[#090909]"
              style={{ fontSize: "clamp(2rem,6vw,3rem)" }}>R$9,97</div>
            <div className="text-xs mt-0.5" style={{ color: "rgba(0,0,0,.45)" }}>no cartão de crédito</div>
          </div>

          <a href={checkoutUrl}
            className="cta-checkout btn-3d w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#090909]"
            style={{ background: "#090909", color: "#C9D400", animation: "pulse-ring-dark 2.2s ease-in-out infinite" }}>
            <span>GARANTIR ACESSO VITALÍCIO</span>
            <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
          </a>
          <a href={checkoutUrl}
            className="cta-checkout flex items-start gap-3 rounded-xl p-4 mt-6 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#090909]"
            style={{ background: "rgba(0,0,0,.12)", border: "1px solid rgba(0,0,0,.18)" }}>
            <Shield className="w-7 h-7 shrink-0" style={{ color: "rgba(0,0,0,.7)" }} aria-hidden="true" />
            <div>
              <div className="font-black text-sm mb-0.5" style={{ color: "rgba(0,0,0,.8)" }}>Garantia 30 Dias — Devolvemos em Dobro</div>
              <div className="text-xs leading-relaxed" style={{ color: "rgba(0,0,0,.55)" }}>Assista tudo, pratique, não criou nada? Devolvemos o dobro. Sem burocracia.</div>
            </div>
          </a>
        </div>

        <div className="p-10 md:p-16 flex flex-col justify-center" style={{ background: "#090909", color: "#f5f5f5" }}>
          <div className="text-[11px] font-bold tracking-[.14em] uppercase mb-5" style={{ color: "#C9D400" }}>ESSA CONDIÇÃO EXPIRA EM:</div>
          <div className="flex items-center gap-3 mb-2" aria-live="polite" suppressHydrationWarning>
            <Clock className="w-4 h-4 shrink-0" style={{ color: "#C9D400" }} aria-hidden="true" />
            <div className={`flex gap-3 font-black tabular-nums tracking-tight${countdown.mounted ? "" : " opacity-0"}`}
              style={{ fontSize: "clamp(1.75rem,5vw,2.5rem)", color: "#C9D400" }}>
              <span>
                <span ref={countdown.hoursRef}>00</span>
                <span className="text-sm ml-0.5" style={{ color: "rgba(255,255,255,.3)" }}>h</span>
              </span>
              <span style={{ color: "rgba(255,255,255,.2)" }}>:</span>
              <span>
                <span ref={countdown.minutesRef}>00</span>
                <span className="text-sm ml-0.5" style={{ color: "rgba(255,255,255,.3)" }}>m</span>
              </span>
              <span style={{ color: "rgba(255,255,255,.2)" }}>:</span>
              <span>
                <span ref={countdown.secondsRef}>00</span>
                <span className="text-sm ml-0.5" style={{ color: "rgba(255,255,255,.3)" }}>s</span>
              </span>
            </div>
          </div>
          <p className="text-xs mb-8" style={{ color: "rgba(255,255,255,.4)" }}>Depois disso, o valor sobe para R$297</p>
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
              <span className="text-xl" style={{ color: "#C9D400" }}>R$97</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
