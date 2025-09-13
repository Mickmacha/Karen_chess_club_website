import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Layout from '../app/components/Layout';
/*
  The import path for Layout should be updated to reflect its actual location.
  Since Layout exists in `src/app/components`, use the correct relative path:
*/
const ALL_POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc){_id, title, slug, publishedAt, excerpt}`;

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(ALL_POSTS_QUERY, {}, { next: { revalidate: 30 } });

  return (
    <Layout>
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Club Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights, strategies, and stories from the Karen Chess Club community
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl text-gray-300 mb-4">♔</div>
              <h2 className="text-2xl font-bold text-black mb-4">No Posts Yet</h2>
              <p className="text-gray-600">Check back soon for chess insights and club updates!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link href={`/${post.slug.current}`} key={post._id} className="group block">
                  <article className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-2xl font-bold text-black group-hover:text-orange-500 transition-colors flex-1">
                        {post.title}
                      </h2>
                      <div className="text-orange-500 text-2xl ml-4">♟</div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    
                    {post.excerpt && (
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    )}
                    
                    <div className="text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                      Read Article →
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}