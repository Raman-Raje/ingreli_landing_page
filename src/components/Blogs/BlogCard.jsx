// /src/components/Blog/BlogCard.jsx
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ post }) => {
    return (
        <Link href={`/blog/${post.slug}`} className="group">
            <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full bg-gray-200">
                    {post.coverImage ? (
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                            <span>No Image</span>
                        </div>
                    )}
                </div>

                <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-green-600">{post.category}</span>
                        <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600">
                        {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <span className="text-sm font-medium text-green-600 group-hover:underline">
                            Read more
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}

export default BlogCard;