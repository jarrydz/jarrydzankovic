import BackgroundNodes from '@/components/BackgroundNodes'
import CoverHero from '@/components/CoverHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <BackgroundNodes />
      <CoverHero />
      <main className="content-col relative z-10 mx-auto py-[clamp(3rem,10vw,6rem)]">
        <article className="flex flex-col gap-[clamp(2.5rem,8vw,5rem)]">
          <header className="space-y-4 font-title">
            <ScrollReveal delay={0}>
              <h2 className="content-name font-title font-semibold tracking-tight text-[var(--color-ink)]">
                Jarryd Zankovic
              </h2>
            </ScrollReveal>
          </header>

          <div className="space-y-[clamp(2rem,5vw,3.5rem)]">
            <ScrollReveal delay={80}>
              <p className="content-copy font-title font-semibold text-[var(--color-ink)]">
                Today I&rsquo;m SVP of Product at{' '}
                <a
                  href="https://fluentcommerce.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-[#ff5000] hover:italic"
                >
                  Fluent Commerce
                </a>
                , leading product management, design, emerging tech &amp;
                enablement. We build the systems behind modern retail for the
                world&rsquo;s largest brands, connecting inventory, orders and
                fulfilment across stores, warehouses and supply chains.
              </p>
            </ScrollReveal>
            <ul className="content-links flex flex-col gap-3 font-title font-semibold text-[var(--color-ink)]">
              <li>
                <ScrollReveal delay={160}>
                  <a
                    href="mailto:hello@jarrydzankovic.com"
                    className="underline transition-colors hover:text-[#ff5000] hover:italic"
                  >
                    hello@jarrydzankovic.com
                  </a>
                </ScrollReveal>
              </li>
              <li>
                <ScrollReveal delay={220}>
                  <a
                    href="https://www.linkedin.com/in/jarryd-zankovic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline transition-colors hover:text-[#ff5000] hover:italic"
                  >
                    https://www.linkedin.com/in/jarryd-zankovic/
                  </a>
                </ScrollReveal>
              </li>
              <li>
                <ScrollReveal delay={280}>
                  <a
                    href="https://github.com/jarrydz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline transition-colors hover:text-[#ff5000] hover:italic"
                  >
                    https://github.com/jarrydz
                  </a>
                </ScrollReveal>
              </li>
              <li>
                <ScrollReveal delay={340}>
                  <a
                    href="https://jarrydz.github.io/johnandmario/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline transition-colors hover:text-[#ff5000] hover:italic"
                  >
                    https://jarrydz.github.io/johnandmario/
                  </a>
                </ScrollReveal>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </>
  )
}
