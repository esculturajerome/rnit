import { FeatureBlogs } from "@/components/feature-blogs";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FacebookPostSection } from "@/components/facebook-post-section";

// Server-side data fetching
function getBlogPosts() {
    const postsDirectory = path.join(process.cwd(), "content/blogs");
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
    } catch (e) {
        console.error("Error reading blogs:", e);
        return [];
    }
}

export default function Page() {
    const allPosts = getBlogPosts();

    return (
        <main>

            <FeatureBlogs
                posts={allPosts}
                maxPosts={allPosts.length}
                showViewAllButton={false}
            />
            <FacebookPostSection />
        </main>
    );
}