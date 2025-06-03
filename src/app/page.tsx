// ✅ صفحة مؤقتة: تحت الإنشاء 🚧
'use client';

import Head from 'next/head';

export default function UnderConstruction() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 bg-gradient-to-br from-[#0f172a] to-[#1a1f2e] text-white">
      <Head>
        <title>🚧 Alkredi.com – قيد الإنشاء</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="text-6xl md:text-8xl font-extrabold mb-6">🚧</div>
      <h1 className="text-2xl md:text-4xl font-bold mb-4">الموقع قيد التطوير</h1>
      <p className="text-lg md:text-xl max-w-xl text-gray-300 mb-8">
        نحن نعمل على شيء مميز! شكرًا لصبركم، وعودوا قريبًا.
      </p>
      <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Alkredi</div>
    </main>
  );
}
