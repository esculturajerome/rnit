// app/blogs/page.tsx

import { FacebookPostSection } from "@/components/facebook-post-section";
import { FeatureBlogs } from "@/components/feature-blogs";

export default function BlogsPage() {
    return (
        <div>
            <FeatureBlogs
                maxPosts={9}
                showTitleRow={true}
            />

            <FacebookPostSection />
        </div>
    );
}