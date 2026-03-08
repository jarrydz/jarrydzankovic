'use client'

import { useState } from 'react'

/**
 * Portrait at public/portrait.png (same in light and dark mode)
 */
export default function Portrait() {
  const [error, setError] = useState(false)

  return (
    <div className="relative aspect-square w-full max-w-[224px] overflow-visible rounded-sm bg-transparent">
      {!error && (
        <img
          src="/portrait.png"
          alt="Jarryd Zankovic"
          width={1024}
          height={1024}
          className="h-full w-full object-contain"
          fetchPriority="high"
          onError={() => setError(true)}
        />
      )}
      {error && (
        <div
          className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm font-body"
          aria-hidden
        >
          Portrait
        </div>
      )}
    </div>
  )
}
