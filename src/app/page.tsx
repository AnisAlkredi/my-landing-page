"use client";
import { useState, Suspense } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Wand2,
  Code2,
  Bot,
  ArrowUp,
  Globe2,
  FileText,
  ShieldCheck,
  X,
} from "lucide-react";
import dynamic from "next/dynamic";
import Head from "next/head";
import ContactForm from "@/components/ContactForm";

const ThreeCanvas = dynamic(() => import("@/components/ThreeCanvas"), {
  ssr: false,
});

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};
const translations = {
  de: {
    language: "English",
    title: "Landing Page, Chatbot oder smarte Beratung?",
    subtitle:
      "Web- & KI-Lösungen, die Eindruck machen – ab 490 € für Selbstständige & kleine Unternehmen",
    cta: "Unverbindlich anfragen",
    servicesTitle: "Wobei ich Sie unterstütze",
    services: [
      {
        title: "Webentwicklung",
        desc: "Starten Sie mit einer schnellen, überzeugenden Landing Page, die aus Klicks Kunden macht.",
      },
      {
        title: "Systemintegration",
        desc: "Tools & Plattformen verbinden – schnell, zuverlässig & sicher.",
      },
      {
        title: "KI & Automatisierung",
        desc: "Automatisieren Sie Ihre Abläufe mit smarten Bots und Workflows – exakt auf Sie zugeschnitten.",
      },
    ],
    aboutTitle: "Über mich",
    about:
      "Ich bin Anis Alkredi – IT-Berater & Entwickler mit über 10 Jahren internationaler Erfahrung. Mein Fokus: smarte, elegante Lösungen, die einfach funktionieren.",
    contactTitle: "Lassen Sie uns starten",
    contactDescription:
      "Ich helfe Ihnen, Ihre Idee schnell & wirkungsvoll umzusetzen.",
    sendMessage: "Nachricht senden",
    impressumTitle: "Impressum",
    impressumContent: `Angaben gemäß § 5 TMG:<br />Anis Alkredi<br />Sonnenstraße 11<br />83052 Brückmühl, Deutschland<br />Telefon: +49 176 57766182<br />E-Mail: <a href="mailto:anis.alkredi@gmail.com" class="underline text-blue-500">anis.alkredi@gmail.com</a><br />Tätigkeit: Freiberufliche Nebentätigkeit als IT-Berater und Entwickler gemäß § 19 UStG (Kleinunternehmerregelung, keine Umsatzsteuer).<br />Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Anis Alkredi`,
    privacyTitle: "Datenschutzerklärung",
    privacyContent: `Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Diese Website verwendet keine Cookies und speichert keine personenbezogenen Daten ohne Ihre ausdrückliche Zustimmung.<br /><br />Beim Ausfüllen des Kontaktformulars werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und direkt an die im Impressum genannte E-Mail-Adresse (anis.alkredi@gmail.com) übermittelt. Es erfolgt keine Speicherung oder Weitergabe an Dritte.<br /><br />Diese Website ist auf der Plattform „Vercel“ gehostet. Anbieter ist die Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Es wurde ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO mit Vercel geschlossen (<a href="https://vercel.com/legal/dpa" target="_blank" class="underline text-blue-500">Vercel DPA</a>). Dabei können serverseitige Logs durch Vercel verarbeitet werden (z. B. IP-Adresse, Browsertyp, Zugriffszeitpunkt), die ausschließlich zur Sicherstellung des technischen Betriebs verwendet werden. Es erfolgt keine personenbezogene Auswertung durch den Seitenbetreiber.<br /><br />Für das Kontaktformular wird der Dienst „Formspree“ verwendet. Anbieter ist die Formspree Inc., 2261 Market Street #4266, San Francisco, CA 94114, USA. Die eingegebenen Daten werden ausschließlich zum Zwecke der Kontaktaufnahme über deren Infrastruktur übertragen. Es gelten die <a href="https://formspree.io/legal/privacy-policy" target="_blank" class="underline text-blue-500">Datenschutzbestimmungen von Formspree</a>.<br /><br />Ihre Rechte gemäß DSGVO (Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch) bleiben unberührt. Sie erreichen uns unter den im Impressum angegebenen Kontaktdaten.`,
  },
  en: {
    language: "Deutsch",
    title: "Landing Page, Chatbot or Smart Consulting?",
    subtitle:
      "Tailored Web & AI solutions that impress – starting at €490 for freelancers & small teams",
    cta: "Get in touch",
    servicesTitle: "How I can support you",
    services: [
      {
        title: "Web Development",
        desc: "Launch fast, beautiful landing pages that turn clicks into clients.",
      },
      {
        title: "Software Integration",
        desc: "Connect your tools & platforms – fast, reliable, and secure.",
      },
      {
        title: "AI & Automation",
        desc: "Automate your work with smart bots and workflows tailored for you.",
      },
    ],
    aboutTitle: "About me",
    about:
      "I’m Anis Alkredi – an IT consultant & developer with 10+ years of international experience. I create elegant, effective solutions that simply work.",
    contactTitle: "Let’s get started",
    contactDescription:
      "I’ll help bring your idea to life – quickly and effectively.",
    sendMessage: "Send Message",
    impressumTitle: "Legal Notice",
    impressumContent: `Information in accordance with § 5 TMG:<br />Anis Alkredi<br />Sonnenstraße 11<br />83052 Brückmühl, Germany<br />Phone: +49 176 57766182<br />Email: <a href="mailto:anis.alkredi@gmail.com" class="underline text-blue-500">anis.alkredi@gmail.com</a><br />Activity: Freelance IT consulting and development under § 19 UStG (small business regulation, no VAT).<br />Responsible for content in accordance with § 55 Abs. 2 RStV: Anis Alkredi`,
    privacyTitle: "Privacy Policy",
    privacyContent: `Protecting your personal data is important to us. This website does not use cookies or store personal data without your explicit consent.<br /><br />When submitting the contact form, your details are only used to process your inquiry and are sent directly to the email address listed in the legal notice (anis.alkredi@gmail.com). No data is stored or shared with third parties.<br /><br />This website is hosted on the “Vercel” platform. The provider is Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. A data processing agreement has been concluded with Vercel in accordance with Art. 28 GDPR (<a href="https://vercel.com/legal/dpa" target="_blank" class="underline text-blue-500">Vercel DPA</a>). Server-side logs (such as IP address, browser type, access time) may be processed by Vercel solely to ensure technical operation. No personal analysis is carried out by the site operator.<br /><br />The contact form uses the service “Formspree”. The provider is Formspree Inc., 2261 Market Street #4266, San Francisco, CA 94114, USA. The entered data is transmitted exclusively via their infrastructure for the purpose of contacting us. See the <a href="https://formspree.io/legal/privacy-policy" target="_blank" class="underline text-blue-500">Formspree privacy policy</a>.<br /><br />Your rights under the GDPR (access, rectification, deletion, restriction, data portability, and objection) remain unaffected. You can reach us via the contact details listed in the legal notice.`,
  },
};

const nameSquares = ["A", "L", "K", "R", "E", "D", "I"];

export default function Home() {
  const [lang, setLang] = useState<"de" | "en">("de");
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const { scrollYProgress, scrollY } = useScroll();
  scrollY.onChange((y) => setShowScrollTop(y > 400));

  const t = translations[lang];
  const icons = [<Wand2 size={20} />, <Code2 size={20} />, <Bot size={20} />];

  return (
    <>
      <Head>
        <title>{t.title} | Anis Alkredi</title>
        <meta
          name="description"
          content={
            lang === "de"
              ? "Web- & KI-Lösungen ab 490€ – Landing Pages, Chatbots & smarte Automatisierung für Selbstständige & kleine Unternehmen."
              : "Web & AI solutions from €490 – Landing pages, chatbots, and smart automation for freelancers & small teams."
          }
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Anis Alkredi" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anis Alkredi",
              url: "https://alkredi.de",
              jobTitle: "Freelance IT Consultant & Web Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brückmühl",
                postalCode: "83052",
                addressCountry: "DE",
              },
              email: "mailto:anis.alkredi@gmail.com",
              sameAs: ["https://www.linkedin.com/in/anisalkredi/"],
            }),
          }}
        />
      </Head>

      <motion.div className="fixed top-8 left-8 flex gap-1 z-50">
        {nameSquares.map((char, i) => (
          <motion.div
            key={i}
            className={`w-6 h-6 md:w-7 md:h-7 rounded-[3px] shadow flex items-center justify-center text-lg md:text-xl font-extrabold tracking-wide ${
              i === 0
                ? "bg-[repeating-linear-gradient(135deg,_#ffffff_0px,_#ffffff_2px,_#000000_2px,_#000000_4px)] text-black"
                : "bg-white text-black"
            }`}
            whileHover={{ scale: 1.15, rotate: i % 2 === 0 ? 3 : -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {char}
          </motion.div>
        ))}
      </motion.div>

      <div className="fixed top-6 right-6 flex items-center gap-3 z-50">
        <button
          onClick={() => setLang(lang === "de" ? "en" : "de")}
          className="w-10 h-10 rounded-full bg-[#00e4ff1a] hover:bg-[#00e4ff33] flex items-center justify-center transition shadow-md"
          title={t.language}
        >
          <Globe2 className="w-5 h-5 text-[#00e4ff] opacity-80 hover:opacity-100 transition" />
        </button>

        <div
          onClick={() => setDarkMode(!darkMode)}
          className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition shadow-inner ${
            darkMode ? "justify-end bg-white/10" : "justify-start bg-black/10"
          }`}
        >
          <div className="w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300" />
        </div>
      </div>

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-[#02D6F0] z-[999]"
      />

      <motion.div className="absolute inset-0 -z-10">
        {darkMode ? (
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] to-[#1a1f2e]" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4ff] via-white to-[#e0f7fa]" />
        )}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff66_1px,transparent_1px)] bg-[size:18px_18px] opacity-50 dark:opacity-30 pointer-events-none" />
      </motion.div>

      <main
        className={`min-h-screen px-6 py-12 font-sans transition-colors relative overflow-hidden tracking-tight ${
          darkMode ? "bg-[#0d1117] text-white" : "bg-[#fefefe] text-black"
        }`}
      >
        <div className="relative z-10 max-w-6xl mx-auto space-y-28 md:space-y-32">
          <section className="pt-20 grid md:grid-cols-[1.5fr_1.1fr] sm:gap-4 md:gap-2 items-center">
            <div className="space-y-6 text-left">
              <motion.h1
                className="font-extrabold tracking-tight text-[clamp(2rem,10vw,4rem)]"
                {...fadeUp}
              >
                {t.title}
              </motion.h1>
              <motion.p
                className="text-[clamp(1.1rem,4vw,1.5rem)] text-gray-500 dark:text-gray-400 max-w-2xl"
                {...fadeUp}
              >
                {t.subtitle}
              </motion.p>
              <motion.button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-4 bg-[#02D6F0] hover:bg-[#38BDF8] text-black font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:ring-2 hover:ring-[#02d6f0] transition animate-pulse"
                {...fadeUp}
              >
                {t.cta}
              </motion.button>
            </div>
            <div className="h-64 md:h-96">
              <Suspense
                fallback={
                  <div className="text-center text-sm">Loading 3D...</div>
                }
              >
                <ThreeCanvas />
              </Suspense>
            </div>
          </section>

          <motion.section id="services" className="space-y-8" {...fadeUp}>
            <h2 className="text-2xl font-semibold text-center border-b border-black/10 dark:border-white/20 pb-2">
              {t.servicesTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {t.services.map((s, i) => (
                <motion.div
                  key={i}
                  className={`bg-white dark:bg-[#111827] border border-gray-100 dark:border-lime-400/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:ring-2 hover:ring-lime-400 transition-all duration-300 flex flex-col justify-between`}
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

          <ContactForm t={t} />
        </div>

        {showImpressum && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <motion.div
              className="bg-white dark:bg-[#111827] p-6 rounded-xl max-w-2xl w-full shadow-xl relative space-y-4 overflow-y-auto max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowImpressum(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-lg font-bold">
                <FileText className="w-5 h-5 text-lime-500" />{" "}
                {t.impressumTitle}
              </div>
              <div
                className="text-sm text-gray-600 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: t.impressumContent }}
              />
            </motion.div>
          </div>
        )}

        {showPrivacy && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <motion.div
              className="bg-white dark:bg-[#111827] p-6 rounded-xl max-w-2xl w-full shadow-xl relative space-y-4 overflow-y-auto max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowPrivacy(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-lg font-bold">
                <ShieldCheck className="w-5 h-5 text-lime-500" />{" "}
                {t.privacyTitle}
              </div>
              <div
                className="text-sm text-gray-600 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: t.privacyContent }}
              />
            </motion.div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center text-sm dark:text-white/50 mt-10 space-y-2">
          <div>
            &copy; {new Date().getFullYear()} Alkredi. All rights reserved.
          </div>
          <div className="space-x-4">
            <button
              onClick={() => setShowImpressum(true)}
              className="underline hover:text-[#02D6F0] transition"
            >
              Impressum
            </button>
            <button
              onClick={() => setShowPrivacy(true)}
              className="underline hover:text-[#02D6F0] transition"
            >
              Datenschutz
            </button>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 bg-[#02D6F0] hover:bg-[#0cf] text-black p-3 rounded-full shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </main>
    </>
  );
}
