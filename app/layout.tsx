export const metadata = {
  title: "Agence Immobilière – Valence",
  description: "Estimation, achat et vente à Valence & alentours."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head />
      <body className="min-h-dvh flex flex-col">
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6 text-sm">
            <a href="/" className="font-semibold">Agence Immo Valence</a>
            <a href="/biens">Biens</a>
            <a href="/estimation">Estimation</a>
            <a href="/agence">Agence</a>
            <a href="/blog">Blog</a>
            <a href="/contact" className="ml-auto font-medium">Contact</a>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-wrap gap-4 justify-between">
            <span>© {new Date().getFullYear()} Agence Immo Valence</span>
            <div className="space-x-4">
              <a href="/mentions-legales">Mentions légales</a>
              <a href="/politique-confidentialite">Confidentialité</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
