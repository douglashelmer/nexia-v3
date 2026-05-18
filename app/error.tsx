"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Auto-reload once on chunk loading errors (common in Instagram/Facebook IAB)
    if (error?.name === "ChunkLoadError" || error?.message?.includes("Loading chunk")) {
      const key = "_nexia_auto_reloaded"
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1")
        window.location.reload()
      }
    }
  }, [error])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
        background: "#050505",
        gap: "20px",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <p style={{ color: "#888", fontSize: "0.9rem" }}>
        Ocorreu um erro ao carregar a página.
      </p>
      <button
        onClick={() => {
          sessionStorage.removeItem("_nexia_auto_reloaded")
          reset()
        }}
        style={{
          padding: "14px 32px",
          background: "#ccff00",
          color: "#000",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: 700,
          fontSize: "0.95rem",
        }}
      >
        Tentar novamente
      </button>
    </div>
  )
}
