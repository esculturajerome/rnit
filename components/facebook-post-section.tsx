// components/facebook-post-section.tsx
'use client'; // This component handles client-side state and interactions

import React, { useState } from 'react';
import { FacebookEmbed } from "@/components/facebook-embed";
import TitleRow from "@/components/title-row";
import { Button } from '@/components/ui/button';
import { facebookPostUrls } from "@/data/facebook-posts"; // Import the URLs directly here

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
        <div className="wrapper mx-auto py-10 lg:py-16">
            <TitleRow
                title="RNIT on Facebook"
                subText="See our latest posts directly from Facebook."
            />

            {/* Grid layout for the embeds */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Map over the *visible* posts */}
                {visiblePosts.map((url) => (
                    <div key={url} className="flex justify-center">
                        <div className="w-full max-w-lg">
                            {/* Pass the postUrl to the embed component */}
                            <FacebookEmbed postUrl={url} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {hasMorePosts && (
                <div className="mt-12 text-center">
                    <Button onClick={loadMorePosts} size="lg">
                        Load More Posts
                    </Button>
                </div>
            )}
        </div>
    );
};
