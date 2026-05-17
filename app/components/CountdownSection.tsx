"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const CHECKOUT = "https://payfast.greenn.com.br/ebnwgbt/offer/TFlokq?cupom=MAIO200&ch_id=138823&b_id_1=qt73vwh&b_offer_1=HtJr1o&b_id_2=67eh8rf&b_offer_2=V0iuEs&b_id_3=mzn9ucy&b_offer_3=9WkNK6"

const DAYS_PT   = ["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]
const MONTHS_PT = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]

function getMidnightTonight() {
  const d = new Date()
  d.setHours(23, 59, 59, 0)
  return d
}

function todayLabel() {
  const d = new Date()
  return `${DAYS_PT[d.getDay()]}, ${d.getDate()} de ${MONTHS_PT[d.getMonth()]} de ${d.getFullYear()}`
}

function useCountdown() {
  const hoursRef   = useRef<HTMLSpanElement>(null)
  const minutesRef = useRef<HTMLSpanElement>(null)
  const secondsRef = useRef<HTMLSpanElement>(null)
  const targetRef  = useRef(getMidnightTonight())
  const [mounted, setMounted]     = useState(false)
  const [dateLabel, setDateLabel] = useState("")

  useEffect(() => {
    setMounted(true)
    setDateLabel(todayLabel())

    const tick = () => {
      let diff = targetRef.current.getTime() - Date.now()
      if (diff <= 0) {
        // new day — reset to tonight's midnight and refresh label
        targetRef.current = getMidnightTonight()
        setDateLabel(todayLabel())
        diff = Math.max(0, targetRef.current.getTime() - Date.now())
      }
      const h = String(Math.floor((diff / 3_600_000) % 24)).padStart(2, "0")
      const m = String(Math.floor((diff /    60_000) % 60)).padStart(2, "0")
      const s = String(Math.floor((diff /     1_000) % 60)).padStart(2, "0")
      if (hoursRef.current)   hoursRef.current.textContent   = h
      if (minutesRef.current) minutesRef.current.textContent = m
      if (secondsRef.current) secondsRef.current.textContent = s
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return { hoursRef, minutesRef, secondsRef, mounted, dateLabel }
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

const benefits = [
  "Acesso imediato após o pagamento",
  "Atualizações gratuitas",
  "Suporte com Professor",
  "Comunidade de Alunos",
  "14 Habilidades com IA",
  "Vitalício — sem mensalidade",
]


export default function CountdownSection() {
  const countdown   = useCountdown()
  const checkoutUrl = useCheckoutUrl()

  return (
    <section id="pricing" className="py-16 md:py-24"
      style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,.05)" }}>
      <div className="max-w-md mx-auto px-5">
        <div className="rounded-3xl overflow-hidden" style={{
          background: "linear-gradient(160deg, #0c0c1e 0%, #0e0e18 100%)",
          border: "1px solid rgba(201,212,0,.18)",
          boxShadow: "0 0 80px rgba(201,212,0,.06), 0 24px 64px rgba(0,0,0,.55)",
        }}>

          {/* ── Header ── */}
          <div className="flex flex-col items-center pt-8 pb-6 px-8"
            style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}>
            <Image src="/assets/logo-nexia.svg" alt="nexIA" width={130} height={29} className="mb-4" />
            <div className="text-base font-black text-center" style={{ color: "#C9D400" }}>
              Plano de Acesso Vitalício
            </div>
            <div className="text-xs text-center mt-1" style={{ color: "rgba(255,255,255,.35)" }}>
              (pagamento único, sem mensalidades)
            </div>
          </div>

          <div className="px-8 py-7">

            {/* ── Price ── */}
            <div className="text-center mb-6">
              <div className="text-sm mb-2" style={{ color: "rgba(255,255,255,.4)" }}>
                DE <span className="line-through">R$297</span> POR
              </div>
              <div className="font-black tracking-tighter leading-none mb-1"
                style={{ fontSize: "clamp(3.5rem, 16vw, 5.5rem)", color: "#C9D400" }}>
                R$97
              </div>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-sm font-black px-2.5 py-0.5 rounded-full"
                  style={{ background: "rgba(201,212,0,.15)", color: "#C9D400", border: "1px solid rgba(201,212,0,.3)" }}>
                  PIX
                </span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,.5)" }}>à vista — acesso em segundos</span>
              </div>
            </div>

            <div className="h-px mb-6" style={{ background: "rgba(255,255,255,.06)" }} />

            {/* ── Countdown label ── */}
            <div className="text-center mb-4">
              <p className="text-sm" style={{ color: "rgba(255,255,255,.6)" }}>
                Essa condição especial expira hoje,
              </p>
              <p className="text-sm font-black mt-0.5" suppressHydrationWarning>
                {countdown.dateLabel
                  ? <><span style={{ color: "#C9D400" }}>{countdown.dateLabel}</span>, às 23h59!</>
                  : <span className="opacity-0">—</span>}
              </p>
            </div>

            {/* ── Countdown blocks ── */}
            <div
              className={`flex justify-center gap-3 mb-3${countdown.mounted ? "" : " opacity-0"}`}
              suppressHydrationWarning
              aria-live="polite"
            >
              {[
                { ref: countdown.hoursRef,   label: "Horas" },
                { ref: countdown.minutesRef, label: "Minutos" },
                { ref: countdown.secondsRef, label: "Segundos" },
              ].map((b) => (
                <div key={b.label} className="flex flex-col items-center gap-1.5">
                  <div className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center font-black tabular-nums"
                    style={{
                      fontSize: "2rem",
                      background: "linear-gradient(145deg, #5B3FC5, #3A6CF4)",
                      color: "#fff",
                      boxShadow: "0 4px 16px rgba(90,63,197,.45)",
                    }}>
                    <span ref={b.ref}>00</span>
                  </div>
                  <span className="text-[11px] font-semibold" style={{ color: "rgba(255,255,255,.4)" }}>
                    {b.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-center mb-6" style={{ color: "rgba(255,255,255,.35)" }}>
              Depois disso, o acesso volta ao preço normal: R$297.
            </p>

            {/* ── CTA ── */}
            <a
              href={checkoutUrl}
              id="cta-pricing-card"
              className="cta-checkout btn-3d w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-black text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9D400]"
              style={{
                background: "linear-gradient(135deg, #6036C8, #3B6BF5)",
                color: "#fff",
                boxShadow: "0 6px 0 rgba(0,0,0,.5), 0 0 30px rgba(96,54,200,.35)",
              }}>
              Garantir minha vaga agora
              <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
            </a>

            {/* ── Payment methods badge ── */}
            <div className="flex justify-center mt-3 mb-5">
              <img
                src="/assets/green.svg"
                alt="Formas de pagamento aceitas: PayPal, Hipercard, Amex, Mastercard, PIX, Visa"
                width={220}
                height={17}
                style={{ opacity: 0.55 }}
              />
            </div>

            {/* ── Benefits ── */}
            <ul className="space-y-2.5 mb-6">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#C9D400" }} aria-hidden="true" />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,.75)" }}>{b}</span>
                </li>
              ))}
            </ul>

            {/* ── Guarantee ── */}
            <div className="text-center py-4 rounded-2xl"
              style={{ background: "rgba(201,212,0,.06)", border: "1px solid rgba(201,212,0,.15)" }}>
              <div className="text-sm font-black" style={{ color: "#C9D400" }}>*Garantia de 30 DIAS</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,.45)" }}>
                ou seu dinheiro de volta em dobro!
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
