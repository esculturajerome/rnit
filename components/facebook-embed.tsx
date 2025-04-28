// components/facebook-embed.tsx
'use client'; // Required for useEffect and window interaction

import React, { useEffect, useState } from 'react';
import Script from 'next/script';

interface FacebookEmbedProps {
    postUrl: string; // The full URL of the Facebook post
    // We remove the width prop as we'll use data-adapt-container-width
}

// Define FB type for window augmentation
declare global {
    interface Window {
        FB?: any;
        fbAsyncInit?: () => void;
    }
}

export const FacebookEmbed: React.FC<FacebookEmbedProps> = ({ postUrl }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        const parseFacebookXFBML = () => {
            if (window.FB && window.FB.XFBML) {
                console.log('Parsing Facebook XFBML...');
                window.FB.XFBML.parse();
            } else {
                console.log('FB SDK or XFBML module not ready for parsing.');
            }
        };

        if (window.FB) {
            console.log('FB SDK already loaded, parsing.');
            parseFacebookXFBML();
        } else {
            console.log('FB SDK not loaded, setting up fbAsyncInit.');
            if (!window.fbAsyncInit) {
                window.fbAsyncInit = function () {
                    console.log('fbAsyncInit called.');
                    window.FB.init({
                        xfbml: true,
                        version: 'v19.0'
                    });
                    console.log('FB.init completed.');
                    parseFacebookXFBML();
                };
            }
        }

    }, [postUrl, isClient]);

    return (
        <>
            {/* The div where the Facebook post will be rendered */}
            <div
                key={postUrl} // Force re-render on URL change
                className="fb-post"
                data-href={postUrl}
                // Use data-adapt-container-width instead of data-width
                data-adapt-container-width="true"
                data-show-text="true" // Customize options as needed
                style={{ minHeight: '200px', width: '100%' }} // Ensure div itself takes full width
            >
                {/* Fallback content while loading */}
                <blockquote cite={postUrl} className="fb-xfbml-parse-ignore">
                    <a href={postUrl}>Loading Facebook post...</a>
                </blockquote>
            </div>

            {/* Load the Facebook SDK script conditionally */}
            {isClient && (
                <Script
                    id="facebook-jssdk"
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() => {
                        console.log("Facebook SDK script loaded via next/script.");
                    }}
                    onError={(e) => {
                        console.error("Failed to load Facebook SDK script", e);
                    }}
                />
            )}
        </>
    );
};
