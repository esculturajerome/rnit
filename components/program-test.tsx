import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export type ProgramAccent = "primary" | "secondary" | "tertiary"

export interface ProgramHighlight {
  icon: string
  title: string
  description: string
}

export interface ProgramCompetencyCard {
  title: string
  icon: string
  accent: ProgramAccent
  items: string[]
}

export interface ProgramCareerCard {
  title: string
  subtitle: string
  image: string
}

export interface ProgramTemplateProps {
  brandName?: string
  navItems?: Array<{ label: string; href: string }>
  badgeText?: string
  title: string
  subtitle: string
  heroImage: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  overviewTitle?: string
  overviewDescription: string
  overviewHighlights: ProgramHighlight[]
  overviewGridImages: string[]
  competencyTitle?: string
  competencyDescription?: string
  competencyCards: ProgramCompetencyCard[]
  careerTitle?: string
  careerDescription?: string
  careerCards: ProgramCareerCard[]
}

const accentStyles: Record<ProgramAccent, string> = {
  primary: "border-primary bg-surface-container-lowest",
  secondary: "border-secondary bg-surface-container-lowest",
  tertiary: "border-tertiary bg-surface-container-lowest",
}

const iconStyles: Record<ProgramAccent, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
}

export default function ProgramTestPage({
  brandName = "RNIT-TESDA",
  navItems = [
    { label: "Programs", href: "/programs" },
    { label: "Admission", href: "/enrolment" },
    { label: "Assessment", href: "/assessment" },
    { label: "About", href: "/about" },
  ],
  badgeText = "TESDA Accredited",
  title,
  subtitle,
  heroImage,
  primaryCtaLabel = "Enroll in Program",
  primaryCtaHref = "/enrolment",
  secondaryCtaLabel = "Download Curriculum",
  secondaryCtaHref = "/documents",
  overviewTitle = "Program Overview",
  overviewDescription,
  overviewHighlights,
  overviewGridImages,
  competencyTitle = "Competency Standards",
  competencyDescription,
  competencyCards,
  careerTitle = "Career Pathways",
  careerDescription,
  careerCards,
}: ProgramTemplateProps) {
  return (
    <main className="min-h-screen bg-surface font-body text-on-surface">


      <section className="relative flex min-h-[716px] items-center overflow-hidden bg-surface-container">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 via-on-background/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-tertiary px-3 py-1 text-on-tertiary">
              <span className="text-sm">✔️</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.05em]">{badgeText}</span>
            </div>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
              {title}
            </h1>
            <p className="mb-10 text-xl font-light leading-relaxed text-surface-container-low">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white shadow-xl">
                <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-md border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md hover:bg-white/20">
                <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="flex flex-col justify-center lg:col-span-5">
              <h2 className="mb-6 text-3xl font-bold text-primary">{overviewTitle}</h2>
              <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">{overviewDescription}</p>
              <div className="space-y-6">
                {overviewHighlights.map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-xl bg-surface-container-low p-4">
                    <span className="text-3xl text-primary">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-on-surface">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid h-[500px] grid-cols-2 gap-4 lg:col-span-7">
              <div className="row-span-2 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={overviewGridImages[0] ?? heroImage}
                  alt={`${title} overview image`}
                  width={1200}
                  height={1400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={overviewGridImages[1] ?? heroImage}
                  alt={`${title} support image`}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-end overflow-hidden rounded-2xl bg-primary p-8 shadow-lg">
                <span className="mb-4 text-4xl font-black text-white/20">NC II</span>
                <h3 className="text-2xl font-bold leading-tight text-white">National Certification Level 2</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-on-background">{competencyTitle}</h2>
            <p className="mx-auto max-w-2xl text-on-surface-variant">{competencyDescription}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {competencyCards.map((card) => (
              <div key={card.title} className={`rounded-2xl border-b-4 p-8 ${accentStyles[card.accent]}`}>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container">
                  <span className={`text-2xl ${iconStyles[card.accent]}`}>{card.icon}</span>
                </div>
                <h3 className="mb-4 text-xl font-bold">{card.title}</h3>
                <ul className="space-y-3 text-sm text-on-surface-variant">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className={`mt-1 text-xs ${iconStyles[card.accent]}`}>check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-on-background">{careerTitle}</h2>
              <p className="text-on-surface-variant">{careerDescription}</p>
            </div>
            <div className="mb-4 hidden h-[2px] flex-grow bg-surface-container md:block" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {careerCards.map((card) => (
              <div key={card.title} className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-on-background/90 via-on-background/20 to-transparent p-8">
                  <h4 className="mb-2 text-2xl font-bold text-white">{card.title}</h4>
                  <p className="text-sm uppercase tracking-widest text-white/70">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
