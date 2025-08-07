// ✅ page.tsx – الصفحة الرئيسية بعد التقسيم والتنظيم
"use client";
import { useState, Suspense } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowUp, FileText, Globe2, ShieldCheck, X } from "lucide-react";
import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutMeSection from "@/components/AboutMeSection";
import ContactForm from "@/components/ContactForm";

const ThreeCanvas = dynamic(() => import("@/components/ThreeCanvas"), {
  ssr: false,
});

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

export default function Home() {
  const [lang, setLang] = useState<"de" | "en">("de");
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  scrollY.onChange((y) => setShowScrollTop(y > 400));
  const t = translations[lang];

  return (
    <main
      className={`min-h-screen px-6 py-12 font-sans relative ${
        darkMode ? "bg-[#0d1117] text-white" : "bg-[#fefefe] text-black"
      }`}
    >
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-[#02D6F0] z-[999]"
      />
      <div className="max-w-6xl mx-auto space-y-28 md:space-y-32">
        <HeroSection t={t} ThreeCanvas={ThreeCanvas} />
        <ServicesSection t={t} lang={lang} />
        <AboutMeSection t={t} lang={lang} />
        <ContactForm t={t} />
      </div>

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
