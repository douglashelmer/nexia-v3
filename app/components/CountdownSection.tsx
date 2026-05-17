"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, CheckCircle2, Shield } from "lucide-react"

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

const checklistItems = [
  { label: "14 Habilidades com IA", detail: "acesso vitalício a todos os módulos", value: "R$297" },
  { label: "Sua Primeira Venda com IA em 7 Dias", detail: "feche o primeiro cliente em 7 dias", value: "R$97" },
  { label: "Templates Automáticos", detail: "templates prontos para acelerar sua produção", value: "R$197" },
  { label: "Pacote de Agentes", detail: "agentes IA para automatizar tarefas criativas", value: "R$97" },
  { label: "Masterclass de Prospecção", detail: "como fechar clientes usando IA", value: "R$297" },
  { label: "Lives Periódicas com o Professor", detail: "sessões ao vivo para tirar dúvidas", value: "R$597" },
  { label: "Comunidade de Alunos", detail: "+1.500 criativos, suporte direto", value: "R$397" },
  { label: "Atualizações Gratuitas + Suporte", detail: "novos conteúdos sem custo adicional", value: null },
]

const TOTAL_VALUE = "R$1.979"

export default function CountdownSection() {
  const countdown   = useCountdown()
  const checkoutUrl = useCheckoutUrl()

  return (
    <section id="pricing" className="py-16 md:py-24"
      style={{ background: "#f7f7f7", borderTop: "1px solid rgba(0,0,0,.07)" }}>
      <div className="max-w-6xl mx-auto px-5">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#999999" }}>
            Faça as contas:
          </p>
          <h2 className="font-black tracking-tighter leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", color: "#111111" }}>
            Você está levando tudo isso{" "}
            <span className="text-gradient">por menos que uma pizza.</span>
          </h2>
          <p className="text-base" style={{ color: "#666666" }}>
            Veja tudo o que irá receber:
          </p>
        </div>

        {/* ── Two columns ── */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">

          {/* ── LEFT: Checklist ── */}
          <div className="rounded-2xl p-7 md:p-8"
            style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,.1)", boxShadow: "0 2px 20px rgba(0,0,0,.05)" }}>
            <ul className="space-y-4 mb-8">
              {checklistItems.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#C9D400" }} aria-hidden="true" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2 flex-wrap">
                      <span className="font-black text-sm" style={{ color: "#111111" }}>{item.label}</span>
                      {item.value && (
                        <span className="text-xs font-bold shrink-0" style={{ color: "#999999" }}>{item.value}</span>
                      )}
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: "#888888" }}>{item.detail}</p>
                  </div>
                </li>
              ))}

              {/* Guarantee row */}
              <li className="flex items-start gap-3 pt-2" style={{ borderTop: "1px solid rgba(0,0,0,.07)" }}>
                <Shield className="w-5 h-5 shrink-0 mt-0.5 text-[#7c3aed]" aria-hidden="true" />
                <div>
                  <span className="font-black text-sm text-[#7c3aed]">Garantia 30 dias — dinheiro de volta em dobro</span>
                  <p className="text-xs mt-0.5" style={{ color: "#888888" }}>Se não criar nada, devolvemos o que pagou × 2</p>
                </div>
              </li>
            </ul>

            {/* Total value */}
            <div className="rounded-xl px-5 py-4"
              style={{ background: "#f5f5f5", border: "1px solid rgba(0,0,0,.08)" }}>
              <p className="text-base font-bold" style={{ color: "#333333" }}>
                Quanto você pagaria em tudo:{" "}
                <span className="font-black line-through text-lg" style={{ color: "#888888" }}>{TOTAL_VALUE}</span>
              </p>
            </div>
          </div>

          {/* ── RIGHT: Pricing card ── */}
          <div className="rounded-2xl overflow-hidden"
            style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,.1)", boxShadow: "0 2px 20px rgba(0,0,0,.06)" }}>

            {/* Header */}
            <div className="flex flex-col items-center pt-7 pb-5 px-7"
              style={{ borderBottom: "1px solid rgba(0,0,0,.07)" }}>
              <Image src="/assets/logo-nexia-new.svg" alt="nexIA" width={120} height={36} className="mb-3" />
              <div className="text-sm font-black text-center" style={{ color: "#111111" }}>
                Plano de Acesso Vitalício
              </div>
              <div className="text-xs text-center mt-0.5" style={{ color: "#999999" }}>
                (pagamento único, sem mensalidades)
              </div>
            </div>

            <div className="px-7 py-6">

              {/* Price */}
              <div className="text-center mb-5">
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#999999" }}>
                  Nesta oferta por apenas:
                </div>

                {/* 12x destaque */}
                <div className="flex items-baseline justify-center gap-2 leading-none mb-1">
                  <span className="font-black" style={{ fontSize: "clamp(1.1rem, 4vw, 1.4rem)", color: "#888888" }}>12x</span>
                  <span className="font-black tracking-tighter"
                    style={{ fontSize: "clamp(3rem, 13vw, 4.5rem)", color: "#111111" }}>
                    R$<span className="text-gradient">9,97</span>
                  </span>
                </div>

                {/* à vista */}
                <div className="flex items-center justify-center gap-2 mt-3">
                  <span className="text-sm font-medium" style={{ color: "#888888" }}>ou</span>
                  <span className="font-black text-lg" style={{ color: "#111111" }}>R$97</span>
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full"
                    style={{ background: "rgba(201,212,0,.2)", color: "#6b6e00", border: "1px solid rgba(201,212,0,.5)" }}>
                    PIX
                  </span>
                  <span className="text-sm" style={{ color: "#666666" }}>à vista</span>
                </div>
              </div>

              <div className="h-px mb-5" style={{ background: "rgba(0,0,0,.07)" }} />

              {/* Countdown label */}
              <div className="text-center mb-4">
                <p className="text-sm" style={{ color: "#555555" }}>
                  ⏳ Essa condição especial expira hoje,
                </p>
                <p className="text-sm font-black mt-0.5" suppressHydrationWarning>
                  {countdown.dateLabel
                    ? <><span className="text-gradient">{countdown.dateLabel}</span><span style={{ color: "#111111" }}>, às 23h59!</span></>
                    : <span className="opacity-0">—</span>}
                </p>
              </div>

              {/* Countdown blocks */}
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
                    <div className="w-[68px] h-[68px] rounded-2xl flex items-center justify-center font-black tabular-nums"
                      style={{
                        fontSize: "1.9rem",
                        background: "linear-gradient(145deg, #6d28d9, #4f46e5)",
                        color: "#fff",
                        boxShadow: "0 4px 14px rgba(109,40,217,.3)",
                      }}>
                      <span ref={b.ref}>00</span>
                    </div>
                    <span className="text-[11px] font-semibold" style={{ color: "#999999" }}>
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-center mb-5" style={{ color: "#aaaaaa" }}>
                Depois disso, o acesso volta ao preço normal: R$297.
              </p>

              {/* CTA */}
              <a
                href={checkoutUrl}
                id="cta-pricing-card"
                className="cta-checkout btn-3d w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-black text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
                style={{
                  background: "linear-gradient(135deg, #6d28d9, #4f46e5)",
                  color: "#fff",
                  boxShadow: "0 6px 0 rgba(0,0,0,.25), 0 0 30px rgba(109,40,217,.2)",
                }}>
                Garantir minha vaga agora
                <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
              </a>

              {/* Payment badge */}
              <div className="flex justify-center mt-3 mb-5">
                <img
                  src="/assets/green.svg"
                  alt="Formas de pagamento: PayPal, Hipercard, Amex, Mastercard, PIX, Visa"
                  width={220}
                  height={17}
                  style={{ opacity: 0.4, filter: "invert(1)" }}
                />
              </div>

              {/* Benefits */}
              <ul className="space-y-2">
                {[
                  "Acesso imediato após o pagamento",
                  "Atualizações gratuitas",
                  "Suporte com Professor",
                  "Comunidade de Alunos",
                  "14 Habilidades com IA",
                  "Vitalício — sem mensalidade",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#C9D400" }} aria-hidden="true" />
                    <span className="text-sm" style={{ color: "#444444" }}>{b}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
