import BackgroundNodes from '@/components/BackgroundNodes'
import CoverHero from '@/components/CoverHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <BackgroundNodes />
      <CoverHero />
      <main className="relative z-10 mx-auto max-w-[var(--column-width)] px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,10vw,6rem)]">
        <article className="flex flex-col gap-[clamp(2.5rem,8vw,5rem)]">
          <header className="space-y-4 font-title">
            <ScrollReveal delay={100}>
              <h2 className="font-title text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                Jarryd Zankovic
              </h2>
            </ScrollReveal>
          </header>

          <div className="space-y-[clamp(2rem,5vw,3.5rem)]">
            <ScrollReveal delay={150}>
              <p className="font-body text-lg font-semibold leading-relaxed text-[var(--color-ink)] sm:text-xl sm:leading-relaxed">
                Today I&rsquo;m SVP of Product at{' '}
                <a
                  href="https://fluentcommerce.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-neutral-600 hover:italic"
                >
                  Fluent Commerce
                </a>
                , leading product management, design, emerging tech &amp;
                enablement. We build the systems behind modern retail for the
                world&rsquo;s largest brands, connecting inventory, orders and
                fulfilment across stores, warehouses and supply chains.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={230}>
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
