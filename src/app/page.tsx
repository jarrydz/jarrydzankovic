import BackgroundNodes from '@/components/BackgroundNodes'
import Portrait from '@/components/Portrait'
import ScrollReveal from '@/components/ScrollReveal'

const COPY = [
  'I work at the intersection of product, design and AI.',
  'Most of my work lives between bits and atoms — software on one side, real-world commerce networks on the other.',
  'Today, I am the SVP of Product at Fluent Commerce.',
  'I lead product management, design and enablement.',
  'We build the systems that sit behind modern retail, connecting inventory, orders and fulfilment across stores, warehouses and supply chains.',
]

export default function Home() {
  return (
    <>
      <BackgroundNodes />
      <main className="relative z-10 mx-auto min-h-screen max-w-[var(--column-width)] px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,10vw,6rem)]">
        <article className="flex flex-col gap-[clamp(2.5rem,8vw,5rem)]">
          <ScrollReveal>
            <figure className="flex flex-col items-start gap-6">
              <Portrait />
              <figcaption className="sr-only">Portrait of Jarryd Zankovic</figcaption>
            </figure>
          </ScrollReveal>

          <header className="space-y-4 font-title">
            <ScrollReveal delay={100}>
              <h1 className="font-title text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                Jarryd Zankovic
              </h1>
            </ScrollReveal>
          </header>

          <div className="space-y-[clamp(2rem,5vw,3.5rem)]">
            {COPY.map((paragraph, i) => (
              <ScrollReveal key={i} delay={150 + i * 80}>
                <p className="font-body text-lg font-semibold leading-relaxed text-[var(--color-ink)] sm:text-xl sm:leading-relaxed">
                  {i === 2 ? (
                    <>
                      Today, I am the SVP of Product at{' '}
                      <a
                        href="https://fluentcommerce.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline transition-colors hover:text-neutral-600 hover:italic"
                      >
                        Fluent Commerce
                      </a>
                      .
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={150 + COPY.length * 80}>
              <p className="font-body text-lg font-semibold leading-relaxed text-[var(--color-ink)] sm:text-xl sm:leading-relaxed">
                <a
                  href="https://www.linkedin.com/in/jarryd-zankovic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-neutral-600 hover:italic"
                >
                  Connect professionally
                </a>
                {' or '}
                <a
                  href="mailto:hello@jarrydzankovic.com?subject=Hello%20from%20jarrydzankovic.com"
                  className="underline transition-colors hover:text-neutral-600 hover:italic"
                >
                  say hello
                </a>
                .
              </p>
            </ScrollReveal>
          </div>
        </article>
      </main>
    </>
  )
}
