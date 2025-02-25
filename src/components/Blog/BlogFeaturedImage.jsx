// /src/components/Blog/BlogFeaturedImage.jsx
import Image from "next/image";

const BlogFeaturedImage = ({ title, coverImage }) => {
    return (
        <div className="relative w-full aspect-video bg-gray-200 rounded-lg mb-12 flex items-center justify-center text-gray-500">
            {coverImage ? (
                <span>Featured Image: {title}</span>

            ) : (
                <span>No Image Available</span>
            )}
            <Image
                src={coverImage}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>
    );
}
export default BlogFeaturedImage;