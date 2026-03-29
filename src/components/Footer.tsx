import { motion } from "motion/react";
import { Instagram, Linkedin, Twitter, Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-noble-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-noble-gold flex items-center justify-center">
                <span className="text-noble-black font-serif text-sm font-bold">N</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-wider">
                Noble<span className="text-noble-gold">Wave</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Canada's premium local influencer marketing setup and elite web design. We drive real-world traffic.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-noble-gold hover:text-noble-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-noble-gold hover:text-noble-black transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-noble-gold hover:text-noble-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-noble-gold">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-noble-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-noble-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-noble-gold transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-noble-gold transition-colors">Pricing</a></li>
              <li><a href="#portfolio" className="hover:text-noble-gold transition-colors">Work</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-noble-gold">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Canada</li>
              <li>647-673-5748</li>
              <li>NOBLEWAVEMARKETING@GMAIL.COM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-noble-gold">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Receive elite marketing insights directly in your inbox.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-noble-gold text-white"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-noble-gold rounded-full flex items-center justify-center text-noble-black">
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 text-center text-gray-600 text-xs">
          <p>&copy; {new Date().getFullYear()} NobleWave Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
