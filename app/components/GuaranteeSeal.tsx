"use client"

export default function GuaranteeSeal({ size = 180 }: { size?: number }) {
  const cx = size / 2
  const cy = size / 2
  const outerR = size / 2 - 3
  const innerR = outerR - 11
  const notchCount = 40
  const arcR = innerR - 4

  const notches = Array.from({ length: notchCount }, (_, i) => {
    const angle = (i / notchCount) * 2 * Math.PI - Math.PI / 2
    const x1 = cx + (outerR - 7) * Math.cos(angle)
    const y1 = cy + (outerR - 7) * Math.sin(angle)
    const x2 = cx + outerR * Math.cos(angle)
    const y2 = cy + outerR * Math.sin(angle)
    return `M${x1},${y1} L${x2},${y2}`
  }).join(" ")

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Garantia 30 dias"
      role="img"
    >
      <defs>
        <filter id="lg" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feComposite in="SourceGraphic" in2="b" operator="over" />
        </filter>
        {/* Arco superior — passa pelo topo */}
        <path id="arc-top" d={`M ${cx - arcR},${cy} A ${arcR},${arcR} 0 0,1 ${cx + arcR},${cy}`} />
        {/* Arco inferior — passa pela base */}
        <path id="arc-bot" d={`M ${cx - arcR},${cy} A ${arcR},${arcR} 0 0,0 ${cx + arcR},${cy}`} />
      </defs>

      {/* Fundo */}
      <circle cx={cx} cy={cy} r={outerR} fill="#050505" />
      <circle cx={cx} cy={cy} r={innerR} fill="rgba(204,255,0,0.03)" />

      {/* Dentes */}
      <path d={notches} stroke="#ccff00" strokeWidth="2" strokeLinecap="round" opacity="0.85" />

      {/* Anel interno */}
      <circle cx={cx} cy={cy} r={innerR} stroke="#ccff00" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.35" />

      {/* ✦ GARANTIA ✦ — arco topo */}
      <text fontFamily="'JetBrains Mono', monospace" fontSize={size * 0.067} fontWeight="800"
        fill="#ccff00" letterSpacing={size * 0.017} textAnchor="middle">
        <textPath href="#arc-top" startOffset="50%">✦ GARANTIA ✦</textPath>
      </text>

      {/* 30 — centro ligeiramente acima */}
      <text
        x={cx} y={cy - size * 0.01}
        textAnchor="middle" dominantBaseline="middle"
        fontFamily="'Syne', sans-serif"
        fontSize={size * 0.305}
        fontWeight="800"
        fill="#ccff00"
        filter="url(#lg)"
        letterSpacing="-0.03em"
      >30</text>

      {/* DIAS */}
      <text
        x={cx} y={cy + size * 0.265}
        textAnchor="middle"
        fontFamily="'JetBrains Mono', monospace"
        fontSize={size * 0.073}
        fontWeight="700"
        fill="#ffffff"
        letterSpacing={size * 0.021}
      >DIAS</text>

      {/* DEV. EM DOBRO — arco inferior */}
      <text fontFamily="'JetBrains Mono', monospace" fontSize={size * 0.054} fontWeight="600"
        fill="#777777" letterSpacing={size * 0.007} textAnchor="middle">
        <textPath href="#arc-bot" startOffset="50%">DEV. EM DOBRO</textPath>
      </text>

      {/* Pontos laterais centrais */}
      <circle cx={cx - innerR + 3} cy={cy} r={size * 0.017} fill="rgba(204,255,0,0.45)" />
      <circle cx={cx + innerR - 3} cy={cy} r={size * 0.017} fill="rgba(204,255,0,0.45)" />
    </svg>
  )
}
