// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">♔</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Karen Chess Club</h3>
                <p className="text-gray-400">Strategic Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Building a community of strategic thinkers and chess enthusiasts in Karen, Nairobi. 
              Join us for an exciting journey of mental growth and friendly competition.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="/programs" className="text-gray-300 hover:text-orange-500 transition-colors">Programs</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-orange-500 transition-colors">Events</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Instagram</a></li>
              <li><a href="mailto:info@karenchessclub.com" className="text-gray-300 hover:text-orange-500 transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Karen Chess Club. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}