"use client";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function AboutMeSection({
  t,
  lang,
}: {
  t: any;
  lang: "de" | "en";
}) {
  return (
    <motion.section
      className="max-w-3xl mx-auto text-center space-y-6"
      {...fadeUp}
    >
      <div className="inline-flex items-center gap-3 justify-center">
        <div className="w-12 h-12 bg-lime-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
          A
        </div>
        <h2 className="text-2xl font-semibold border-b border-black/10 dark:border-white/20 pb-1">
          {t.aboutTitle}
        </h2>
      </div>

      <p className="text-[clamp(1rem,3.5vw,1.25rem)] leading-relaxed text-gray-700 dark:text-gray-300 italic max-w-xl mx-auto">
        {t.about}
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        {lang === "de"
          ? "Lösungen mit Klarheit, Stil & Effizienz."
          : "Solutions with clarity, style & efficiency."}
      </p>
    </motion.section>
  );
}
