'use client';

import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/image';

interface Tournament {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  time: string;
  location: string;
  section: string;
  maxParticipants: number;
  currentParticipants: number;
  entryFee: number;
  registrationOpen: boolean;
  registrationUrl?: string;
  image: any;
}

const TOURNAMENT_SECTIONS: { [key: string]: string } = {
  open: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  ladies: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  junior_boy: 'bg-green-500/20 text-green-300 border-green-500/30',
  junior_girl: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
};

const SECTION_LABELS: { [key: string]: string } = {
  open: 'Open',
  ladies: 'Ladies',
  junior_boy: 'Junior (Boy)',
  junior_girl: 'Junior (Girl)',
};

export default function TournamentBooking({ tournaments = [] }: { tournaments: Tournament[] }) {
  if (tournaments.length === 0) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getAvailabilityPercentage = (current: number, max: number) => {
    return Math.round((current / max) * 100);
  };

  return (
    <section id="tournaments" className="py-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs text-orange-300">
              Upcoming Tournaments
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl font-semibold leading-[1.2] text-slate-100">
              Test your skills, claim your crown.
            </h2>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Join our competitive tournament series for all skill levels. Register now and compete with the best players in our community.
            </p>
          </div>

          <Link
            href="/tournaments"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            View all tournaments
          </Link>
        </div>

        {/* Tournament Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tournaments.slice(0, 4).map((tournament) => {
            const availability = getAvailabilityPercentage(tournament.currentParticipants, tournament.maxParticipants);
            const registrationHref = tournament.registrationUrl || `/contact?tournament=${encodeURIComponent(tournament.title)}`;
            const usesExternalRegistration = Boolean(tournament.registrationUrl);
            const cardClassName = 'group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:bg-white/10';

            const cardContent = (
              <div className="flex h-full">
                {/* Image - smaller on this preview */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 overflow-hidden bg-slate-900">
                  <Image
                    src={urlFor(tournament.image).width(200).height(200).url()}
                    alt={tournament.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-4 sm:p-5">
                  {/* Date and Section */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-medium text-orange-300">
                      {formatDate(tournament.date)}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded border ${TOURNAMENT_SECTIONS[tournament.section] || TOURNAMENT_SECTIONS.open}`}>
                      {SECTION_LABELS[tournament.section] || tournament.section}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-base sm:text-lg font-semibold text-slate-100 mb-1 line-clamp-2 group-hover:text-orange-300 transition-colors">
                    {tournament.title}
                  </h3>

                  {/* Location */}
                  <p className="text-xs text-slate-400 mb-2">📍 {tournament.location}</p>

                  {/* Fee and Status */}
                  <div className="flex items-center justify-between mt-auto text-xs">
                    <span className="text-slate-300 font-semibold">KES {tournament.entryFee.toLocaleString()}</span>
                    <span className={`${availability > 80 ? 'text-orange-400' : availability > 50 ? 'text-yellow-400' : 'text-green-400'}`}>
                      {availability}% full
                    </span>
                  </div>

                  {/* Availability Bar */}
                  <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        availability > 80 ? 'bg-orange-500' : availability > 50 ? 'bg-amber-500' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${availability}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );

            return (
              usesExternalRegistration ? (
                <a
                  key={tournament._id}
                  href={registrationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName}
                >
                  {cardContent}
                </a>
              ) : (
                <Link
                  key={tournament._id}
                  href={registrationHref}
                  className={cardClassName}
                >
                  {cardContent}
                </Link>
              )
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">
            Don't see the tournament you're looking for?
          </p>
          <Link
            href="/tournaments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/20 transition-all"
          >
            Browse all tournaments →
          </Link>
        </div>
      </div>
    </section>
  );
}
