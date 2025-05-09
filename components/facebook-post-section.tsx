// components/facebook-post-section.tsx
'use client'; // This component handles client-side state and interactions

import React, { useState } from 'react';
// Removed import for FacebookEmbed as we'll use iframes directly
import TitleRow from "@/components/title-row";
import { Button } from '@/components/ui/button';
import { facebookPostUrls } from "@/data/facebook-posts"; // Import the URLs

const POSTS_PER_PAGE = 6; // Initial number of posts
const POSTS_PER_LOAD = 3; // Number of posts to load per click (one row)

export const FacebookPostSection: React.FC = () => {
    // State to track the number of visible posts
    const [visiblePostsCount, setVisiblePostsCount] = useState(POSTS_PER_PAGE);

    // Function to handle loading more posts
    const loadMorePosts = () => {
        setVisiblePostsCount(prevCount => prevCount + POSTS_PER_LOAD);
    };

    // Slice the array to get only the posts that should be visible
    const visiblePosts = facebookPostUrls.slice(0, visiblePostsCount);

    // Check if there are more posts to load
    const hasMorePosts = visiblePostsCount < facebookPostUrls.length;

    return (
        <div className="wrapper__wide py-10">
            <div className='wrapper mx-auto'>
                <TitleRow
                    title="RNIT on Facebook"
                    subText="See our latest posts directly from Facebook."
                />

                {/* Grid layout for the embeds */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Map over the *visible* posts */}
                    {visiblePosts.map((postUrl) => {
                        // Encode the post URL for use in the iframe src
                        const encodedUrl = encodeURIComponent(postUrl);
                        // Construct the iframe source URL
                        const iframeSrc = `https://www.facebook.com/plugins/post.php?href=${encodedUrl}&show_text=true&width=500`;

                        return (
                            <div key={postUrl} className="flex justify-center">
                                {/* Use iframe directly */}
                                <iframe
                                    src={iframeSrc}
                                    width="500" // You might want to make this responsive later
                                    height="600" // Adjust height as needed, or make it dynamic
                                    style={{ border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    title={`Facebook Post Embed - ${postUrl.substring(0, 50)}`} // Add a descriptive title
                                    loading="lazy" // Add lazy loading for performance
                                ></iframe>
                            </div>
                        );
                    })}
                </div>

                {/* Load More Button */}
                {hasMorePosts && (
                    <div className="mt-12 text-center">
                        <Button onClick={loadMorePosts} size="lg">
                            Load More Posts
                        </Button>
                    </div>
                )}
            </div></div>
    );
};
