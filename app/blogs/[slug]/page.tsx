import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, User } from 'lucide-react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface PostFrontmatter {
    title: string;
    date: string;
    author?: string;
    tags?: string[];
    summary?: string;
    featuredImage?: string;
}

// Keep getPostBySlug as is
async function getPostBySlug(slug: string) {
    const postsDirectory = path.join(process.cwd(), 'content/blogs');
    // Ensure slug is treated as a string before joining path
    const safeSlug = String(slug ?? '');
    if (!safeSlug) {
        console.warn("Attempted to get post with an empty or invalid slug.");
        return null;
    }
    const filePath = path.join(postsDirectory, `${safeSlug}.mdx`);

    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        if (!data.title || !data.date) {
            console.warn(`Post "${safeSlug}" is missing title or date.`);
        }

        return {
            frontmatter: data as PostFrontmatter,
            content: content,
            slug: safeSlug, // Use the validated slug
        };
    } catch (error) {
        if (error instanceof Error && (error as NodeJS.ErrnoException).code === 'ENOENT') {
            console.warn(`Post file not found for slug: ${safeSlug}`);
        } else {
            console.error(`Error reading post "${safeSlug}":`, error);
        }
        return null;
    }
}

export async function generateMetadata(
    // Use 'any' for params as a diagnostic step
    { params }: { params: any }
): Promise<Metadata> {
    // Add a check to ensure params.slug exists and is a string
    const slug = typeof params?.slug === 'string' ? params.slug : '';
    if (!slug) {
        console.error("generateMetadata received invalid or missing slug in params:", params);
        return {
            title: 'Invalid Request',
            description: 'Could not determine the post slug.',
        };
    }

    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.',
        };
    }

    const metadata: Metadata = {
        title: post.frontmatter.title,
        description: post.frontmatter.summary || `Read the blog post: ${post.frontmatter.title}`,
    };

    if (post.frontmatter.featuredImage) {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
            if (!baseUrl) {
                console.warn("NEXT_PUBLIC_BASE_URL environment variable is not set. Open Graph/Twitter images might not work correctly.");
            }
            const imageUrl = baseUrl
                ? new URL(post.frontmatter.featuredImage, baseUrl).toString()
                : post.frontmatter.featuredImage;

            metadata.openGraph = {
                title: post.frontmatter.title,
                description: post.frontmatter.summary || '',
                images: [{ url: imageUrl }],
                type: 'article',
            };
            metadata.twitter = {
                card: "summary_large_image",
                title: post.frontmatter.title,
                description: post.frontmatter.summary || '',
                images: [imageUrl],
            };
        } catch (e) {
            console.error("Error constructing image URL for metadata:", e);
        }
    }

    return metadata;
}

const mdxComponents = {
    Image: (props: ImageProps) => (
        <Image
            {...props}
            src={props.src}
            alt={props.alt || ''}
            className={cn("my-6 rounded-md shadow-md", props.className)}
        // Consider adding width/height/sizes if not using fill
        // width={800} // Example
        // height={450} // Example
        // sizes="(max-width: 768px) 100vw, 800px" // Example
        />
    ),
    // Add other custom components or HTML tag overrides here if needed
};

export default async function BlogPostPage(
    // Use 'any' for params as a diagnostic step
    { params }: { params: any }
) {
    // Add a check to ensure params.slug exists and is a string
    const slug = typeof params?.slug === 'string' ? params.slug : '';
    if (!slug) {
        console.error("BlogPostPage received invalid or missing slug in params:", params);
        notFound(); // Trigger 404 if slug is invalid
    }

    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const { frontmatter, content } = post;

    // Function to safely format date
    const formatDate = (dateString: string) => {
        try {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
        } catch (e) {
            console.error("Invalid date format:", dateString);
            return "Date unavailable";
        }
    };

    return (
        <article className="container mx-auto max-w-3xl py-10 lg:py-16 px-4">
            <header className="mb-8 border-b pb-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
                    {frontmatter.title}
                </h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
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
                {frontmatter.tags && frontmatter.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {frontmatter.tags.map((tag) => (
                            <Badge key={tag}>
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </header>

            {/* Consider adding error boundary around MDXRemote if content parsing might fail */}
            <div className="prose prose-stone dark:prose-invert max-w-none prose-img:rounded-md prose-a:text-primary hover:prose-a:text-primary/80">
                <MDXRemote source={content} components={mdxComponents} />
            </div>
        </article>
    );
}

// Keep generateStaticParams as is
export async function generateStaticParams(): Promise<{ slug: string }[]> { // Add return type
    const postsDirectory = path.join(process.cwd(), 'content/blogs');
    let filenames: string[] = [];
    try {
        filenames = fs.readdirSync(postsDirectory);
    } catch (error) {
        console.error("Could not read blog directory for static params:", error);
        return [];
    }

    const slugs = filenames
        .filter(filename => /\.(mdx|md)$/.test(filename)) // Use regex test
        .map((filename) => ({
            slug: filename.replace(/\.(mdx|md)$/, ''),
        }));

    // Add logging to see what slugs are generated
    // console.log("Generated static params:", slugs);
    return slugs;
}

