import { motion } from "motion/react";

export const Testimonials = () => {
  const reviews = [
    {
      name: "Sophia Laurent",
      role: "CEO, Aura Skincare",
      content: "We tried the Essential Content package and it was exactly what we needed. The ready-to-launch influencer videos helped our business boost up from the first day because our brand was everywhere.",
    },
    {
      name: "Marcus Thorne",
      role: "Founder, Thorne Estates",
      content: "The Empire Scale package is a complete game-changer. The system is so efficient that we saw immediate results. Having 15 influencers talking about us simultaneously created an overnight authority.",
    },
  ];

  return (
    <section className="py-24 bg-noble-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-white">Client Success</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-12 bg-noble-dark border border-white/5 rounded-[2.5rem] relative"
            >
              <div className="text-noble-gold text-8xl font-serif absolute top-6 right-10 opacity-10">“</div>
              <p className="text-gray-400 text-xl italic mb-10 leading-relaxed font-light">"{review.content}"</p>
              <div>
                <h4 className="font-serif text-2xl text-white">{review.name}</h4>
                <p className="text-sm text-noble-gold font-bold uppercase tracking-widest mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
