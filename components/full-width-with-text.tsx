import Image from 'next/image'
import groupphoto from "@/public/images/training-group-2.png";
import Link from 'next/link';
import { ArrowRight, ArrowRightIcon } from 'lucide-react';
import { Button } from './ui/button';


export default function FullWidthWithText() {
  return (
    <section className="relative wrapper__wide h-[200px] md:h-[400px] lg:h-[550px]">
      <Image
        src={groupphoto}
        alt="TESDA Training Group"
        fill
        className="object-cover"
        priority
      />
      {/* <div className="absolute inset-0 bg-black/25" /> */}
      <div className="absolute inset-0 flex flex-col justify-start items-start px-6 md:px-16 lg:px-32 mt-20 hidden md:block">
        <div className='bg-white text-black w-2xl p-4 px-6'>
          <h2 className="text-3xl md:text-4xl font-medium mb-2">
            Behind Every Successful Student
          </h2>
          <p className="text-base md:text-lg max-w-xl">
            Dedicated instructors and staff guiding students to success
          </p>

          <div>
            {/* Use Link as the child */}
            <Button variant="link" className="p-0! h-auto text-black hover:text-black/80 focus:outline-none focus:ring-2 rounded group" asChild>
              <Link href='/about' className="flex items-center font-semibold">
                Learn More About Our Team
                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
