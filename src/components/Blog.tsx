import { motion } from "motion/react";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "5 Ways to Drive Foot Traffic with Local Creators",
    excerpt: "How neighborhood influencers can become your store's biggest advocates.",
    date: "March 15, 2026",
    author: "NobleWave Team",
    image: "https://picsum.photos/seed/blog1/800/600",
  },
  {
    title: "The Power of Micro-Local Influence",
    excerpt: "Why 1,000 local followers are worth more than 100,000 distant ones.",
    date: "March 10, 2026",
    author: "NobleWave Team",
    image: "https://picsum.photos/seed/blog2/800/600",
  },
  {
    title: "Setting Up Your First Local Campaign",
    excerpt: "A step-by-step guide to finding and onboarding neighborhood talent.",
    date: "March 5, 2026",
    author: "NobleWave Team",
    image: "https://picsum.photos/seed/blog3/800/600",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-noble-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-noble-gold uppercase tracking-[0.3em] text-xs font-bold">Insights</span>
          <h2 className="text-5xl md:text-6xl font-serif mt-6 text-white">Agency Vision</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-noble-black rounded-[2rem] overflow-hidden border border-white/5 hover:border-noble-gold/30 transition-all group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500 mb-4 font-bold">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                </div>
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-noble-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-noble-gold font-bold hover:gap-4 transition-all uppercase text-xs tracking-widest">
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
