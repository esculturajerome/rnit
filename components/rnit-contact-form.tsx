'use client'

import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react' // Import useState
import { Icons } from '@/components/icons' // Assuming you have a spinner icon

const ContactForm: React.FC = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true) // Start loading
        setError(null) // Clear previous errors

        const myForm = event.currentTarget
        const formData = new FormData(myForm)

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                // URLSearchParams constructor can handle FormData directly
                body: new URLSearchParams(formData as any).toString(),
            })

            if (!response.ok) {
                // Handle potential HTTP errors if Netlify returns them
                throw new Error(`Submission failed with status: ${response.status}`)
            }

            // If submission is successful, redirect
            router.push('/') // Or your success page path

        } catch (error) {
            console.error('Form submission error:', error)
            setError('Sorry, there was an issue submitting your message. Please try again later.')
            setIsLoading(false) // Stop loading on error
        }
        // No need to explicitly stop loading on success due to navigation
    }

    // Keep the phone number validation as is, it's a reasonable approach
    const handleNumberKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Home', 'End']
        // Allow digits 0-9
        const isDigit = /[0-9]/.test(event.key)
        // Allow specific control keys
        const isAllowedKey = allowedKeys.includes(event.key)
        // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X (Cmd on Mac)
        const isCtrlCmd = event.ctrlKey || event.metaKey;
        const isCopyPasteSelect = isCtrlCmd && ['a', 'c', 'v', 'x'].includes(event.key.toLowerCase());

        if (!isDigit && !isAllowedKey && !isCopyPasteSelect) {
            event.preventDefault()
        }
    }


    return (
        // Ensure Netlify can find the form name correctly
        <form
            name="RNITContact" // This name must match the hidden input value
            method="post"
            // data-netlify="true"
            // data-netlify-honeypot="bot-field" // Optional: Add honeypot for spam
            onSubmit={handleSubmit}
            className="space-y-4"
        >
            {/* Hidden input for Netlify */}
            <input type="hidden" name="form-name" value="RNITContact" />
            {/* Optional: Honeypot field */}
            <p className="hidden">
                <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
            </p>
            {/* Subject line for emails from Netlify */}
            <input type="hidden" name="subject" value="RNIT Website Inquiry: %{formName}" />

            <div className="space-y-2">
                <Label htmlFor="username">Name*</Label>
                <Input
                    id="username"
                    name="Name" // Ensure 'name' attribute is present for form data
                    placeholder="Juan Dela Cruz"
                    required
                    disabled={isLoading} // Disable when loading
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="number">Phone Number</Label>
                <Input
                    id="number"
                    name="Number" // Ensure 'name' attribute is present
                    type="tel" // Use type="tel" for semantic meaning
                    placeholder="09+++++++++"
                    maxLength={11}
                    onKeyDown={handleNumberKeyDown}
                    disabled={isLoading} // Disable when loading
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                    id="email"
                    type="email"
                    name="Email" // Ensure 'name' attribute is present
                    placeholder="juan.delacruz@example.com"
                    disabled={isLoading} // Disable when loading
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message*</Label>
                <Textarea
                    id="message"
                    name="Message" // Ensure 'name' attribute is present
                    placeholder="Send us a message"
                    required
                    className="h-32"
                    disabled={isLoading} // Disable when loading
                />
            </div>

            {/* Display error message if submission fails */}
            {error && (
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            )}

            <Button type="submit" variant='secondary' className="" disabled={isLoading}>
                {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                {isLoading ? 'Submitting...' : 'Submit'}
            </Button>
        </form>
    )
}

export default ContactForm
