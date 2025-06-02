// ✅ V5.6 — شعار ALKREDI مصغّر بدون التأثير على Hero أو اللغة - كود كامل 100%
'use client';

import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Code2, Bot } from 'lucide-react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import LogoPattern from '@/components/LogoPattern';

const ThreeCanvas = dynamic(() => import('@/components/ThreeCanvas'), { ssr: false });

const translations = {
  de: {
    language: 'English',
    title: 'Ich baue Software, die für Sie arbeitet.',
    subtitle: 'Moderne Web- & KI-Lösungen für Ihr Projekt',
    cta: 'Jetzt Projekt starten',
    servicesTitle: 'Was ich anbiete',
    services: [
      { title: 'Webentwicklung', desc: 'Mit modernen Tools wie Next.js, Tailwind & Vercel' },
      { title: 'Software Integration', desc: 'Systeme verbinden – schnell, stabil, sicher' },
      { title: 'KI & Automatisierung', desc: 'Chatbots, Workflows & smarte Prozesse' }
    ],
    aboutTitle: 'Über mich',
    about: 'Ich bin Anis Alkredi, erfahrener Software-Ingenieur mit über 10 Jahren internationaler Erfahrung. Mein Fokus liegt auf durchdachten, umsetzbaren digitalen Lösungen für Unternehmen – mit Stil und Effizienz.',
    contactTitle: 'Bereit zu starten?',
    contactDescription: 'Lassen Sie uns Ihr Projekt gemeinsam umsetzen.',
    sendMessage: 'Nachricht senden'
  },
  en: {
    language: 'Deutsch',
    title: 'I build software that works for you.',
    subtitle: 'Modern Web & AI solutions for your project',
    cta: 'Start Your Project',
    servicesTitle: 'What I offer',
    services: [
      { title: 'Web Development', desc: 'Using modern tools like Next.js, Tailwind & Vercel' },
      { title: 'Software Integration', desc: 'Connecting systems – fast, stable, secure' },
      { title: 'AI & Automation', desc: 'Chatbots, workflows & smart processes' }
    ],
    aboutTitle: 'About me',
    about: 'I’m Anis Alkredi, a software engineer with 10+ years of international experience. I focus on thoughtful, executable digital solutions – with style and efficiency.',
    contactTitle: 'Ready to begin?',
    contactDescription: 'Let’s build your next solution together.',
    sendMessage: 'Send Message'
  }
};

const nameSquares = ['A', 'L', 'K', 'R', 'E', 'D', 'I'];

export default function Home() {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const [darkMode, setDarkMode] = useState(false);
  const t = translations[lang];
  const icons = [<Wand2 size={20} />, <Code2 size={20} />, <Bot size={20} />];

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  return (
    <main className={`min-h-screen px-6 py-12 font-sans transition-colors relative overflow-hidden tracking-tight ${darkMode ? 'bg-[#0d1117] text-white' : 'bg-[#fefefe] text-black'}`}>
      <Head>
        <title>الكريدي – Web & KI Lösungen</title>
        <meta name="description" content="Anis Alkredi – Webentwicklung, Automatisierung und KI-Lösungen aus Süddeutschland. Persönlich. Modern. Schnell." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

      <div className="absolute inset-0 -z-10">
        {darkMode ? (
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] to-[#1a1f2e]" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4ff] via-white to-[#e0f7fa]" />
        )}
      </div>

      <div className="fixed top-8 left-8 flex gap-1 z-50 scale-[0.85] md:scale-100">
        {nameSquares.map((char, i) => (
          <div
            key={i}
            className={`w-6 h-6 md:w-7 md:h-7 rounded-[3px] shadow flex items-center justify-center text-lg md:text-xl font-extrabold tracking-wide ${i === 0 ? 'bg-[repeating-linear-gradient(135deg,_#ffffff_0px,_#ffffff_2px,_#000000_2px,_#000000_4px)] text-black' : 'bg-white text-black'}`}
          >
            {char}
          </div>
        ))}
      </div>

      <div className="fixed top-8 right-8 flex items-center gap-3 z-50">
        <button
          onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
          className="px-3 py-2 text-sm rounded bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition"
        >
          {t.language}
        </button>
        <div
          onClick={() => setDarkMode(!darkMode)}
          className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition ${darkMode ? 'justify-end bg-white/10' : 'justify-start bg-black/10'}`}
        >
          <div className="w-6 h-6 bg-white rounded-full shadow-md transition" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-28 md:space-y-32">
        <section className="pt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <motion.h1 className="text-6xl md:text-7xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {t.title}
            </motion.h1>
            <motion.p className="text-2xl text-gray-500 dark:text-gray-400 max-w-2xl"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
              {t.subtitle}
            </motion.p>
            <motion.button
              onClick={() => {
                const section = document.getElementById('contact');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-4 bg-[#02D6F0] hover:bg-[#38BDF8] text-black font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:ring-2 hover:ring-[#02d6f0] transition"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.4 }}>
              {t.cta}
            </motion.button>
          </div>
          <div className="h-64 md:h-96">
            <Suspense fallback={<div className="text-center text-sm">Loading 3D...</div>}>
              <ThreeCanvas />
            </Suspense>
          </div>
        </section>

        <motion.section className="space-y-8" {...fadeUp}>
          <h2 className="text-2xl font-semibold text-center border-b border-black/10 dark:border-white/20 pb-2 hover:underline-offset-4 hover:underline">
            {t.servicesTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.services.map((s, i) => (
              <motion.div key={i} className="bg-white dark:bg-[#111827] border dark:border-lime-400/20 p-6 rounded-xl shadow-md hover:shadow-2xl hover:ring-2 hover:ring-lime-400 transition"
                whileHover={{ scale: 1.03 }} {...fadeUp}>
                <div className="mb-3 text-lime-500">{icons[i]}</div>
                <h3 className="text-lg font-bold mb-1 text-black dark:text-white">{s.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="max-w-3xl mx-auto text-center space-y-4" {...fadeUp}>
          <h2 className="text-2xl font-semibold border-b border-black/10 dark:border-white/20 pb-2">
            {t.aboutTitle}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic">
            {t.about}
          </p>
        </motion.section>

        <motion.section id="contact" className="bg-white dark:bg-[#111827] border dark:border-lime-400/20 p-8 rounded-xl shadow-xl space-y-6 text-center" {...fadeUp}>
          <h2 className="text-2xl font-bold text-black dark:text-white">
            {t.contactTitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t.contactDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Email or Message..."
              className="flex-1 px-4 py-2 rounded bg-white dark:bg-[#0f172a] text-black dark:text-white dark:placeholder-lime-300 border dark:border-lime-400/40 shadow-sm"
            />
            <button
              onClick={() => alert(lang === 'de' ? 'Nachricht gesendet!' : 'Message sent!')}
              className="bg-[#02D6F0] hover:bg-[#38BDF8] text-black font-semibold px-4 py-2 rounded shadow-md"
            >
              {t.sendMessage}
            </button>
          </div>
        </motion.section>

        <footer className="text-center text-sm text-black/40 dark:text-white/50 mt-10">
          &copy; {new Date().getFullYear()} Alkredi. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
