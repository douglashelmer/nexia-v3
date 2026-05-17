"use client"

import { useEffect, useRef } from "react"

export default function AnnouncementBar() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const d = new Date()
    const end = d.getDate()
    ref.current.textContent = `${end - 2}, ${end - 1} e ${end}`
  }, [])

  return (
    <div
      className="z-50 w-full py-2.5 px-4 text-center leading-snug"
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        background: "var(--color-lime)",
        color: "#000",
      }}
    >
      <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>
        ⚡ Somente nos dias{" "}
        <strong><span ref={ref} suppressHydrationWarning>&#8203;</span></strong>{" "}
        — desconto de 80% ativo. Vagas limitadas.
      </span>
    </div>
  )
}
