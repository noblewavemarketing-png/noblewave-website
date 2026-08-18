import { motion } from "motion/react";
import { Megaphone, Filter, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    title: "We Run the Ads",
    description: "We build and manage paid campaigns targeting homeowners in your service area who are actively looking for renovation or HVAC work. You never touch Ads Manager.",
    icon: <Megaphone className="w-10 h-10" />,
    link: "/contact"
  },
  {
    title: "We Qualify Every Lead",
    description: "Every homeowner answers qualifying questions before they reach you — project type, timeline, ownership, and readiness. Tire-kickers get filtered out, not forwarded.",
    icon: <Filter className="w-10 h-10" />,
    link: "/contact"
  },
  {
    title: "You Get It Instantly. Exclusively.",
    description: "Qualified leads land on your phone by text and email in real time — name, number, project, area. Yours alone. We never sell the same homeowner twice.",
    icon: <Zap className="w-10 h-10" />,
    link: "/contact"
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-noble-dark relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-noble-gold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-noble-gold uppercase tracking-[0.4em] text-xs font-bold"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-serif mt-8 text-white leading-tight"
          >
            Three Steps. <br />
            <span className="italic text-noble-gold">Zero Marketing Homework.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto mt-10 font-light leading-relaxed"
          >
            No mystery, no marketing jargon. This is exactly what happens between a homeowner scrolling their phone and a qualified lead landing on yours. Big lead platforms sell the same homeowner to 4–6 contractors at once — with NobleWave, every lead goes to one partner. When you call, you're the only company calling.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5, 
                rotateX: -5,
                boxShadow: "0 20px 40px rgba(212,175,55,0.1)"
              }}
              className="p-14 bg-noble-black border border-white/5 rounded-[3rem] hover:border-noble-gold/40 transition-all group flex flex-col items-center text-center perspective-1000"
            >
              <div className="w-24 h-24 rounded-[2rem] bg-noble-gold/10 flex items-center justify-center text-noble-gold mb-12 group-hover:bg-noble-gold group-hover:text-noble-black transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-xl">
                {service.icon}
              </div>
              <h3 className="text-4xl font-serif mb-8 text-white group-hover:text-noble-gold transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-12 text-xl font-light">
                {service.description}
              </p>
              <a 
                href={service.link} 
                className="inline-flex items-center gap-3 text-noble-gold font-bold hover:gap-5 transition-all uppercase text-sm tracking-[0.2em] border-b border-noble-gold/30 pb-2 hover:border-noble-gold"
              >
                Claim Your Spot <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-noble-black">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800&h=1000"
              alt="Home services professional at work"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              loading="lazy"
              decoding="async"
              width="800"
              height="1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-12 -right-12 bg-noble-gold p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(212,175,55,0.3)] hidden md:block">
            <p className="text-noble-black font-serif text-4xl italic font-black leading-tight">Booked <br />Jobs.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <span className="text-noble-gold uppercase tracking-[0.4em] text-xs font-bold">The NobleWave Advantage</span>
          <h2 className="text-6xl md:text-7xl font-serif mt-8 mb-10 text-white leading-tight">
            Built by a Contractor, <br />
            <span className="italic text-noble-gold">Not an Agency.</span>
          </h2>
          <p className="text-gray-400 text-2xl mb-10 leading-relaxed font-light">
            We run a home services company in the GTA ourselves. We know what it feels like to pay for "marketing" and get a report full of impressions while the phone stays quiet.
          </p>
          <p className="text-gray-400 text-xl mb-12 leading-relaxed font-light">
            So we built the lead system we wished someone would sell us: paid campaigns targeted at real homeowners, qualification that filters tire-kickers before they waste your time, and instant, exclusive delivery straight to your phone.
          </p>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-serif text-3xl text-white mb-4">Exclusive</h4>
              <p className="text-lg text-gray-500 font-light">One lead, one partner. We never sell the same homeowner to two companies.</p>
            </div>
            <div>
              <h4 className="font-serif text-3xl text-white mb-4">One Per City</h4>
              <p className="text-lg text-gray-500 font-light">One company per trade, per city — so every partner gets real volume, no matter how many cities we're in.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const webFeatures = [
  {
    title: "Built to Convert",
    description: "Not a digital brochure — a site engineered to turn visitors into phone calls, with lead capture forms, click-to-call, and clear next steps on every screen."
  },
  {
    title: "Found on Google",
    description: "Local SEO built in from day one: structured data, geo targeting, city pages, and Search Console setup — so homeowners in your area actually find you."
  },
  {
    title: "Fast & Mobile-First",
    description: "Most homeowners will find you on their phone. Your site loads fast, looks sharp on every screen, and makes calling you a one-tap action."
  },
  {
    title: "Works With Your Leads",
    description: "Built to pair with our lead generation — the ads, the landing experience, and the follow-up all speak the same language, so nothing leaks."
  },
];

export const Websites = () => {
  return (
    <section id="websites" className="py-32 bg-noble-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-noble-gold/10 blur-[120px] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-noble-gold uppercase tracking-[0.4em] text-xs font-bold"
          >
            Website Creation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-serif mt-8 text-white leading-tight"
          >
            A Website That <br />
            <span className="italic text-noble-gold">Closes For You.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto mt-10 font-light leading-relaxed"
          >
            Leads check you out before they call back. If your website looks dated — or doesn't exist — you lose customers you never knew you were up for. We build professional, conversion-focused websites for local businesses, delivered fast.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {webFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-12 bg-noble-dark border border-white/5 rounded-[2.5rem] hover:border-noble-gold/40 transition-all group"
            >
              <h3 className="text-3xl font-serif mb-6 text-white group-hover:text-noble-gold transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-track="cta"
            className="inline-block bg-noble-gold text-noble-black px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            Get Your Website Built
          </motion.a>
        </div>
      </div>
    </section>
  );
};
