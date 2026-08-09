import Image from "next/image"

const ThreeColumnImage = () => {
  const logos = [
    {
      name: "BP_logo",
      src: "/BP_logo.png",
      alt: "Bagong Pilipinas Logo",
    },
    {
      name: "Tesda_logo",
      src: "/tesda_logo.webp",
      alt: "TESDA Logo",
    },
    {
      name: "RNIT_logo",
      src: "/RNIT-logo.webp",
      alt: "RNIT Logo",
    },
  ]

  return (
    <section className="wrapper__wide py-8 md:py-16">
      <div className="wrapper flex justify-center">
        <div className="w-full grid grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center w-24 h-24 md:w-40 md:h-40"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={160}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThreeColumnImage
