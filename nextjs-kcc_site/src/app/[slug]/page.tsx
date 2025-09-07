// app/[slug]/page.tsx - Fixed version with error handling
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { notFound } from "next/navigation";
import Layout from "../components/Layout";

const POST_QUERY = `*[
  _type == "post" &&
  slug.current == $slug
][0]{
  _id,
  title,
  slug,
  publishedAt,
  body,
  image,
  excerpt
}`;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await client.fetch<SanityDocument>(
    POST_QUERY, 
    { slug: resolvedParams.slug }, 
    options
  );

  // If no post found, return 404
  if (!post) {
    notFound();
  }

  // Safely handle image URL
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <Layout>
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {post.title}
            </h1>
            
            {post.publishedAt && (
              <div className="flex items-center text-gray-600 mb-8">
                <div className="text-orange-500 text-xl mr-3">📅</div>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            )}
            
            {post.excerpt && (
              <p className="text-xl text-gray-700 leading-relaxed mb-8 border-l-4 border-orange-500 pl-6">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Featured Image */}
          {postImageUrl && (
            <div className="mb-12">
              <img
                src={postImageUrl}
                alt={post.title || "Post image"}
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.body ? (
              // If you're using Portable Text, you'll need a renderer here
              // For now, assuming it's a simple text field
              <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                {typeof post.body === 'string' ? post.body : JSON.stringify(post.body)}
              </div>
            ) : (
              <p className="text-gray-600 italic">No content available.</p>
            )}
          </div>

          {/* Back to Blog */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <a 
              href="/blog" 
              className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              ← Back to Blog
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: resolvedParams.slug },
    options
  );

  return {
    title: post?.title || "Post Not Found",
    description: post?.excerpt || "Chess club blog post",
  };
}