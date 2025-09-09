import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import { GalleryPreview } from './components/GalleryPreview'
import Contact from './components/Contact'

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...6]{_id, title, slug, publishedAt, excerpt}`;

const options = { next: { revalidate: 30 } };

// Blog Preview Section Component
function BlogPreview({ posts }: { posts: SanityDocument[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
            <span className="text-blue-600 font-medium">Latest Posts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Chess Insights & News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with chess strategies, club news, and community highlights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 6).map((post, index) => (
            <Link href={`/${post.slug.current}`} key={post._id} className="group">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-blue-200">
                <div className="text-blue-500 text-3xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">📰</div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                {post.excerpt && (
                  <p className="text-gray-700 line-clamp-3 mb-4">{post.excerpt}</p>
                )}
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  Read More 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <Layout>
      <Hero />
      <About />
      <Programs />
      <GalleryPreview />
      <BlogPreview posts={posts} />
      <Contact />
    </Layout>
  );
}

