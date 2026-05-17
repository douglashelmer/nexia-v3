"use client"

import { useEffect, useRef, useState } from "react"

const videos = [
  { src: "/assets/videos/video-01.webm", poster: "/assets/video-01.webp" },
  { src: "/assets/videos/video-02.mp4",  poster: "/assets/video-02.webp" },
  { src: "/assets/videos/video-03.mp4",  poster: "/assets/video-03.webp" },
  { src: "/assets/videos/video-04.webm", poster: "/assets/video-04.webp" },
  { src: "/assets/videos/video-05.webm", poster: "/assets/video-05.webp" },
  { src: "/assets/videos/video-06.webm", poster: "/assets/video-06.webp" },
]

function LazyVideo({ src, poster }: { src: string; poster: string }) {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect() } },
      { rootMargin: "200px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="rounded-2xl overflow-hidden"
      style={{ background: "#141414", border: "1px solid rgba(255,255,255,.08)", aspectRatio: "9/16" }}>
      {active ? (
        <video src={src} poster={poster} autoPlay muted loop playsInline
          className="w-full h-full object-cover block" />
      ) : (
        <img src={poster} alt="" loading="lazy" decoding="async"
          width={360} height={640}
          className="w-full h-full object-cover block" />
      )}
    </div>
  )
}

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {videos.map((v, i) => <LazyVideo key={i} src={v.src} poster={v.poster} />)}
    </div>
  )
}
