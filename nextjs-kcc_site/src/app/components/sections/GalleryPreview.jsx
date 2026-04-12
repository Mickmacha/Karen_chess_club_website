import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/image";

/**
 * @param {Object} props
 * @param {Array} props.images
 * @returns {JSX.Element|null}
 */
export function GalleryPreview({ images = [] }) {
  if (images.length === 0) return null;

  return (
    <section id="gallery-preview" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-slate-300">
              Gallery
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl font-semibold leading-[1.2] text-slate-100">
              Highlights from training, tournaments, and community events.
            </h2>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              A glimpse into the moments that shape our club. Explore the full
              gallery to see the stories behind every match.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            View full gallery
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.slice(0, 6).map((image) => (
            <Link
              key={image._id}
              href="/gallery"
              className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <div className="relative h-56">
                <Image
                  src={urlFor(image.image).width(520).height(400).url()}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-slate-400">
                  {image.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-100">
                  {image.title}
                </h3>
                {image.description && (
                  <p className="mt-2 text-sm text-slate-300 line-clamp-2">
                    {image.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
