// components/title-row.tsx
import React from 'react'
import { Badge } from './ui/badge'
import { cn } from '@/lib/utils' // Import cn

interface TitleRowProps {
    badge?: string
    title?: string
    subText?: string
    actionElement?: React.ReactNode; // Add prop for the action element
    className?: string; // Allow passing additional classes
}

const TitleRow: React.FC<TitleRowProps> = ({ badge, title, subText, actionElement, className }) => {
    if (!badge && !title && !subText && !actionElement) return null

    return (
        // Use flex row, justify-between, and align items
        <div className={cn(
            "flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8",
            className // Merge any passed classes
        )}>
            {/* Left side content (Badge, Title, Subtext) */}
            <div className="flex gap-4 flex-col items-start">
                {badge && (
                    <div>
                        <Badge>{badge}</Badge>
                    </div>
                )}
                {(title || subText) && (
                    <div className="flex gap-2 flex-col">
                        {title && (
                            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                                {title}
                            </h2>
                        )}
                        {subText && (
                            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                                {subText}
                            </p>
                        )}
                    </div>
                )}
            </div>

            {/* Right side action element */}
            {actionElement && (
                <div className="mt-4 md:mt-0 md:ml-auto shrink-0"> {/* Add shrink-0 */}
                    {actionElement}
                </div>
            )}
        </div>
    )
}

export default TitleRow
