
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <h1 className="mt-6 text-5xl font-extrabold text-gray-900">404</h1>
                <h2 className="text-2xl font-bold text-gray-600">Page Not Found</h2>
                <p className="mt-2 text-base text-gray-500">
                    Sorry, we could&apos;t find the page you&apos;re looking for.
                </p>
                <div className="mt-5">
                    <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
                        Go back home
                    </Link>
                </div>
            </div>
        </div>
    );
}
