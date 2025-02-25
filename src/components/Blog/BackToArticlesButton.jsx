// /src/components/Blog/BackToArticlesButton.jsx

import Link from "next/link";

const BackToArticlesButton = () => {
    return (
        <Link
            href="/blog"
            className="inline-flex items-center mb-8 text-sm font-medium text-gray-600 hover:text-green-600"
        >
            ← Back to Articles
        </Link>
    );
}

export default BackToArticlesButton;