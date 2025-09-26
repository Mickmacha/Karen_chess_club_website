"use client";
import { useState, useEffect } from 'react';
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

export function GalleryPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [featuredImages, setFeaturedImages] = useState([]);
  
  useEffect(() => {
    client.fetch(FEATURED_GALLERY_QUERY).then(setFeaturedImages);
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('gallery-preview');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Auto-rotate active image every 5 seconds
  useEffect(() => {
    if (featuredImages.length > 0) {
      const interval = setInterval(() => {
        setActiveImage(prev => (prev + 1) % featuredImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [featuredImages.length]);

  if (featuredImages.length === 0) return null;

  return (
    <section id="gallery-preview" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Chess Pieces */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl text-white/5 animate-float"
            style={{
              left: `${12 + (i * 11)}%`,
              top: `${8 + (i * 12)}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${12 + i}s`
            }}
          >
            {['♔', '♛', '♜', '♝', '♞', '♟', '♗', '♘'][i]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-orange-400 font-medium">Our Gallery</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Moments of{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 animate-text-shimmer">
                Excellence
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/50 to-amber-500/50 blur opacity-30 animate-pulse"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore moments from our tournaments, training sessions, and community events. 
            Every photo tells a story of strategic thinking and passionate play.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredImages.map((image, index) => (
            <Link 
              href="/gallery" 
              key={image._id} 
              className={`group transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveImage(index)}
            >
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-500">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={urlFor(image.image).width(400).height(300).url()}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <h3 className="text-xl font-bold mb-2 text-white">{image.title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{image.description}</p>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500/90 to-amber-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full capitalize border border-orange-400/30">
                      {image.category}
                    </span>
                  </div>

                  {/* Chess piece accent */}
                  <div className="absolute top-4 right-4 text-white/30 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:rotate-12">
                    ♛
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Image Highlight */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="text-4xl mr-4">📸</div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Featured: {featuredImages[activeImage]?.title}
                </h3>
                <p className="text-gray-400 capitalize">
                  {featuredImages[activeImage]?.category} • Latest Moments
                </p>
              </div>
            </div>
            
            {/* Image indicators */}
            <div className="flex justify-center space-x-2 mb-6">
              {featuredImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeImage ? 'bg-orange-400 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            {/* CTA Button */}
            <Link 
              href="/gallery"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View Full Gallery
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-25px) rotate(8deg); }
          66% { transform: translateY(15px) rotate(-8deg); }
        }
        
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}