import Image from "next/image";
import Link from "next/link";

export default function ProgramsGrid() {
    return (
        <section className="wrapper__wide bg-white">
            <div className="wrapper py-4">
                {/* <div className="mx-auto max-w-7xl px-4 py-4"> */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[256px]">

                    {/* Dressmaking NC II */}
                    <Link href="programs/dressmaking-nc-ii" className="flex flex-col justify-end h-64 lg:h-[unset] bg-primary p-6 text-white md:col-span-1 lg:col-span-4 lg:row-span-2">
                        <h3 className="text-xl font-semibold">Dressmaking NC II</h3>
                        <p className="mt-2 text-sm text-white/90">
                            Garment construction and sewing skills for fashion and apparel work.
                        </p>
                    </Link>

                    {/* Automotive Servicing NC II */}
                    <Link href="programs/automotive-servicing-nc-ii" className="relative h-64 md:h-full lg:col-span-8 flex">
                        <Image
                            src='/images/programs/mechanic/mechanic1.jpg'
                            alt="Automotive Servicing NC II"
                            fill
                            className="object-cover object-center"
                        /><div className="absolute inset-0 bg-black/20" />
                        <div className="relative z-10 p-6 bottom-1 text-white self-end">
                            <h3 className="text-xl font-semibold">Automotive Servicing NC II</h3>
                            <p className="mt-2 max-w-md text-sm">
                                Vehicle maintenance, repair, and basic automotive diagnostics.
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-black/40" />
                    </Link>

                    {/* Driving NC II */}
                    <Link href="programs/driving-nc-ii" className="relative h-64 lg:col-span-4 flex">
                        <Image
                            src='/images/programs/driving/driving3.jpg'
                            alt="Driving NC II"
                            fill
                            className="object-cover object-center"
                        /><div className="absolute inset-0 bg-black/20" />
                        <div className="relative z-10 p-6 text-white self-end">
                            <h3 className="text-xl font-semibold">Driving NC II</h3>
                            <p className="mt-2 text-sm">
                                Safe, professional driving skills for commercial and private transport.
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-black/40" />
                    </Link>

                    {/* RAC Servicing NC II */}
                    <Link href="programs/rac-servicing-nc-ii" className="flex flex-col justify-end h-64 lg:h-[unset] bg-primary p-6 text-white lg:col-span-4">
                        <h3 className="text-xl font-semibold">RAC Servicing NC II</h3>
                        <p className="mt-2 text-sm text-white/90">
                            Installation and maintenance of refrigeration and air-conditioning systems.
                        </p>
                    </Link>

                    {/* Metal Arc Welding NC II */}
                    <Link href="programs/shielded-metal-arc-welding-nc-ii" className="relative h-64 lg:col-span-4 flex">
                        <Image
                            src='/images/programs/welder/welder1.jpg'
                            alt="Shielded Metal Arc Welding NC II"
                            fill
                            className="object-cover object-center"
                        /><div className="absolute inset-0 bg-black/20" />
                        <div className="relative z-10 p-6 text-white self-end">
                            <h3 className="text-xl font-semibold">Shielded Metal Arc Welding NC II</h3>
                            <p className="mt-2 text-sm">
                                Hands-on welding skills for structural and industrial applications.
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-black/40" />
                    </Link>

                    {/* Food & Beverage Services NC II */}
                    <Link href="programs/food-and-beverage-services-nc-ii" className="relative h-64 lg:col-span-8 flex">
                        <Image
                            src='/images/programs/food/food1.jpg'
                            alt="Food & Beverage Services NC II"
                            fill
                            className="object-cover object-center"
                        /><div className="absolute inset-0 bg-black/20" />
                        <div className="relative z-10 p-6 text-white self-end">
                            <h3 className="text-xl font-semibold">Food & Beverage Services NC II</h3>
                            <p className="mt-2 text-sm">
                                Hospitality service skills for hotels, restaurants, and events.
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-black/40" />
                    </Link>

                    {/* Agricultural Crops Production NC II */}
                    <Link href="programs/agricultural-crops-production-nc-ii" className="relative h-64 lg:col-span-8 flex">
                        <Image
                            src='/images/programs/agricultural/agricultural1.jpg'
                            alt="Agricultural Crops Production NC II"
                            fill
                            className="object-cover object-center"
                        /><div className="absolute inset-0 bg-black/20" />
                        <div className="relative z-10 p-6 text-white self-end">
                            <h3 className="text-xl font-semibold">
                                Agricultural Crops Production NC II
                            </h3>
                            <p className="mt-2 max-w-md text-sm">
                                Modern farming techniques for sustainable crop production.
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-black/40" />
                    </Link>

                    {/* Bread & Pastry Production */}
                    <Link href="programs/bread-and-pastry-production-nc-ii" className="flex flex-col justify-end h-64 lg:h-[unset] bg-primary p-6 text-white lg:col-span-4">
                        <h3 className="text-xl font-semibold">Bread & Pastry Production</h3>
                        <p className="mt-2 text-sm text-white/90">
                            Baking skills for bread, pastries, and commercial food production.
                        </p>
                    </Link>

                </div>

                {/* Footer Note */}
                <p className="mt-8 text-right text-xs">
                    All training programs are TESDA-accredited under National Certificate II (NC II).
                    Availability may change without prior notice.
                </p>
            </div>
        </section>
    )
}
