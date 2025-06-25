// نسخة كاملة من نموذج التواصل باستخدام fetch بدلاً من Formspree التقليدي
// يرسل البيانات إلى Formspree ويبقي المستخدم ضمن موقعك (لا يعيد التوجيه إلى formspree.io)
// ✅ مناسب للخطة المجانية، مع تنبيه قانوني واضح للمستخدم

'use client';

import { useState } from 'react';

export default function ContactForm({ t }: { t: any }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xdkzzywd', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data,
      });

      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <section id="contact" className="bg-white dark:bg-[#111827] border dark:border-lime-400/20 p-8 rounded-xl shadow-xl space-y-6 text-center mt-32">
      <h2 className="text-2xl font-bold text-black dark:text-white">{t.contactTitle}</h2>
      <p className="text-gray-600 dark:text-gray-300">{t.contactDescription}</p>

      {sent ? (
        <div className="text-green-600 font-semibold">Vielen Dank! Ihre Nachricht wurde übermittelt.</div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl mx-auto">
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="px-4 py-2 rounded bg-white dark:bg-[#0f172a] text-black dark:text-white placeholder-gray-400 border dark:border-lime-400/40 shadow-sm"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="px-4 py-2 rounded bg-white dark:bg-[#0f172a] text-black dark:text-white placeholder-gray-400 border dark:border-lime-400/40 shadow-sm"
          />
          <textarea
            name="message"
            required
            placeholder="Your message..."
            rows={4}
            className="px-4 py-2 rounded bg-white dark:bg-[#0f172a] text-black dark:text-white placeholder-gray-400 border dark:border-lime-400/40 shadow-sm"
          ></textarea>

          <p className="text-xs text-gray-500 leading-snug">
            Dieser Dienst wird von <strong>Formspree</strong> bereitgestellt. <br />
            Es gelten deren{' '}
            <a
              href="https://formspree.io/legal/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Datenschutzrichtlinien
            </a>.
          </p>

          {error && <p className="text-sm text-red-500">Es gab einen Fehler beim Senden. Bitte erneut versuchen.</p>}

          <button
            type="submit"
            className="bg-[#02D6F0] hover:bg-[#38BDF8] text-black font-semibold px-4 py-2 rounded shadow-md"
          >
            {t.sendMessage}
          </button>
        </form>
      )}
    </section>
  );
}
