import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, User } from 'lucide-react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface PostFrontmatter {
    title: string
    date: string
    author?: string
    tags?: string[]
    summary?: string
    featuredImage?: string
}

// Read post from disk
function getPostBySlug(slug: string) {
    const postsDirectory = path.join(process.cwd(), 'content/blogs')
    const safeSlug = String(slug ?? '')
    if (!safeSlug) return null

    const filePath = path.join(postsDirectory, `${safeSlug}.mdx`)
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)
        return {
            frontmatter: data as PostFrontmatter,
            content,
            slug: safeSlug,
        }
    } catch (e) {
        console.warn(`Blog post not found or error reading file for slug: ${safeSlug}`, e)
        return null
    }
}

// MDX custom components
const mdxComponents = {
    Image: (props: ImageProps) => (
        <Image
            {...props}
            src={props.src}
            alt={props.alt || ''}
            className={cn("my-6  shadow-md", props.className)}
        />
    ),
}

// Format date safely
const formatDate = (dateString: string) => {
    try {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    } catch {
        return 'Date unavailable'
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    if (!slug) return <p>Loading...</p>
    const post = getPostBySlug(Array.isArray(slug) ? slug[0] : slug)
    if (!post) return <p>Post not found</p>

    const { frontmatter, content } = post

    return (
        <article className="container mx-auto max-w-3xl py-10 lg:py-16 px-4">
            <header className="mb-8 border-b pb-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-3">
                    {frontmatter.title}
                </h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm  ">
                    <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        <time dateTime={frontmatter.date}>
                            {formatDate(frontmatter.date)}
                        </time>
                    </div>
                    {frontmatter.author && (
                        <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>By {frontmatter.author}</span>
                        </div>
                    )}
                </div>
                {frontmatter.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {frontmatter.tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                        ))}
                    </div>
                )}
            </header>

            <div className="prose prose-stone dark:prose-invert max-w-none prose-img: prose-a:text-primary hover:prose-a:text-primary/80">
                <MDXRemote source={content} components={mdxComponents} />
            </div>
        </article>
    )
}
