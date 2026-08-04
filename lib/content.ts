import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPostSummary {
  slug: string;
  title: string;
  date: string;
  summary: string;
  featuredImage: string;
}

export interface BlogPostDetail {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    author?: string;
    tags?: string[];
    summary?: string;
    featuredImage?: string;
  };
  content: string;
}

const postsDirectory = path.join(process.cwd(), "content/events");

export function getBlogPosts(): BlogPostSummary[] {
  try {
    const filenames = fs.readdirSync(postsDirectory);

    return filenames
      .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
      .map((filename) => {
        const fileContents = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
        const { data } = matter(fileContents);

        return {
          slug: filename.replace(/\.(mdx|md)$/, ""),
          title: data.title || "Untitled",
          date: data.date || "",
          summary: data.summary || "",
          featuredImage: data.featuredImage || "/images/placeholder-blog.jpg",
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error reading blogs:", error);
    return [];
  }
}

export function getBlogPostBySlug(slug: string): BlogPostDetail | null {
  const safeSlug = String(slug ?? "");
  if (!safeSlug) return null;

  const possibleFiles = [`${safeSlug}.mdx`, `${safeSlug}.md`];

  for (const fileName of possibleFiles) {
    const filePath = path.join(postsDirectory, fileName);

    try {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: safeSlug,
        frontmatter: data as BlogPostDetail["frontmatter"],
        content,
      };
    } catch {
      // Continue to the next extension if the file doesn't exist.
    }
  }

  console.warn(`Blog post not found or error reading file for slug: ${safeSlug}`);
  return null;
}
