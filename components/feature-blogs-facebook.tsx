// components/feature-blogs-facebook.tsx
import { ArrowRight, CalendarDays } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BlogPost {
  slug: string
  title: string
  date: string
  summary: string
  featuredImage?: string
}

interface FeatureBlogsFacebookProps {
  maxBlogs?: number
  title?: string
  subText?: string
  showViewAllBlogsButton?: boolean
}

interface FacebookUpdate {
  title: string
  link: string
}

// ----------------------
// Utils
// ----------------------
const generatePreview = (content: string, maxLength = 150): string => {
  let text = content
    .replace(/---[\s\S]*?---/, "")
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

// ----------------------
// Blog Card Component
// ----------------------
const BlogCard = ({ post, featured = false }: { post: BlogPost; featured?: boolean }) => {
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

  const aspectClass = featured ? "aspect-[4/3]" : "aspect-video"

  return (
    <div className={cn("relative overflow-hidden w-full group", aspectClass)}>
      {post.featuredImage && (
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="z-0 transition-transform duration-300 group-hover:scale-105"
          priority={featured}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
      <div className="absolute inset-0 p-4 flex flex-col justify-end z-20 text-white">
        <p className="text-xs text-gray-300 flex items-center">
          <CalendarDays className="w-4 h-4 mr-1" />
          {formatDate(post.date)}
        </p>
        <Link href={`/blogs/${post.slug}`}>
          <h3 className={cn(featured ? "text-xl md:text-2xl" : "text-lg", "font-semibold hover:underline")}>
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-200 text-sm mt-1 line-clamp-2">{post.summary}</p>
        <div className="mt-2">
          <Button variant="link" className="!p-0 text-white flex items-center gap-1" asChild>
            <Link href={`/blogs/${post.slug}`}>
              Read more <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

// ----------------------
// Facebook Updates Component
// ----------------------
export const FacebookUpdates = ({ updates, profileLink }: { updates: FacebookUpdate[]; profileLink: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm font-semibold text-gray-700">
        Visit us on <Link href={profileLink} className="text-blue-600 hover:underline">Facebook</Link>
      </div>
      {updates.map((update, i) => (
        <div key={i} className="p-4 bg-gray-100 rounded hover:bg-gray-200 transition">
          <Link href={update.link} className="text-sm font-medium text-gray-900 hover:underline">
            {update.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

// ----------------------
// Main Combined Component
// ----------------------
export const FeatureBlogsFacebook = async ({
  maxBlogs = 3,
  title = "Insights & Updates",
  subText = "Stay Ahead with Our Latest Blogs",
  showViewAllBlogsButton = true,
}: FeatureBlogsFacebookProps) => {
  const allPosts = getBlogPosts()
  const latestPosts = allPosts.slice(0, maxBlogs)

  const facebookPosts: FacebookUpdate[] = [
    { title: "Facebook post 1", link: "#" },
    { title: "Facebook post 2", link: "#" },
    { title: "Facebook post 3", link: "#" },
    { title: "Facebook post 4", link: "#" },
  ]

  const fbProfileLink = "https://www.facebook.com/RNITCorner"

  return (
    <div className="wrapper__wide">
      <div className="wrapper py-10 flex flex-col lg:flex-row gap-8">
        {/* Blogs Column */}
        <div className="flex-1 flex flex-col gap-4">
          {latestPosts.length > 0 ? (
            <>
              {/* <BlogCard post={latestPosts[0]} featured /> */}
              {latestPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </>
          ) : (
            <p>No blog posts found yet.</p>
          )}
          {showViewAllBlogsButton && (
            <div className="mt-4">
              <Button size="lg" asChild>
                <Link href="/blogs" className="flex items-center gap-1">
                  View All Blogs <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          )}
        </div>

        {/* Facebook Updates Column */}
        <div className="w-full lg:w-1/4">
          <FacebookUpdates updates={facebookPosts} profileLink={fbProfileLink} />
        </div>
      </div>
    </div>
  )
}
