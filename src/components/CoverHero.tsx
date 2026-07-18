import Image from 'next/image'

export default function CoverHero() {
  return (
    <section className="relative z-10 flex min-h-svh items-center justify-center bg-[var(--color-paper)] py-[6svh]">
      <h1 className="cover-hero" aria-label="AI Native Product Builder">
        <span className="cover-line cover-line-aina" aria-hidden="true">
          AI-NA
        </span>
        <span className="cover-row" aria-hidden="true">
          <span className="cover-line cover-line-tive">TIVE</span>
          <span className="cover-photo">
            <Image
              src="/portrait-sketch.png"
              alt=""
              width={1024}
              height={1024}
              priority
            />
          </span>
        </span>
        <span className="cover-line cover-line-product" aria-hidden="true">
          PRODUCT
        </span>
        <span className="cover-line cover-line-builder" aria-hidden="true">
          BUILDER
        </span>
      </h1>
    </section>
  )
}
