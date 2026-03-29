import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-noble-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-noble-gold uppercase tracking-[0.3em] text-xs font-bold">Get in Touch</span>
            <h2 className="text-5xl md:text-6xl font-serif mt-6 mb-10 text-white">
              Let’s Build Your <br />
              <span className="italic text-noble-gold">Digital Empire.</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed font-light">
              Ready to scale? Whether you need an elite website or a local influencer network, our team is ready to deliver.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-noble-gold/10 flex items-center justify-center text-noble-gold">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-white">Email Us</h4>
                  <p className="text-gray-500 text-lg">NOBLEWAVEMARKETING@GMAIL.COM</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-noble-gold/10 flex items-center justify-center text-noble-gold">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-white">Call Us</h4>
                  <p className="text-gray-500 text-lg">647-673-5748</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-noble-gold/10 flex items-center justify-center text-noble-gold">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-white">Location</h4>
                  <p className="text-gray-500 text-lg">Canada</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-noble-dark p-12 rounded-[2.5rem] border border-white/5 shadow-2xl"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-noble-black border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-noble-gold transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-noble-black border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-noble-gold transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Service Interested In</label>
                <select className="w-full bg-noble-black border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-noble-gold transition-all appearance-none">
                  <option>Local Influence</option>
                  <option>Elite Web Design</option>
                  <option>Content Strategy</option>
                  <option>Full Digital Empire</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-noble-black border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-noble-gold transition-all"
                  placeholder="Tell us about your business goals..."
                ></textarea>
              </div>
              <button className="w-full bg-noble-gold text-noble-black py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl text-lg">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const CTA = () => {
  return (
    <section className="py-24 noble-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-noble-gold)_0%,_transparent_70%)]" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
          Ready to elevate your brand? <br />
          <span className="italic text-noble-gold">Let’s craft your NobleWave.</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-noble-gold text-noble-navy px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-white transition-all">
            Book Your Free Consultation
          </button>
          <button className="border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
            Send a Message
          </button>
        </div>
      </div>
    </section>
  );
};
