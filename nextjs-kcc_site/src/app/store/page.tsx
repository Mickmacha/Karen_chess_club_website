import { client } from '@/sanity/client';
import { ALL_PRODUCTS_QUERY } from '@/sanity/queries';
import Layout from '@/app/components/layout/Layout';
import StoreContent from '@/app/components/sections/StoreContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Store | Karen Chess Club',
  description: 'Browse and purchase chess merchandise, training materials, and exclusive club apparel from Karen Chess Club.',
};

const revalidate = 3600; // Revalidate every hour

export default async function StorePage() {
  const products = await client.fetch(ALL_PRODUCTS_QUERY, {}, { next: { revalidate } });

  return (
    <Layout>
      <StoreContent products={products} />
    </Layout>
  );
}
