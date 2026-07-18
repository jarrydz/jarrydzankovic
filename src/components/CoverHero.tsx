import Image from 'next/image'

export default function CoverHero() {
  return (
    <section className="relative z-10 flex min-h-svh items-center justify-center bg-[var(--color-paper)]">
      <h1 className="cover-hero" aria-label="AI Native Product Builder">
        <span className="cover-row" aria-hidden="true">
          <span className="cover-line cover-line-ai">AI</span>
          <span className="cover-photo">
            <Image
              src="/portrait-photo.jpg"
              alt=""
              width={814}
              height={814}
              priority
            />
          </span>
        </span>
        <span className="cover-line cover-line-native" aria-hidden="true">
          NATIVE
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
