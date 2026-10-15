import Link from "next/link";

export default function NonTrouvee() {
  return (
    <main className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="font-titre text-6xl font-extrabold">404</p>
      <p className="mt-4 text-lg">Cette page s&apos;est évaporée, comme un fantôme.</p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[56px] items-center rounded-xl bg-orange px-6 font-bold text-white"
      >
        Revenir à l&apos;accueil
      </Link>
    </main>
  );
}
