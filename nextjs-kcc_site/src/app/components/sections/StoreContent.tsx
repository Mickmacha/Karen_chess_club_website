'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/image';

const PRODUCT_CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Boards & Sets', value: 'boards' },
  { label: 'Apparel', value: 'apparel' },
  { label: 'Books & Media', value: 'books' },
  { label: 'Training Tools', value: 'tools' },
  { label: 'Merchandise', value: 'merchandise' },
];

export default function StoreContent({ products = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.15] text-slate-100 mb-4">
            Chess Club Store
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            Explore our curated selection of chess merchandise, training materials, and exclusive club apparel.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-white/10 bg-slate-950 py-8 sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <p className="text-sm font-medium text-slate-400 mb-4">Filter by Category</p>
          <div className="flex flex-wrap gap-3">
            {PRODUCT_CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/5 text-slate-300 border border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-300 text-lg">No products in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="group rounded-3xl border border-white/10 overflow-hidden hover:border-orange-500/50 transition-all duration-300 bg-white/5 hover:bg-white/10 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-slate-900">
                    <Image
                      src={urlFor(product.image).width(520).height(400).url()}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-semibold">Out of Stock</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col p-6">
                    {/* Category Badge */}
                    <span className="inline-block text-xs text-orange-300 font-medium mb-3 w-fit">
                      {PRODUCT_CATEGORIES.find((c) => c.value === product.category)?.label || product.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-100 mb-2 leading-[1.2] line-clamp-2">
                      {product.title}
                    </h3>

                    {/* Description */}
                    {product.description && (
                      <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
                        {product.description}
                      </p>
                    )}

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Price and CTA */}
                    <div className="flex items-end justify-between gap-4">
                      <div className="text-2xl font-bold text-orange-400">
                        KES {product.price.toLocaleString()}
                      </div>
                      <Link
                        href={`/contact?product=${encodeURIComponent(product.title)}`}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                          product.inStock
                            ? 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20'
                            : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        {product.inStock ? 'Inquire Now' : 'Coming Soon'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-100 mb-2">How to Purchase</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Click "Inquire Now" on any product to contact us directly. We'll help you with pricing, availability, and delivery details.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-100 mb-2">Shipping & Delivery</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We offer delivery within Nairobi and nationwide shipping. Contact us for specific shipping costs to your location.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-100 mb-2">Questions?</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Reach out via our contact form or WhatsApp. Our team is here to assist with any product inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
