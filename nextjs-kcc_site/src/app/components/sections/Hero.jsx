"use client";

export default function Hero() {
  const puzzleFen = "5nk1/pp1r1pp1/4p1np/3pP2Q/6RP/3B1R2/q4PPK/8 w - - 2 28";

  const fenToPieceArray = (fen) => {
    const pieceMap = {
      r: "♜",
      n: "♞",
      b: "♝",
      q: "♛",
      k: "♚",
      p: "♟",
      R: "♖",
      N: "♘",
      B: "♗",
      Q: "♕",
      K: "♔",
      P: "♙"
    };
    let board = [];
    const fenParts = fen.split(" ")[0];

    for (const char of fenParts) {
      if (char === "/") {
        continue;
      } else if (/\d/.test(char)) {
        board = board.concat(Array(parseInt(char, 10)).fill(""));
      } else {
        board.push(pieceMap[char]);
      }
    }
    return board;
  };

  const getFenChar = (fen, index) => {
    let count = 0;
    const fenParts = fen.split(" ")[0];
    for (const char of fenParts) {
      if (char === "/") continue;
      if (/\d/.test(char)) {
        count += parseInt(char, 10);
        if (index < count) return null;
      } else {
        if (count === index) return char;
        count++;
      }
    }
    return null;
  };

  const puzzlePieces = fenToPieceArray(puzzleFen);
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-32 h-80 w-80 rounded-full bg-orange-500/20 blur-[140px]"></div>
        <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[140px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs text-slate-300">
              Strategic excellence in Karen, Nairobi
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.15] text-slate-100">
                Build mastery through deliberate play, guided coaching, and a
                community that thinks ahead.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Karen Chess Club blends competitive training, community events, and
                growth-focused coaching for every level. Join weekly sessions,
                tournaments, and mentorship designed to sharpen your strategy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg shadow-orange-500/25 hover:from-orange-400 hover:to-amber-400 transition"
              >
                Join the Club
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition"
              >
                Explore Programs
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {[
                { value: "50+", label: "Active members" },
                { value: "5 yrs", label: "Club legacy" },
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

          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-blue-500/10 blur-2xl"></div>
            <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-amber-100 to-amber-50 p-4">
                <div className="grid grid-cols-8 gap-1">
                  {Array.from({ length: 64 }, (_, i) => {
                    const isEven = Math.floor(i / 8) % 2 === i % 2;
                    const piece = puzzlePieces[i];
                    const fenChar = getFenChar(puzzleFen, i);
                    let pieceColorClass = "";

                    if (piece) {
                      if (fenChar && fenChar === fenChar.toLowerCase() && fenChar !== fenChar.toUpperCase()) {
                        pieceColorClass = "text-gray-900";
                      } else {
                        pieceColorClass = "text-stone-900";
                      }
                    }

                    return (
                      <div
                        key={i}
                        className={`aspect-square rounded-sm flex items-center justify-center ${
                          isEven ? "bg-amber-100" : "bg-amber-800"
                        }`}
                      >
                        {piece && (
                          <span className={`${pieceColorClass} text-2xl sm:text-3xl leading-none`}>
                            {piece}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
