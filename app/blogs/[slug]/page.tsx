// app/blogs/[slug]/page.tsx
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

// Define the expected props structure for the page and metadata function
interface PageProps {
    params: { slug: string };
    // searchParams?: { [key: string]: string | string[] | undefined }; // Optional: Add if you use searchParams
}


// Keep getPostBySlug as is
async function getPostBySlug(slug: string) {
    const postsDirectory = path.join(process.cwd(), 'content/blogs');
    const filePath = path.join(postsDirectory, `${slug}.mdx`);

    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        if (!data.title || !data.date) {
            console.warn(`Post "${slug}" is missing title or date.`);
            // Consider returning null or throwing an error if essential data is missing
        }

        return {
            frontmatter: data as PostFrontmatter,
            content: content,
            slug: slug,
        };
    } catch (error) {
        // Check if the error is because the file doesn't exist
        if (error instanceof Error && (error as NodeJS.ErrnoException).code === 'ENOENT') {
            console.warn(`Post file not found for slug: ${slug}`);
        } else {
            console.error(`Error reading post "${slug}":`, error);
        }
        return null; // Return null if file not found or error occurs
    }
}


export async function generateMetadata(
    { params }: PageProps // Use the PageProps interface
): Promise<Metadata> {
    // params is directly available, no need to await
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.', // Add description
        };
    }

    const metadata: Metadata = {
        title: post.frontmatter.title,
        description: post.frontmatter.summary || `Read the blog post: ${post.frontmatter.title}`, // More specific fallback
    };

    // Construct absolute URL for images
    if (post.frontmatter.featuredImage) {
        try {
            // Ensure NEXT_PUBLIC_BASE_URL is set in your environment variables
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
            if (!baseUrl) {
                console.warn("NEXT_PUBLIC_BASE_URL environment variable is not set. Open Graph/Twitter images might not work correctly.");
            }
            // Use URL constructor for robust joining, handle potential base URL issues
            const imageUrl = baseUrl
                ? new URL(post.frontmatter.featuredImage, baseUrl).toString()
                : post.frontmatter.featuredImage;


            metadata.openGraph = {
                title: post.frontmatter.title,
                description: post.frontmatter.summary || '',
                images: [
                    {
                        url: imageUrl,
                        // Optionally add width/height if known
                        // width: 1200,
                        // height: 630,
                    },
                ],
                type: 'article', // Add OG type
            };
            metadata.twitter = {
                card: "summary_large_image",
                title: post.frontmatter.title,
                description: post.frontmatter.summary || '',
                images: [imageUrl],
            };
        } catch (e) {
            console.error("Error constructing image URL for metadata:", e);
            // Handle cases where featuredImage might not be a valid path segment
        }
    }

    return metadata;
}

const mdxComponents = {
    // Ensure Image component handles props correctly, especially src
    Image: (props: ImageProps) => (
        <Image
            {...props}
            src={props.src} // Explicitly pass src
            alt={props.alt || ''} // Provide default alt text
            className={cn("my-6 rounded-md shadow-md", props.className)}
        // Consider adding default width/height or sizes if not using fill
        // width={props.width || 800} // Example default width
        // height={props.height || 450} // Example default height
        // sizes="(max-width: 768px) 100vw, 800px" // Example sizes
        />
    ),
    // Add other custom components or HTML tag overrides here if needed
    // e.g., h2: (props) => <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />,
    // a: (props) => <Link href={props.href || '#'} {...props} className="text-primary hover:underline" /> // Example Link override
};

export default async function BlogPostPage(
    { params }: PageProps // Use the PageProps interface
) {
    // params is directly available, no need to await
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound(); // Trigger 404 if post is null
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

            {/* Apply prose styles for MDX content */}
            <div className="prose prose-stone dark:prose-invert max-w-none prose-img:rounded-md prose-a:text-primary hover:prose-a:text-primary/80">
                <MDXRemote source={content} components={mdxComponents} />
            </div>
        </article>
    );
}

// Keep generateStaticParams as is
export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'content/blogs');
    let filenames: string[] = [];
    try {
        filenames = fs.readdirSync(postsDirectory);
    } catch (error) {
        console.error("Could not read blog directory for static params:", error);
        return []; // Return empty array on error
    }

    return filenames
        .filter(filename => filename.endsWith('.mdx') || filename.endsWith('.md'))
        .map((filename) => ({
            slug: filename.replace(/\.(mdx|md)$/, ''),
        }));
}
