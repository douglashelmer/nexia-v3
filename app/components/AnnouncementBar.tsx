"use client"

import { useEffect, useRef } from "react"

const MONTHS_PT = [
  "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",
]

export default function AnnouncementBar() {
  const datesRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!datesRef.current) return
    const d    = new Date()
    const day  = d.getDate()
    const mon  = MONTHS_PT[d.getMonth()]
    datesRef.current.textContent = `${day - 2}, ${day - 1} e ${day} de ${mon}`
  }, [])

  return (
    <div
      className="z-40 w-full py-2.5 px-4 text-center text-sm md:text-base font-semibold text-white leading-snug"
      style={{ position: "sticky", top: "54px", background: "#C8180F" }}
    >
      Somente nos dias:{" "}
      <strong>
        <span ref={datesRef} suppressHydrationWarning>&#8203;</span>
      </strong>
      {" "}você terá um desconto diferenciado de 80%
    </div>
  )
}
