import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-lg mb-8 text-center max-w-md">
        This is a placeholder contact page. You can add contact information or a form here.
      </p>
      <Link href="/" className="text-blue-400 hover:underline">
        &larr; Back to Home
      </Link>
    </div>
  );
} 