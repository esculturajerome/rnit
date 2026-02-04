// app/blogs/page.tsx

import { FacebookPostSection } from "@/components/facebook-post-section";
import { FeatureBlogs } from "@/components/feature-blogs";
import { FeatureBlogsFacebook } from "@/components/feature-blogs-facebook";

export default function BlogsPage() {
    return (
        <div>
            {/* <FeatureBlogsFacebook showViewAllBlogsButton={false} /> */}
            <FeatureBlogs
                maxPosts={9}
                showTitleRow={true}
            />
            <FacebookPostSection />
        </div>
    );
}