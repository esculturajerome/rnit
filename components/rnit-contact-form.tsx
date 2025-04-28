'use client'

import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import React from 'react'

const ContactForm: React.FC = () => {
    const router = useRouter()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const myForm = event.currentTarget
        const formData = new FormData(myForm)

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData as any).toString(),
        })
            .then(() => router.push('/success'))
            .catch((error) => alert(error))
    }

    const handleNumberKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete']

        if (!/[0-9]/.test(event.key) && !allowedKeys.includes(event.key)) {
            event.preventDefault()
        }
    }


    return (
        <form
            data-netlify="true"
            method="post"
            name="RNITContact"
            onSubmit={handleSubmit}
            className="space-y-4"
        >
            <input type="hidden" name="form-name" value="RNITContact" />
            <input type="hidden" name="subject" value="RNIT Website Inquiry" />

            <div className="space-y-2">
                <Label htmlFor="username">Name*</Label>
                <Input
                    id="username"
                    name="Name"
                    placeholder="Juan Dela Cruz"
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="number">Phone Number</Label>
                <Input
                    id="number"
                    name="Number"
                    placeholder="09+++++++++"
                    maxLength={11}
                    onKeyDown={handleNumberKeyDown}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                    id="email"
                    type="email"
                    name="Email"
                    placeholder="juan.delacruz@example.com"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message*</Label>
                <Textarea
                    id="message"
                    name="Message"
                    placeholder="Send us a message"
                    required
                    className="h-32"
                />
            </div>

            <Button type="submit" className="w-full">
                Submit
            </Button>
        </form>
    )
}

export default ContactForm
