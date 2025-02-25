import { notFound } from "next/navigation";
import { sample_blog } from "@/constants/blogs";
import BackToArticlesButton from "@/components/Blog/BackToArticlesButton";
import BlogHeader from "@/components/Blog/BlogHeader";
import BlogAuthor from "@/components/Blog/BlogAuthor";
import BlogFeaturedImage from "@/components/Blog/BlogFeaturedImage";
import BlogContent from "@/components/Blog/BlogContent";
import BlogCTA from "@/components/Blog/BlogCTA";


// This function would get the blog post data
// Replace with your actual data fetching logic
async function getBlogPost(slug) {
    // In a real app, you would fetch data from an API or database
    return sample_blog.find(post => post.slug === slug);
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const post = await getBlogPost(params.slug);

    if (!post) {
        return {
            title: 'Blog Post Not Found',
            description: 'The requested blog post could not be found.'
        };
    }

    return {
        title: `${post.title} | Health Insights`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }) {
    const post = await getBlogPost(params.slug);

    if (!post) notFound();

    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            <BackToArticlesButton />
            <BlogHeader post={post} />
            <BlogAuthor author={post.author} />
            <BlogFeaturedImage title={post.title} coverImage={post.coverImage} />
            <BlogContent content={post.content} />
            <BlogCTA />
        </main>
    );
}

// Generate static params for all blog posts
// This is optional but recommended for performance
export async function generateStaticParams() {
    // In a real app, you would fetch all post slugs here
    return sample_blog.map((post) => ({
        slug: post.slug,
    }));
}