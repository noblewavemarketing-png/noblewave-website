import { motion } from "motion/react";
import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

/**
 * Lightweight inner-page hero band — no 3D globe, so pages other than the
 * homepage stay light and fast. Consistent brand treatment: eyebrow, serif
 * H1 with a gold italic accent line, one paragraph, optional CTAs.
 */
export const PageHeader = ({ eyebrow, title, subtitle, primaryCta, secondaryCta }: PageHeaderProps) => {
  return (
    <section className="relative pt-44 pb-20 md:pt-52 md:pb-28 bg-noble-black overflow-hidden">
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-noble-gold/10 blur-[150px]" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-noble-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif leading-[1.05] mb-8 text-white"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
          >
            {primaryCta && (
              <a
                href={primaryCta.href}
                data-track="cta"
                className="bg-noble-gold text-noble-black px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:bg-white transition-all"
              >
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                {secondaryCta.label}
              </a>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};
