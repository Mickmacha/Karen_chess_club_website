'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/image';

const TOURNAMENT_SECTIONS = [
  { label: 'All Sections', value: 'all' },
  { label: 'Open', value: 'open' },
  { label: 'Ladies', value: 'ladies' },
  { label: 'Junior (Boy)', value: 'junior_boy' },
  { label: 'Junior (Girl)', value: 'junior_girl' },
];

interface Tournament {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  date: string;
  time: string;
  location: string;
  section: string;
  format: string;
  maxParticipants: number;
  currentParticipants: number;
  entryFee: number;
  registrationDeadline: string;
  prizeFund?: string;
  registrationOpen: boolean;
  image: any;
}

export default function TournamentsContent({ tournaments = [] }: { tournaments: Tournament[] }) {
  const [selectedSection, setSelectedSection] = useState('all');

  const filteredTournaments = useMemo(() => {
    if (selectedSection === 'all') return tournaments;
    return tournaments.filter((tournament) => tournament.section === selectedSection);
  }, [tournaments, selectedSection]);

  const getAvailabilityPercentage = (current: number, max: number) => {
    return Math.round((current / max) * 100);
  };

  const isRegistrationClosed = (deadline: string) => {
    return new Date(deadline) < new Date();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.15] text-slate-100 mb-4">
            Tournament Calendar
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            Challenge yourself in our competitive tournaments. Register to play with chess enthusiasts of your level and compete for prizes.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-white/10 bg-slate-950 py-8 sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <p className="text-sm font-medium text-slate-400 mb-4">Filter by Section</p>
          <div className="flex flex-wrap gap-3">
            {TOURNAMENT_SECTIONS.map((section) => (
              <button
                key={section.value}
                onClick={() => setSelectedSection(section.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedSection === section.value
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/5 text-slate-300 border border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          {filteredTournaments.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-300 text-lg">No tournaments in this category at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredTournaments.map((tournament) => {
                const isFull = tournament.currentParticipants >= tournament.maxParticipants;
                const isDeadlinePassed = isRegistrationClosed(tournament.registrationDeadline);
                const canRegister = tournament.registrationOpen && !isFull && !isDeadlinePassed;
                const availability = getAvailabilityPercentage(tournament.currentParticipants, tournament.maxParticipants);

                return (
                  <div
                    key={tournament._id}
                    className="group rounded-3xl border border-white/10 overflow-hidden hover:border-orange-500/50 transition-all duration-300 bg-white/5 hover:bg-white/10 flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden bg-slate-900">
                      <Image
                        src={urlFor(tournament.image).width(520).height(400).url()}
                        alt={tournament.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col p-6">
                      {/* Date & Location */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block text-xs text-orange-300 font-medium">
                          {formatDate(tournament.date)} at {tournament.time}
                        </span>
                        <span className="text-xs text-slate-400">
                          {TOURNAMENT_SECTIONS.find((s) => s.value === tournament.section)?.label || tournament.section}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-2xl font-semibold text-slate-100 mb-2 leading-[1.2]">
                        {tournament.title}
                      </h3>

                      {/* Location */}
                      <p className="text-slate-300 text-sm mb-4">
                        📍 {tournament.location}
                      </p>

                      {/* Description */}
                      {tournament.description && (
                        <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
                          {tournament.description}
                        </p>
                      )}

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-4 py-4 border-y border-white/10">
                        <div>
                          <p className="text-xs text-slate-400 mb-1">Format</p>
                          <p className="text-sm font-medium text-slate-100">{tournament.format}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 mb-1">Entry Fee</p>
                          <p className="text-sm font-medium text-orange-400">KES {tournament.entryFee.toLocaleString()}</p>
                        </div>
                        {tournament.prizeFund && (
                          <div className="col-span-2">
                            <p className="text-xs text-slate-400 mb-1">Prize Fund</p>
                            <p className="text-sm text-slate-200">{tournament.prizeFund}</p>
                          </div>
                        )}
                      </div>

                      {/* Availability */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-slate-400">
                            Participants: {tournament.currentParticipants}/{tournament.maxParticipants}
                          </p>
                          <span className={`text-xs font-medium ${
                            availability > 80 ? 'text-orange-400' : availability > 50 ? 'text-yellow-400' : 'text-green-400'
                          }`}>
                            {availability}% full
                          </span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-300 ${
                              availability > 80 ? 'bg-orange-500' : availability > 50 ? 'bg-amber-500' : 'bg-emerald-500'
                            }`}
                            style={{ width: `${availability}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Spacer */}
                      <div className="flex-1" />

                      {/* Registration Deadline */}
                      <p className="text-xs text-slate-400 mb-4 italic">
                        Registration deadline: {formatDate(tournament.registrationDeadline)}
                      </p>

                      {/* Registration Button */}
                      <Link
                        href={`/contact?tournament=${encodeURIComponent(tournament.title)}`}
                        className={`block text-center px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                          canRegister
                            ? 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20'
                            : isFull
                            ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                            : isDeadlinePassed
                            ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                            : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        {!tournament.registrationOpen
                          ? 'Registration Closed'
                          : isDeadlinePassed
                          ? 'Deadline Passed'
                          : isFull
                          ? 'Tournament Full'
                          : 'Register Now'}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-100 mb-2">How to Register</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Click "Register Now" on any tournament to express your interest. Complete the form and confirm your participation via email or WhatsApp.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-100 mb-2">Payment & Fees</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Entry fees are confirmed upon successful registration. We accept M-Pesa and bank transfers. Details sent upon confirmation.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-100 mb-2">Questions?</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Contact our tournament coordinator via the form below or WhatsApp. We're here to help with participant inquiries and rule clarifications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
