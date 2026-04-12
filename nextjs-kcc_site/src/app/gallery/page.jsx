import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { GALLERY_QUERY } from "@/sanity/queries";
import Gallery from "../components/sections/Gallery";
import Layout from "../components/layout/Layout";

const options = { next: { revalidate: 60 } };

export default async function GalleryPage() {
  const galleryImages = await client.fetch(GALLERY_QUERY, {}, options);

  const transformedImages = galleryImages.map((item) => ({
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