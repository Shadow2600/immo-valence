export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Vendre & acheter à Valence</h1>
        <p className="mb-6">Estimation gratuite, mise en valeur, diffusion multi-portails.</p>
        <div className="flex gap-3">
          <a href="/biens" className="px-5 py-3 border rounded">Voir les biens</a>
          <a href="/estimation" className="px-5 py-3 bg-black text-white rounded">Estimation gratuite</a>
        </div>
      </div>
      <div className="aspect-[16/10] w-full rounded-lg border grid place-items-center text-neutral-500">
        Image Valence (à remplacer)
      </div>
    </section>
  );
}
