// /src/app/blog/page.js

"use client";

import Head from "next/head";
import { useState } from "react";
import { BLOG_POSTS } from "@/constants/blogs";
import BlogHeader from "@/components/Blogs/BlogHeader";
import CategoryFilter from "@/components/Blogs/CategoryFilter";
import BlogGrid from "@/components/Blogs/BlogGrid";
import NoResultsMessage from "@/components/Blogs/NoResultsMessage";
import BackToHomeButton from "@/components/Blogs/BackToHomeButton";

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Health Insights | Our Blog</title>
        <meta
          name="description"
          content="Explore our latest articles on nutrition, health, and making informed food choices."
        />
      </Head>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <BackToHomeButton /> {/* 👈 Added here */}
        <BlogHeader />
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        {filteredBlogs.length > 0 ? (
          <BlogGrid blogs={filteredBlogs} />
        ) : (
          <NoResultsMessage />
        )}
      </main>
    </>
  );
}
export default BlogsPage;

