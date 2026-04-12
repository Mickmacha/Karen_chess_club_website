import { client } from '@/sanity/client';
import { ALL_TOURNAMENTS_QUERY } from '@/sanity/queries';
import Layout from '@/app/components/layout/Layout';
import TournamentsContent from '@/app/components/sections/TournamentsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tournaments | Karen Chess Club',
  description: 'Browse and register for upcoming chess tournaments. Choose from beginner to advanced levels and compete with players from our community.',
};

const revalidate = 3600; // Revalidate every hour

export default async function TournamentsPage() {
  const tournaments = await client.fetch(ALL_TOURNAMENTS_QUERY, {}, { next: { revalidate } });

  return (
    <Layout>
      <TournamentsContent tournaments={tournaments} />
    </Layout>
  );
}
