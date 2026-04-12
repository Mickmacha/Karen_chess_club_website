"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Gallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Sample data structure - replace with your Sanity data
  const sampleImages = [
    // {
    //   _id: '1',
    //   title: 'Championship Tournament 2024',
    //   alt: 'Players competing in championship',
    //   category: 'tournaments',
    //   imageUrl: '/api/placeholder/400/300', // Replace with urlFor(image) from Sanity
    //   description: 'Intense moments from our annual championship tournament'
    // },
    // {
    //   _id: '2',
    //   title: 'Youth Training Session',
    //   alt: 'Kids learning chess',
    //   category: 'training',
    //   imageUrl: '/api/placeholder/400/300',
    //   description: 'Young minds developing strategic thinking skills'
    // },
    // {
    //   _id: '3',
    //   title: 'Club Meeting',
    //   alt: 'Members discussing strategies',
    //   category: 'events',
    //   imageUrl: '/api/placeholder/400/300',
    //   description: 'Weekly club meeting and strategy discussion'
    // },
    // {
    //   _id: '4',
    //   title: 'Beginner Workshop',
    //   alt: 'Teaching basic chess moves',
    //   category: 'training',
    //   imageUrl: '/api/placeholder/400/300',
    //   description: 'Introduction to chess fundamentals workshop'
    // },
    // {
    //   _id: '5',
    //   title: 'Victory Celebration',
    //   alt: 'Winners celebrating',
    //   category: 'events',
    //   imageUrl: '/api/placeholder/400/300',
    //   description: 'Celebrating our regional tournament victory'
    // },
    // {
    //   _id: '6',
    //   title: 'Simultaneous Exhibition',
    //   alt: 'Master playing multiple games',
    //   category: 'events',
    //   imageUrl: '/api/placeholder/400/300',
    //   description: 'Chess master playing 20 games simultaneously'
    // }
  ];

  const galleryImages = images.length > 0 ? images : sampleImages;
  
  const categories = [
    { id: 'all', label: 'All Photos', icon: '📸' },
    { id: 'tournaments', label: 'Tournaments', icon: '🏆' },
    { id: 'training', label: 'Training', icon: '🎓' },
    { id: 'events', label: 'Events', icon: '🎉' }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section 
      ref={sectionRef}
      id="gallery"
      className="py-35 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 mb-4">
            <span className="text-orange-600 font-medium">Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Moments & Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore highlights from our tournaments, training sessions, and community events
          </p>
        </div>

        {/* Filter Categories */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white text-gray-600 hover:text-orange-500 hover:bg-orange-50 border border-gray-200 hover:border-orange-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image._id}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:scale-105 cursor-pointer ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openModal(image)}
              onMouseEnter={() => setHoveredImage(image._id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                
                {/* Placeholder for Sanity Image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                  <div className="text-6xl text-gray-400">📸</div>
                </div>
                
                {/* Replace above div with this when using Sanity:
                <Image
                  src={urlFor(image.asset).width(400).height(300).url()}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                */}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-end">
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {image.description}
                    </p>
                  </div>
                </div>

                {/* View Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 z-30">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-200">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-30">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {categories.find(cat => cat.id === image.category)?.label || 'Photo'}
                  </span>
                </div>
              </div>

              {/* Magic Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl opacity-0 transition-opacity duration-500 ${
                hoveredImage === image._id ? 'opacity-100' : ''
              }`}></div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredImages.length > 6 && (
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25">
              Load More Photos
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-60"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform animate-slideUp">
              <div className="relative aspect-[16/10]">
                {/* Placeholder for Modal Image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-8xl text-gray-400">📸</div>
                </div>
                
                {/* Replace above div with this when using Sanity:
                <Image
                  src={urlFor(selectedImage.asset).width(800).height(500).url()}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                />
                */}
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}