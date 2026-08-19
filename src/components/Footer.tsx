import { motion } from "motion/react";
import { Instagram, Linkedin, Twitter } from "lucide-react";

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
              AI-powered SEO, websites, content, and lead generation for local businesses across the Greater Toronto Area — managed for you, not handed to you as a dashboard. Based in Mississauga, Ontario.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="NobleWave on Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-noble-gold hover:text-noble-black transition-all">
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a href="#" aria-label="NobleWave on LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-noble-gold hover:text-noble-black transition-all">
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a href="#" aria-label="NobleWave on X (Twitter)" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-noble-gold hover:text-noble-black transition-all">
                <Twitter size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6 text-noble-gold">Services</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="/ai-seo" className="hover:text-noble-gold transition-colors">AI SEO</a></li>
              <li><a href="/websites" className="hover:text-noble-gold transition-colors">Websites</a></li>
              <li><a href="/services#local-seo" className="hover:text-noble-gold transition-colors">Local SEO &amp; Google Business</a></li>
              <li><a href="/services#ai-content" className="hover:text-noble-gold transition-colors">AI Content &amp; Auto-Publishing</a></li>
              <li><a href="/services#ai-video" className="hover:text-noble-gold transition-colors">AI Video &amp; Social</a></li>
              <li><a href="/lead-generation" className="hover:text-noble-gold transition-colors">Lead Generation</a></li>
              <li><a href="/ai-strategy-session" className="hover:text-noble-gold transition-colors">AI Strategy Session</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6 text-noble-gold">Company</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="/about" className="hover:text-noble-gold transition-colors">About</a></li>
              <li><a href="/pricing" className="hover:text-noble-gold transition-colors">Pricing</a></li>
              <li><a href="/contact" className="hover:text-noble-gold transition-colors">Get a Free Strategy Call</a></li>
              <li><a href="tel:6476735748" className="hover:text-noble-gold transition-colors">647-673-5748</a></li>
              <li><a href="mailto:noblewavemarketing@gmail.com" className="hover:text-noble-gold transition-colors">noblewavemarketing@gmail.com</a></li>
              <li><a href="/privacy" className="hover:text-noble-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6 text-noble-gold">Service Area</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Mississauga · Brampton</li>
              <li>Toronto · Etobicoke</li>
              <li>Oakville · Milton</li>
              <li>Vaughan &amp; the GTA</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-center text-gray-600 text-xs">
          <p>&copy; {new Date().getFullYear()} NobleWave Marketing. AI-powered SEO, websites &amp; lead generation for local businesses across the GTA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
