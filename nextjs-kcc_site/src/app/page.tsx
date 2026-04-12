import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { FEATURED_GALLERY_QUERY, POSTS_PREVIEW_QUERY } from "@/sanity/queries";

import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Programs from "./components/sections/Programs";
import { GalleryPreview } from "./components/sections/GalleryPreview";
import Contact from "./components/sections/Contact";

const options = { next: { revalidate: 30 } };

// Blog Preview Section Component
function BlogPreview({ posts }: { posts: SanityDocument[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-slate-300">
              Blog
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl font-semibold leading-[1.2] text-slate-100">
              Insights, strategies, and club highlights.
            </h2>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Stay updated with our latest articles, tactical breakdowns, and
              community stories.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            View all posts
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post) => (
            <Link
              href={`/${post.slug.current}`}
              key={post._id}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>News</span>
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                  })}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-orange-300 transition-colors">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="mt-3 text-sm text-slate-300 line-clamp-3">
                  {post.excerpt}
                </p>
              )}
              <div className="mt-6 text-sm font-semibold text-orange-300">
                Read article →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_PREVIEW_QUERY, {}, options);
  const featuredImages = await client.fetch<SanityDocument[]>(
    FEATURED_GALLERY_QUERY,
    {},
    options
  );

  return (
    <Layout>
      <Hero />
      <About />
      <Programs />
      <GalleryPreview images={featuredImages} />
      <BlogPreview posts={posts} />
      <Contact />
    </Layout>
  );
}

