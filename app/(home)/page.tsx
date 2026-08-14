import { FeatureBlogs } from "@/components/feature-blogs";
import { RnitNavHero } from "@/components/rnit-nav-hero";
import { Reveal } from "@/components/framer-wrapper";
import ThreeColumn from "@/components/three-column";
import FullWidth from "@/components/full-width";
import ProgramsGrid from "@/components/programs-grid";
import FullWidthWithText from "@/components/full-width-with-text";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import VerticalTabs from "@/components/ui/vertical-tabs";

// Server-side data fetching
function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content/events");
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

export default function Home() {
  const allPosts = getBlogPosts();
  return (
    <>
      <div className="-mt-20">
        <RnitNavHero />
      </div>
      <Reveal>
        <section className="wrapper__wide pt-12">
          <VerticalTabs />
        </section>
      </Reveal>
      <Reveal>
        <ThreeColumn />
      </Reveal>
      <Reveal>
        <FullWidth
          title="How Do Skills Change Lives?"
          subtext="TESDA-accredited training opens opportunities, creates jobs, and builds a skilled workforce for the future."
        />
      </Reveal>

      <Reveal>
        <ProgramsGrid />
      </Reveal>

      <Reveal>
        <FeatureBlogs showViewAllButton={true} posts={allPosts}
          maxPosts={5}
        />
      </Reveal>

      <Reveal>
        <FullWidthWithText />
      </Reveal>
    </>
  );
}
