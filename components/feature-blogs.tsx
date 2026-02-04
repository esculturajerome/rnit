// components/feature-blogs.tsx
import { ArrowRight, CalendarDays } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "./ui/button"
import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import TitleRow from "./title-row"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BlogPost {
    slug: string
    title: string
    date: string
    summary: string
    featuredImage?: string
}

interface FeatureBlogsProps {
    maxPosts?: number
    showTitleRow?: boolean
    showViewAllButton?: boolean
    title?: string
    subText?: string
    badgeText?: string
}

// Generate a short preview from markdown content
const generatePreview = (content: string, maxLength = 150): string => {
    let text = content
        .replace(/---[\s\S]*?---/, "") // remove frontmatter
        .replace(/^#+\s+/gm, "")
        .replace(/^[*\-+]\s+/gm, "")
        .replace(/^>\s+/gm, "")
        .replace(/^[=`~]{3,}.*$/gm, "")
        .replace(/!\[.*?\]\(.*?\)/g, "")
        .replace(/\[(.*?)\]\(.*?\)/g, "$1")
        .replace(/\s+/g, " ")
        .trim()
    if (text.length <= maxLength) return text
    let truncated = text.substring(0, maxLength)
    truncated = truncated.substring(0, Math.min(truncated.length, truncated.lastIndexOf(" ")))
    return truncated + "..."
}

// Fetch blog posts from content folder
const getBlogPosts = (): BlogPost[] => {
    const postsDirectory = path.join(process.cwd(), "content/blogs")
    let filenames: string[] = []
    try {
        filenames = fs.readdirSync(postsDirectory)
    } catch (error) {
        console.error("Could not read blog directory:", error)
        return []
    }

    const posts = filenames
        .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
        .map((filename) => {
            const filePath = path.join(postsDirectory, filename)
            const fileContents = fs.readFileSync(filePath, "utf8")
            const { data, content } = matter(fileContents)

            if (!data.title || !data.date) return null

            return {
                slug: filename.replace(/\.(mdx|md)$/, ""),
                title: data.title,
                date: data.date,
                summary: data.summary || generatePreview(content),
                featuredImage: data.featuredImage || "/images/placeholder-blog.jpg",
            } as BlogPost
        })
        .filter((post): post is BlogPost => post !== null)

    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return posts
}

// Blog card component
const BlogCard = ({ post, featured = false }: { post: BlogPost; featured?: boolean }) => {
    const formatDate = (dateString: string) =>
        new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })

    return (
        <div
            className={cn(
                "relative h-full overflow-hidden group",
                featured
                    ? "aspect-square sm:col-span-2 lg:col-span-2 lg:row-span-2"
                    : "aspect-square"
            )}
        >
            {post.featuredImage && (
                <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    sizes={
                        featured
                            ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                            : "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    }
                    style={{ objectFit: "cover" }}
                    className="z-0 transition-transform duration-300 group-hover:scale-105"
                    priority={featured}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
            <div className="relative z-20 p-6 flex flex-col justify-between h-full text-white">
                <CalendarDays className="w-8 h-8 stroke-1 text-gray-300" />
                <div className="flex flex-col">
                    <Link
                        href={`/blogs/${post.slug}`}
                        className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded"
                    >
                        <h3
                            className={cn(
                                featured ? "text-xl md:text-2xl" : "text-lg",
                                "font-semibold tracking-tight hover:underline line-clamp-1"
                            )}
                        >
                            {post.title}
                        </h3>
                    </Link>
                    <p className={cn(featured ? "text-gray-200 mt-1" : "text-gray-200 max-w-xs text-sm mt-1", "line-clamp-2")}>
                        {post.summary}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">{formatDate(post.date)}</p>
                    <div className={featured ? "mt-4" : "mt-3"}>
                        <Button
                            variant="link"
                            className="!p-0 h-auto text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded"
                            asChild
                        >
                            <Link href={`/blogs/${post.slug}`} className="flex items-center">
                                Read more
                                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Main feature blogs component
export const FeatureBlogs = async ({
    maxPosts = 5,
    showTitleRow = true,
    showViewAllButton = false,
    title = "Insights & Updates",
    subText = "Stay Ahead with Our Latest Blogs",
    badgeText = "Blogs",
}: FeatureBlogsProps) => {
    const allPosts = getBlogPosts()
    const latestPosts = allPosts.slice(0, maxPosts)

    if (latestPosts.length === 0)
        return (
            <div className="py-10">
                {showTitleRow && <TitleRow badge={badgeText} title={title} subText={subText} />}
                <p className="text-center mt-10">No blog posts found yet.</p>
            </div>
        )

    const featuredPost = latestPosts[0]
    const regularPosts = latestPosts.slice(1)

    return (
        <div className="wrapper__wide">
            <div className="wrapper py-10">
                {showTitleRow && <TitleRow title={title} subText={subText} />}

                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {featuredPost && <BlogCard post={featuredPost} featured={regularPosts.length > 0} />}
                    {regularPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>

                {showViewAllButton && (
                    <div className="mt-12 text-center">
                        <Button size="lg" asChild>
                            <Link href="/blogs" className="flex items-center group">
                                View All Blogs
                                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
