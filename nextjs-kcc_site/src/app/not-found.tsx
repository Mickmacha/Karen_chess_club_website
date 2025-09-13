// app/not-found.tsx
import Layout from './components/Layout'
import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout>
      <div className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-6xl text-orange-500 mb-6">♔</div>
          <h1 className="text-4xl font-bold text-black mb-4">404 - Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you&#39;re looking for doesn&#39;t exist.
          </p>
            <Link 
            href="/" 
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
            Return Home
            </Link>
        </div>
      </div>
    </Layout>
  )
}