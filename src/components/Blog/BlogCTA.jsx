// /src/components/Blog/BlogCTA.jsx

import Link from "next/link";

const BlogCTA = () => {
    return (
        <section className="bg-green-50 border border-green-200 rounded-lg p-8 text-center mt-16">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
                Want to make healthier food choices?
            </h3>
            <p className="text-gray-700 mb-6">
                Download our ingredient scanning app today and get personalized insights.
            </p>
            <Link
                href="/download"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg px-6 py-3"
            >
                Download the App
            </Link>
        </section>
    );
}

export default BlogCTA;