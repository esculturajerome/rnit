// app/blogs/page.tsx

import { FacebookPostSection } from "@/components/facebook-post-section";
import { FeatureBlogs } from "@/components/feature-blogs";

export default function BlogsPage() {
    return (
        <div className="wrapper mx-auto">
            <FeatureBlogs
                maxPosts={9}
                showTitleRow={true}
            />
            <FacebookPostSection />
        </div>
    );
}