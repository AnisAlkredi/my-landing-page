"use client";
import { motion } from "framer-motion";
import { Wand2, Code2, Bot } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const icons = [<Wand2 size={20} />, <Code2 size={20} />, <Bot size={20} />];

export default function ServicesSection({
  t,
  lang,
}: {
  t: any;
  lang: "de" | "en";
}) {
  return (
    <motion.section id="services" className="space-y-8" {...fadeUp}>
      <h2 className="text-2xl font-semibold text-center border-b border-black/10 dark:border-white/20 pb-2">
        {t.servicesTitle}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {t.services.map((s: any, i: number) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-[#111827] border border-gray-100 dark:border-lime-400/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:ring-2 hover:ring-lime-400 transition-all duration-300 flex flex-col justify-between"
            whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 1 : -1 }}
            whileTap={{ scale: 0.97 }}
            {...fadeUp}
          >
            <div>
              <div className="mb-4 text-lime-500">{icons[i]}</div>
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                {s.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {s.desc}
              </p>
            </div>
            <button
              className="mt-auto self-start px-4 py-2 text-sm rounded-full bg-[#02D6F0] hover:bg-[#0cf] text-black font-semibold transition"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {lang === "de" ? "Kostenlos anfragen" : "Free Inquiry"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
