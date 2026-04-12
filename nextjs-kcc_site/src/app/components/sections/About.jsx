"use client";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-slate-300">
              About the club
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-[1.2] text-slate-100">
              A focused community where strategy becomes second nature.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Karen Chess Club is a training and community hub for players who want
              to think deeper and play stronger. We pair structured coaching with
              friendly competition, creating space for every member to grow.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              From junior learners to tournament-ready adults, our programs combine
              fundamentals, tactics, and real-game experience in a supportive
              environment.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {[
                { value: "50+", label: "Active members" },
                { value: "5 yrs", label: "Growing strong" },
                { value: "12", label: "Trophies earned" }
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-orange-300">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs text-slate-400">
                Our mission
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-100 leading-[1.25]">
                Build confidence, discipline, and strategic excellence through chess.
              </h3>
              <p className="mt-4 text-slate-300 leading-relaxed">
                We nurture analytical thinking and strong character by helping members
                apply chess principles to real-life decision making.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Competitive focus",
                  description: "Regular tournaments and match analysis sessions."
                },
                {
                  title: "Guided learning",
                  description: "Structured coaching for all skill levels."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"
                >
                  <h4 className="text-lg font-semibold text-slate-100">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
