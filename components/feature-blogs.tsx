// components/feature-blogs.tsx
import { ArrowRight, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import TitleRow from "./title-row";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    summary: string;
    featuredImage?: string;
}

interface FeatureBlogsProps {
    maxPosts?: number;
    showTitleRow?: boolean;
    showViewAllButton?: boolean;
    title?: string;
    subText?: string;
    badgeText?: string;
}

const generatePreview = (content: string, maxLength = 150): string => {
    let text = content.replace(/---[\s\S]*?---/, '').trim();
    text = text.replace(/^#+\s+/gm, '');
    text = text.replace(/^[\*\-\+]\s+/gm, '');
    text = text.replace(/^>\s+/gm, '');
    text = text.replace(/^[=\-]{3,}\s*$/gm, '');
    text = text.replace(/^[`~]{3,}.*$/gm, '');
    text = text.replace(/!\[.*?\]\(.*?\)/g, '');
    text = text.replace(/\[(.*?)\]\(.*?\)/g, '$1');
    text = text.replace(/\s+/g, ' ').trim();
    if (text.length <= maxLength) return text;
    let truncated = text.substring(0, maxLength);
    truncated = truncated.substring(0, Math.min(truncated.length, truncated.lastIndexOf(' ')));
    return truncated + '...';
};

const getBlogPosts = (): BlogPost[] => {
    const postsDirectory = path.join(process.cwd(), 'content/blogs');
    let filenames: string[] = [];
    try {
        filenames = fs.readdirSync(postsDirectory);
    } catch (error) {
        console.error("Could not read blog directory:", error);
        return [];
    }

    const posts = filenames
        .filter(filename => filename.endsWith('.mdx') || filename.endsWith('.md'))
        .map((filename) => {
            const filePath = path.join(postsDirectory, filename);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const { data, content } = matter(fileContents);

            if (!data.title || !data.date) {
                console.warn(`Skipping ${filename}: missing title or date in frontmatter.`);
                return null;
            }

            const summary = data.summary || generatePreview(content);

            return {
                slug: filename.replace(/\.(mdx|md)$/, ''),
                title: data.title,
                date: data.date,
                summary: summary,
                featuredImage: data.featuredImage || '/images/placeholder-blog.jpg',
            } as BlogPost;
        })
        .filter((post): post is BlogPost => post !== null);

    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
};

export const FeatureBlogs = async ({
    maxPosts = 5,
    showTitleRow = true,
    showViewAllButton = false,
    title = "Insights & Updates",
    subText = "Stay Ahead with Our Latest Blogs",
    badgeText = "Blogs"
}: FeatureBlogsProps) => {
    const allPosts = getBlogPosts();
    const latestPosts = allPosts.slice(0, maxPosts);

    if (latestPosts.length === 0) {
        return (
            <div className="w-full py-10 lg:py-20">
                <div className="wrapper mx-auto">
                    {showTitleRow && <TitleRow badge={badgeText} title={title} subText={subText} />}
                    <p className="text-muted-foreground text-center mt-10">No blog posts found yet.</p>
                </div>
            </div>
        );
    }

    const featuredPost = latestPosts.length > 0 ? latestPosts[0] : null;
    const regularPosts = latestPosts.length > 1 ? latestPosts.slice(1) : [];

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    };

    return (
        <div className="w-full py-10 lg:py-20">
            <div className="wrapper mx-auto">
                {showTitleRow && (
                    <TitleRow
                        badge={badgeText}
                        title={title}
                        subText={subText}
                    />
                )}

                <div className={cn("gap-8", showTitleRow && "mt-10", "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")}>
                    {/* Featured Post */}
                    {featuredPost && regularPosts.length > 0 && (
                        <div className="relative h-full w-full rounded-md aspect-square overflow-hidden sm:col-span-2 lg:col-span-2 lg:row-span-2 group">
                            {featuredPost.featuredImage && (
                                <Image
                                    src={featuredPost.featuredImage}
                                    alt={featuredPost.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                                    style={{ objectFit: "cover" }}
                                    className="z-0 transition-transform duration-300 group-hover:scale-105"
                                    priority
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                            <div className="relative z-20 p-6 flex justify-between flex-col h-full text-white">
                                <CalendarDays className="w-8 h-8 stroke-1 text-gray-300" />
                                <div className="flex flex-col">
                                    <Link href={`/blogs/${featuredPost.slug}`} className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded">
                                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight hover:underline line-clamp-2">
                                            {featuredPost.title}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-200 mt-1 line-clamp-3">
                                        {featuredPost.summary}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-2">{formatDate(featuredPost.date)}</p>
                                    <div className="mt-4">
                                        {/* Use Link as the child */}
                                        <Button variant="link" className="p-0 h-auto text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded" asChild>
                                            <Link href={`/blogs/${featuredPost.slug}`} className="flex items-center">
                                                Read more
                                                <ArrowRight className="ml-2 size-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Regular Posts */}
                    {featuredPost && regularPosts.length === 0 && (
                        <div key={featuredPost.slug} className="relative h-full rounded-md aspect-square overflow-hidden group sm:col-span-2 lg:col-span-2 xl:col-span-2">
                            {featuredPost.featuredImage && (
                                <Image
                                    src={featuredPost.featuredImage}
                                    alt={featuredPost.title}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                    style={{ objectFit: "cover" }}
                                    className="z-0 transition-transform duration-300 group-hover:scale-105"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                            <div className="relative z-20 p-6 flex justify-between flex-col h-full text-white">
                                <CalendarDays className="w-8 h-8 stroke-1 text-gray-300" />
                                <div className="flex flex-col">
                                    <Link href={`/blogs/${featuredPost.slug}`} className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded">
                                        <h3 className="text-lg font-semibold tracking-tight hover:underline line-clamp-2">
                                            {featuredPost.title}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-200 max-w-xs text-sm mt-1 line-clamp-2">
                                        {featuredPost.summary}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-2">{formatDate(featuredPost.date)}</p>
                                    <div className="mt-3">
                                        {/* Use Link as the child */}
                                        <Button variant="link" className="p-0 h-auto text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded" asChild>
                                            <Link href={`/blogs/${featuredPost.slug}`} className="flex items-center">
                                                Read more
                                                <ArrowRight className="ml-2 size-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {regularPosts.map((post) => (
                        <div key={post.slug} className="relative h-full rounded-md aspect-square overflow-hidden group">
                            {post.featuredImage && (
                                <Image
                                    src={post.featuredImage}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                    style={{ objectFit: "cover" }}
                                    className="z-0 transition-transform duration-300 group-hover:scale-105"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                            <div className="relative z-20 p-6 flex justify-between flex-col h-full text-white">
                                <CalendarDays className="w-8 h-8 stroke-1 text-gray-300" />
                                <div className="flex flex-col">
                                    <Link href={`/blogs/${post.slug}`} className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded">
                                        <h3 className="text-lg font-semibold tracking-tight hover:underline line-clamp-2">
                                            {post.title}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-200 max-w-xs text-sm mt-1 line-clamp-2">
                                        {post.summary}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-2">{formatDate(post.date)}</p>
                                    <div className="mt-3">
                                        {/* Use Link as the child */}
                                        <Button variant="link" className="p-0 h-auto text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded" asChild>
                                            <Link href={`/blogs/${post.slug}`} className="flex items-center">
                                                Read more
                                                <ArrowRight className="ml-2 size-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {showViewAllButton && (
                    <div className="mt-12 text-center">
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/blogs" className="flex items-center group">
                                View All Blogs
                                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
