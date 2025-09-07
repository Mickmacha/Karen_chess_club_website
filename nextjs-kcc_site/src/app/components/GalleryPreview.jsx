// app/components/GalleryPreview.tsx - For Homepage
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import Link from 'next/link';
import Image from 'next/image';

const FEATURED_GALLERY_QUERY = `*[
  _type == "gallery"
  && featured == true
  && defined(image)
]|order(publishedAt desc)[0...6]{
  _id,
  title,
  description,
  category,
  image,
  "alt": image.alt,
  publishedAt
}`;

export async function GalleryPreview() {
  const featuredImages = await client.fetch(FEATURED_GALLERY_QUERY);

  if (featuredImages.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Latest Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore moments from our recent tournaments, training sessions, and events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredImages.map((image, index) => (
            <Link href="/gallery" key={image._id} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={urlFor(image.image).width(400).height(300).url()}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full capitalize">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/gallery" className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}