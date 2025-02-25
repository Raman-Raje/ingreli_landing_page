// /src/components/Blog/BlogContent.jsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogContent = ({ content }) => {
    return (
        <article className="prose prose-green lg:prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
    );
}

export default BlogContent;
