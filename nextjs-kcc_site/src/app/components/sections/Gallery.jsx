"use client";
import Image from "next/image";
import { useMemo, useState } from "react";

const categoryLabels = {
  all: "All",
  tournaments: "Tournaments",
  training: "Training",
  events: "Events",
  community: "Community"
};

export default function Gallery({ images = [] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return images;
    return images.filter((image) => image.category === activeCategory);
  }, [activeCategory, images]);

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-slate-300">
              Gallery
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl font-semibold leading-[1.2] text-slate-100">
              Stories from the chessboard.
            </h2>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Browse our tournaments, training sessions, and community gatherings.
              Each moment captures the intensity and joy of the game.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeCategory === key
                  ? "bg-white text-slate-900"
                  : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image) => (
            <div
              key={image._id}
              className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <div className="relative h-56">
                <Image
                  src={image.imageUrl}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-slate-400">
                  {categoryLabels[image.category] ?? "Gallery"}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-100">
                  {image.title}
                </h3>
                {image.caption && (
                  <p className="mt-2 text-sm text-slate-300 line-clamp-2">
                    {image.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
