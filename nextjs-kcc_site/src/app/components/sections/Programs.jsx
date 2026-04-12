"use client";

const programs = [
  {
    title: "Youth Program",
    level: "Ages 8-16",
    duration: "Ongoing",
    description: "Structured learning for young minds with weekly sessions and tournaments.",
    highlights: [
      "Age-appropriate coaching",
      "Tactics and puzzles",
      "Tournament readiness"
    ]
  },
  {
    title: "Beginner Foundation",
    level: "All ages",
    duration: "Flexible",
    description: "A guided path from the basics to confident, independent play.",
    highlights: [
      "Rules and openings",
      "Tactical fundamentals",
      "Weekly practice games"
    ]
  },
  {
    title: "Competitive Training",
    level: "Intermediate +",
    duration: "Seasonal",
    description: "Advanced preparation for players targeting competitive results.",
    highlights: [
      "Game analysis",
      "Endgame technique",
      "Coach feedback"
    ]
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-slate-300">
            Programs
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl font-semibold leading-[1.2] text-slate-100">
            Choose a program that matches your ambition.
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Every program is built around deliberate practice and confident
            competition. Pick the path that fits your current level and goals.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-100">{program.title}</h3>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-300">
                  {program.level}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400">{program.duration}</p>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                {program.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {program.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-400"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-6 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
