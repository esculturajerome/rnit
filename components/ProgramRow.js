import Image from "next/image";
import Link from "next/link";

import ProgramImage from "../public/images/programs/mechanic/mechanic1.jpg";

function ProgramRow() {
  return (
    <div className="grid md:grid-cols-2 gap-4 -mb-1.5 widest items-center mt-0">
      <div className="lg:order-1 flex-1 mx-4 py-8 lg:py-0 sm:mx-auto md:ml-8 lg:ml-16">
        <h2 className="max-w-lg lg:mb-6 text-2xl font-bold tracking-tight text-secondaryDark md:text-3xl lg:leading-none">
          AUTOMOTIVE
          <br className="hidden md:block" /> SERVICING NC II
        </h2>
        <p className="text-sm text-gray-700 lg:text-lg sm:max-w-md">
          To produce qualified automotive service technicians with highly
          employable skills through quality instruction and an extensive shop
          experience and make them highly competitive in a rapidly changing
          world of automotive.
        </p>
        <Link href="/programs">
          <div className="btn-contained mt-4 lg:mt-8 text-sm lg:text-base">
            Learn more
          </div>
        </Link>
      </div>

      <div className="order-1 flex-1">
        <Image
          src={ProgramImage}
          width={800}
          height={500}
          alt="Mechanic"
          objectFit="cover"
          blurDataURL={ProgramImage.blurData}
          placeholder="blur"
        />
      </div>
    </div>
  );
}

export default ProgramRow;
