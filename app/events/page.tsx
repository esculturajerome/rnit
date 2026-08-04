import { FeatureBlogs } from "@/components/feature-blogs";
import { FacebookPostSection } from "@/components/facebook-post-section";
import FullWidthWithText from "@/components/full-width-with-text";
import { getBlogPosts } from "@/lib/content";

export default function Page() {
    const allPosts = getBlogPosts();

    return (
        <main>
            <FullWidthWithText
                title="RNIT Events"
                subtext="Stay updated with the latest activities, community engagements, and milestone celebrations at Romblon National Institute of Technology."
                imageSrc="/images/events-cover.webp"
                imageAlt="RNIT Events Banner"
            />
            <FeatureBlogs
                posts={allPosts}
                maxPosts={allPosts.length}
                showViewAllButton={false}
            />
            <FacebookPostSection />
        </main>
    );
}