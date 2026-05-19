"use client"

export default function GuaranteeSeal({ size = 180 }: { size?: number }) {
  const cx = size / 2
  const cy = size / 2
  const outerR = size / 2 - 4
  const innerR = outerR - 14
  const notchCount = 36

  // Gera os dentes (notches) do anel externo
  const notches = Array.from({ length: notchCount }, (_, i) => {
    const angle = (i / notchCount) * 2 * Math.PI - Math.PI / 2
    const x1 = cx + (outerR - 6) * Math.cos(angle)
    const y1 = cy + (outerR - 6) * Math.sin(angle)
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
      aria-label="Garantia 30 dias — devolução em dobro"
      role="img"
    >
      <defs>
        {/* Glow filter */}
        <filter id="lime-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Texto curvado — arco superior */}
        <path
          id="arc-top"
          d={`M ${cx - innerR + 8},${cy} A ${innerR - 8},${innerR - 8} 0 0 1 ${cx + innerR - 8},${cy}`}
        />
        {/* Texto curvado — arco inferior */}
        <path
          id="arc-bottom"
          d={`M ${cx - innerR + 12},${cy} A ${innerR - 12},${innerR - 12} 0 0 0 ${cx + innerR - 12},${cy}`}
        />
      </defs>

      {/* Fundo do selo */}
      <circle cx={cx} cy={cy} r={outerR} fill="#050505" />

      {/* Glow de fundo lime */}
      <circle cx={cx} cy={cy} r={innerR - 4} fill="rgba(204,255,0,0.04)" />

      {/* Anel externo (notches) */}
      <path d={notches} stroke="#ccff00" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />

      {/* Anel interno */}
      <circle cx={cx} cy={cy} r={innerR} stroke="#ccff00" strokeWidth="1.2" strokeDasharray="2 4" opacity="0.5" />

      {/* Texto curvado topo: GARANTIA */}
      <text
        fontFamily="'JetBrains Mono', monospace"
        fontSize={size * 0.065}
        fontWeight="700"
        fill="#ccff00"
        letterSpacing="0.22em"
        textAnchor="middle"
      >
        <textPath href="#arc-top" startOffset="50%">
          ✦ GARANTIA ✦
        </textPath>
      </text>

      {/* Número 30 — destaque principal */}
      <text
        x={cx}
        y={cy + size * 0.08}
        textAnchor="middle"
        fontFamily="'Syne', sans-serif"
        fontSize={size * 0.35}
        fontWeight="800"
        fill="#ccff00"
        filter="url(#lime-glow)"
        letterSpacing="-0.04em"
      >
        30
      </text>

      {/* DIAS */}
      <text
        x={cx}
        y={cy + size * 0.21}
        textAnchor="middle"
        fontFamily="'JetBrains Mono', monospace"
        fontSize={size * 0.075}
        fontWeight="700"
        fill="#ffffff"
        letterSpacing="0.28em"
      >
        DIAS
      </text>

      {/* Linha divisória */}
      <line
        x1={cx - size * 0.18}
        y1={cy + size * 0.26}
        x2={cx + size * 0.18}
        y2={cy + size * 0.26}
        stroke="rgba(204,255,0,0.3)"
        strokeWidth="0.8"
      />

      {/* Texto curvado base: DEVOLUÇÃO EM DOBRO */}
      <text
        fontFamily="'JetBrains Mono', monospace"
        fontSize={size * 0.056}
        fontWeight="700"
        fill="#a3a3a3"
        letterSpacing="0.10em"
        textAnchor="middle"
      >
        <textPath href="#arc-bottom" startOffset="50%">
          DEVOLUÇÃO EM DOBRO
        </textPath>
      </text>

      {/* Estrela decorativa esquerda */}
      <text x={cx - size * 0.28} y={cy + size * 0.04} textAnchor="middle" fontSize={size * 0.06} fill="rgba(204,255,0,0.4)">✦</text>
      {/* Estrela decorativa direita */}
      <text x={cx + size * 0.28} y={cy + size * 0.04} textAnchor="middle" fontSize={size * 0.06} fill="rgba(204,255,0,0.4)">✦</text>
    </svg>
  )
}
