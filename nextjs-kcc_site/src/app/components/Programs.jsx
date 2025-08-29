// components/Programs.jsx
export default function Programs() {
  const programs = [
    {
      title: "Beginner Classes",
      description: "Learn the fundamentals of chess from basic moves to opening principles.",
      icon: "♟",
      features: ["Basic rules and moves", "Opening strategies", "Tactical patterns", "Weekly sessions"]
    },
    {
      title: "Advanced Training",
      description: "Intensive coaching for competitive players and tournament preparation.",
      icon: "♞",
      features: ["Endgame mastery", "Opening repertoire", "Tournament prep", "Analysis sessions"]
    },
    {
      title: "Youth Program", 
      description: "Specially designed chess education for young minds aged 6-16.",
      icon: "♝",
      features: ["Age-appropriate teaching", "Fun learning games", "Youth tournaments", "Skill development"]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're just starting your chess journey or looking to master advanced strategies, 
            we have the perfect program for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 text-orange-500">{program.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-3">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
              
              <ul className="space-y-3">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full mt-6 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
