import Image from 'next/image'

export default function FullWidth() {
  return (
    <section className="relative wrapper__wide h-[300px] lg:h-[400px]">
      <Image
        src='/images/training-group.png'
        alt="TESDA Training Group"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 md:bg-black/25" />
      <div className="absolute inset-0  flex-col justify-start items-start px-6 md:px-16 lg:px-32 text-white mt-12 hidden md:flex">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How Do Skills Change Lives?
        </h2>
        <p className="text-base md:text-lg max-w-xl">
          TESDA-accredited training opens opportunities, creates jobs, and builds a skilled workforce for the future.
        </p>
      </div>
    </section>
  )
}
