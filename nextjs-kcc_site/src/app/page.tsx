// app/page.tsx - Updated homepage with Sanity integration
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Contact from './components/Contact'

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...6]{_id, title, slug, publishedAt, excerpt}`;

const options = { next: { revalidate: 30 } };

// Blog Preview Section Component
function BlogPreview({ posts }) {
  if (posts.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with chess strategies, club news, and community highlights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 6).map((post) => (
            <Link href={`/${post.slug.current}`} key={post._id} className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-orange-500 text-2xl mb-3">📰</div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                {post.excerpt && (
                  <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
                )}
                <div className="mt-4 text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                  Read More →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
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
      <BlogPreview posts={posts} />
      <Contact />
    </Layout>
  );
}