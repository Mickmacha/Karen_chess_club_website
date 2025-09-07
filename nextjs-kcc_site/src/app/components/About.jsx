"use client";
export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              About Karen Chess Club
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Founded with a passion for the timeless game of chess, Karen Chess Club has been 
              fostering strategic thinking and building lasting friendships since our inception. 
              We believe chess is more than a game—it's a pathway to mental growth and community connection.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our club welcomes players of all skill levels, from curious beginners taking their 
              first moves to seasoned players seeking competitive challenges. Together, we create 
              an environment where learning thrives and friendships are forged over the checkered board.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">5</div>
                <div className="text-gray-600">Years Running</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">12</div>
                <div className="text-gray-600">Tournaments Won</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">♛</div>
                <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To cultivate strategic thinking, promote the art of chess, and build a 
                  supportive community where every player can reach their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}