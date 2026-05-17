"use client"

import { useEffect } from "react"

/**
 * Globally initialises IntersectionObserver for every .reveal element on the page.
 * This allows components (like CountdownSection) to use the `reveal` CSS class
 * without wrapping each element in the <Reveal> component.
 */
export default function RevealInit() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            obs.unobserve(e.target)
          }
        })
      },
      { rootMargin: "0px 0px -40px 0px" }
    )

    document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => obs.observe(el))

    return () => obs.disconnect()
  }, [])

  return null
}
