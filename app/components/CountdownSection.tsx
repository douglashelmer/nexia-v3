"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const CHECKOUT = "https://pay.onprofit.com.br/H8cdL2ni?off=EHyreQ"

const DAYS_PT   = ["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]
const MONTHS_PT = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]

function getMidnightTonight() {
  const d = new Date(); d.setHours(23, 59, 59, 0); return d
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
    setMounted(true); setDateLabel(todayLabel())
    const tick = () => {
      let diff = targetRef.current.getTime() - Date.now()
      if (diff <= 0) { targetRef.current = getMidnightTonight(); setDateLabel(todayLabel()); diff = Math.max(0, targetRef.current.getTime() - Date.now()) }
      const h = String(Math.floor((diff / 3_600_000) % 24)).padStart(2, "0")
      const m = String(Math.floor((diff /    60_000) % 60)).padStart(2, "0")
      const s = String(Math.floor((diff /     1_000) % 60)).padStart(2, "0")
      if (hoursRef.current)   hoursRef.current.textContent   = h
      if (minutesRef.current) minutesRef.current.textContent = m
      if (secondsRef.current) secondsRef.current.textContent = s
    }
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id)
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
  { label: "Bônus: Curso Web.IA", detail: "crie sites do zero com IA sem saber programar", value: "R$197" },
  { label: "Bônus: Curso Logo Express", detail: "logos e marcas profissionais com IA em minutos", value: "R$147" },
  { label: "Bônus: Sua Primeira Venda em 7 Dias", detail: "feche o primeiro cliente em uma semana", value: "R$97" },
  { label: "Bônus: Templates Automáticos", detail: "templates prontos para acelerar sua produção", value: "R$197" },
  { label: "Bônus: Pacote de Agentes", detail: "agentes IA para automatizar tarefas criativas", value: "R$97" },
  { label: "Bônus: Masterclass de Prospecção", detail: "como fechar clientes usando IA", value: "R$297" },
  { label: "Bônus: Lives Periódicas com o Professor", detail: "sessões ao vivo para tirar dúvidas", value: "R$597" },
  { label: "Bônus: Comunidade de Alunos", detail: "+1.500 criativos, suporte direto com professor", value: "R$397" },
  { label: "Atualizações Gratuitas + Suporte", detail: "novos conteúdos sem custo adicional", value: null },
]

export default function CountdownSection() {
  const countdown   = useCountdown()
  const checkoutUrl = useCheckoutUrl()

  const C = { fg: "var(--color-white)", muted: "var(--color-muted)", lime: "var(--color-lime)", bg: "var(--color-surface)", bg2: "var(--color-surface-2)", border: "var(--color-border)", borderLime: "var(--color-border-lime)" }

  return (
    <section id="pricing" style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-border)", padding: "clamp(64px,10vw,120px) 0", position: "relative", overflow: "hidden" }}>
      <div aria-hidden className="grid-bg" />

      <div className="max-w-6xl mx-auto px-5" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label" style={{ justifyContent: "center", marginBottom: "16px" }}>O valor real do que você leva</div>
          <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.75rem,5vw,3rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "12px" }}>
            Faça as contas:{" "}
            <span className="text-gradient">você está levando tudo isso por menos que uma pizza.</span>
          </h2>
          <p style={{ color: C.muted, fontSize: "1rem" }}>Veja tudo o que você vai receber:</p>
        </div>

        {/* Two-col layout */}
        <div className="grid md:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">

          {/* LEFT — Checklist */}
          <div className="surface-card" style={{ padding: "clamp(24px,4vw,36px)" }}>
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
              {checklistItems.map((item) => (
                <li key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: C.lime, fontSize: "1rem", flexShrink: 0, marginTop: "1px" }} aria-hidden>✦</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 700, fontSize: "0.875rem", color: C.fg }}>{item.label}</span>
                      {item.value && <span style={{ fontFamily: "var(--font-mono),monospace", fontSize: "0.75rem", color: C.muted, flexShrink: 0 }}>{item.value}</span>}
                    </div>
                    <p style={{ fontSize: "0.75rem", color: C.muted, marginTop: "2px" }}>{item.detail}</p>
                  </div>
                </li>
              ))}

              {/* Guarantee row */}
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingTop: "12px", borderTop: "1px solid var(--color-border)" }}>
                <span style={{ fontSize: "1rem", flexShrink: 0 }} aria-hidden>🛡️</span>
                <div>
                  <span style={{ fontWeight: 700, fontSize: "0.875rem", color: C.lime }}>Garantia 30 dias — dinheiro de volta em dobro</span>
                  <p style={{ fontSize: "0.75rem", color: C.muted, marginTop: "2px" }}>Se não criar nada, devolvemos o que pagou × 2</p>
                </div>
              </li>
            </ul>

            {/* Total value */}
            <div style={{ borderRadius: "10px", padding: "16px 20px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
              <p style={{ fontFamily: "var(--font-mono),monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: C.muted }}>
                Valor total se comprado separado:{" "}
                <span style={{ fontWeight: 900, fontSize: "1.1rem", textDecoration: "line-through", color: "#555" }}>R$2.323</span>
              </p>
            </div>
          </div>

          {/* RIGHT — Pricing card */}
          <div className="surface-card" style={{ borderColor: "var(--color-border-lime)", overflow: "hidden" }}>

            {/* Card header */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "28px 28px 20px", borderBottom: "1px solid var(--color-border)" }}>
              <Image src="/assets/logo-nexia-new.svg" alt="nexIA" width={110} height={32} className="mb-3"
                style={{ filter: "brightness(0) invert(1)" }} />
              <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: C.muted, textAlign: "center" }}>
                Plano Vitalício · Pagamento Único · Sem Mensalidade
              </div>
            </div>

            <div style={{ padding: "24px 28px" }}>

              {/* Price */}
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: "9px", letterSpacing: "0.20em", textTransform: "uppercase", color: "#fff", marginBottom: "12px" }}>
                  Nesta oferta por apenas:
                </div>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "8px", lineHeight: 1, marginBottom: "6px" }}>
                  <span style={{ fontFamily: "var(--font-inter),sans-serif", fontWeight: 700, fontSize: "clamp(1rem,3vw,1.3rem)", color: "#fff" }}>12×</span>
                  <span style={{ fontFamily: "var(--font-inter),sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem,11vw,4rem)", color: "#fff", letterSpacing: "-0.02em" }}>
                    R$<span className="text-lime">19,71</span>
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "12px" }}>
                  <span style={{ color: "#fff", fontSize: "0.875rem" }}>ou</span>
                  <span style={{ fontFamily: "var(--font-inter),sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#fff" }}>R$197</span>
                  <span style={{ color: "#fff", fontSize: "0.875rem" }}>à vista</span>
                </div>
              </div>

              <div style={{ height: "1px", background: "var(--color-border)", marginBottom: "20px" }} />

              {/* Countdown label */}
              <div style={{ textAlign: "center", marginBottom: "16px" }}>
                <p style={{ color: "#fff", fontSize: "0.875rem" }}>
                  ⏳ Oferta expira hoje,
                </p>
                <p style={{ fontWeight: 700, marginTop: "2px", fontSize: "0.875rem" }} suppressHydrationWarning>
                  {countdown.dateLabel
                    ? <><span className="text-lime">{countdown.dateLabel}</span><span style={{ color: "#fff" }}>, às 23h59!</span></>
                    : <span style={{ opacity: 0 }}>—</span>}
                </p>
              </div>

              {/* Countdown blocks */}
              <div
                className={`flex justify-center gap-3 mb-3${countdown.mounted ? "" : " opacity-0"}`}
                suppressHydrationWarning aria-live="polite"
              >
                {[
                  { ref: countdown.hoursRef,   label: "Horas" },
                  { ref: countdown.minutesRef, label: "Minutos" },
                  { ref: countdown.secondsRef, label: "Segundos" },
                ].map((b) => (
                  <div key={b.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                    <div style={{
                      width: "68px", height: "68px", borderRadius: "14px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--font-syne),sans-serif", fontWeight: 800,
                      fontSize: "1.9rem", letterSpacing: "-0.02em",
                      background: "var(--color-surface-2)",
                      border: "1px solid var(--color-border-lime)",
                      color: "var(--color-lime)",
                      boxShadow: "0 0 20px rgba(204,255,0,0.1)",
                    }}>
                      <span ref={b.ref}>00</span>
                    </div>
                    <span style={{ fontFamily: "var(--font-mono),monospace", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: C.muted }}>
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>

              <p style={{ fontFamily: "var(--font-mono),monospace", fontSize: "9px", letterSpacing: "0.10em", textTransform: "uppercase", textAlign: "center", color: "#fff", marginBottom: "20px" }}>
                Depois disso, preço volta a R$497
              </p>

              {/* CTA */}
              <a
                href={checkoutUrl}
                id="cta-pricing-card"
                className="btn-cta cta-checkout"
                style={{ width: "100%", marginBottom: "16px" }}
              >
                <span className="btn-cta-spin" aria-hidden />
                <span className="btn-cta-body" style={{ padding: "18px 24px" }}>
                  <span className="btn-cta-shimmer" aria-hidden />
                  <span className="btn-cta-label" style={{ fontSize: "11px" }}>Garantir minha vaga agora →</span>
                </span>
              </a>

              {/* Payment badge */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px", opacity: 0.5 }}>
                <img src="/assets/onprofit.svg" alt="OnProfit" width={180} height={14} style={{ filter: "invert(1)" }} />
              </div>

              {/* Checklist mini */}
              <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Acesso imediato após pagamento",
                  "Atualizações gratuitas inclusas",
                  "Suporte com o professor",
                  "Comunidade de alunos ativa",
                  "14 habilidades com IA",
                  "Vitalício — sem mensalidade",
                ].map(b => (
                  <li key={b} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: "var(--color-lime)", fontSize: "0.75rem", flexShrink: 0 }} aria-hidden>✦</span>
                    <span style={{ fontSize: "0.875rem", color: C.muted }}>{b}</span>
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
