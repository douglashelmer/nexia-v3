"use client"

import { useEffect, useRef } from "react"

export default function Reveal({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in")
          obs.disconnect()
        }
      },
      { rootMargin: "-60px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ ...style, ...(delay ? { transitionDelay: `${delay}s` } : {}) }}
    >
      {children}
    </div>
  )
}
