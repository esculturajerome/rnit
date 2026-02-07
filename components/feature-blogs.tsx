'use client';

import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import TitleRow from "./title-row";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Animation Variants (Same as Program Page)
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

interface Post {
    slug: string;
    title: string;
    date: string;
    summary: string;
    featuredImage: string;
}

interface FeatureBlogsProps {
    posts: Post[]; // Pass data from parent (Page) to keep this a Client Component
    maxPosts?: number;
    showViewAllButton?: boolean;
}

export const FeatureBlogs = ({
    posts = [],
    maxPosts = 5,
    showViewAllButton = true
}: FeatureBlogsProps) => {

    const displayedPosts = posts.slice(0, maxPosts);
    if (displayedPosts.length === 0) return null;

    return (
        <section className="relative w-full py-12 lg:py-24 overflow-hidden wrapper__wide">
            <div className="wrapper relative z-10 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <TitleRow title="Insights & Updates" subText="Stay Ahead with Our Latest Blogs" />
                </motion.div>

                {/* Blogs Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                    {displayedPosts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            variants={itemVariants}
                            className={cn(
                                "group relative overflow-hidden aspect-square bg-slate-900",
                                i === 0 && "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                            )}
                        >
                            {/* Image with zoom effect */}
                            <Image
                                src={post.featuredImage}
                                alt={post.title}
                                fill
                                className="object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
                            />

                            {/* Refined Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

                            {/* Content */}
                            <div className="relative z-10 h-full p-6 flex flex-col justify-between text-white">
                                <div className="flex justify-between items-start">
                                    <CalendarDays className="w-8 h-8 stroke-1 text-secondary opacity-80 transition-transform duration-300 group-hover:-translate-y-1" />
                                    <div className="h-6 w-6  border border-white/20 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                                        <ArrowRight className="h-3 w-3" />
                                    </div>
                                </div>

                                <div>
                                    <Link href={`/blogs/${post.slug}`} className="focus:outline-none">
                                        <h3 className={cn(
                                            "font-bold line-clamp-2 tracking-tight transition-colors group-hover:text-secondary",
                                            i === 0 ? "text-2xl md:text-3xl" : "text-lg"
                                        )}>
                                            {post.title}
                                        </h3>
                                    </Link>

                                    <p className="text-sm text-gray-300 line-clamp-2 mt-2 opacity-90">
                                        {post.summary}
                                    </p>

                                    <Button variant="link" className="p-0 text-white mt-4 h-auto hover:text-secondary transition-colors" asChild>
                                        <Link href={`/blogs/${post.slug}`} className="group inline-flex items-center">
                                            Read More
                                            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                {showViewAllButton && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 text-center"
                    >
                        <Button size="lg" className=" px-8 shadow-lg" asChild>
                            <Link href="/blogs" className="group inline-flex items-center">
                                View All Blogs
                                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};