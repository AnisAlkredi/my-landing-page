// Hero.tsx
// A visually appealing hero section with a solar background and bold message.

export default function Hero() {
  return (
    <section className="bg-[url('/solar-bg.jpg')] bg-cover bg-center text-white py-24 px-6 text-center">
      <div className="bg-black/60 p-8 rounded-lg inline-block max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Solarlösungen für Ihr Zuhause
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Nachhaltige Energie vom Fachbetrieb – individuell, effizient &
          umweltfreundlich.
        </p>
      </div>
    </section>
  );
}
