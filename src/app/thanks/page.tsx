// app/thanks/page.tsx

export default function ThanksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#02D6F0]">Vielen Dank!</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Ihre Nachricht wurde erfolgreich gesendet.
        </p>
        <a
          href="/"
          className="inline-block text-sm text-[#02D6F0] underline hover:text-[#0cf] transition"
        >
          Zurück zur Startseite
        </a>
      </div>
    </main>
  );
}
