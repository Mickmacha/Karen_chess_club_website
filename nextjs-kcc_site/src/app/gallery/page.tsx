import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import Gallery from '../components/Gallery';
import Layout from '../components/Layout';

const GALLERY_QUERY = `*[
  _type == "gallery"
  && defined(image)
]|order(publishedAt desc){
  _id,
  title,
  description,
  category,
  image,
  "alt": image.alt,
  "caption": image.caption,
  featured,
  tags,
  publishedAt
}`;

const options = { next: { revalidate: 60 } };

export default async function GalleryPage() {
  const galleryImages = await client.fetch(GALLERY_QUERY, {}, options);

  // Transform Sanity data to match Gallery component expectations
  const transformedImages = galleryImages.map(item => ({
    _id: item._id,
    title: item.title,
    alt: item.alt || item.title,
    category: item.category,
    imageUrl: urlFor(item.image).url(),
    description: item.description,
    caption: item.caption,
    featured: item.featured,
    tags: item.tags || [],
    publishedAt: item.publishedAt
  }));

  return (
    <Layout>
      <Gallery images={transformedImages} />
    </Layout>
  );
}

