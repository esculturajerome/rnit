// app/contact/success/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react'; // Using a success icon

const ContactSuccessPage = () => {
    return (
        <div className="wrapper flex flex-col items-center justify-center min-h-[60vh] text-center py-10">
            <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
            <h1 className="text-3xl font-bold text-primary mb-4">Message Sent Successfully!</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.
            </p>
            <Button variant='default' asChild size="lg">
                <Link href="/">Return to Homepage</Link>
            </Button>
        </div>
    );
};

export default ContactSuccessPage;
