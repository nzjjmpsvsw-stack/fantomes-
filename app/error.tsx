"use client";

import Link from "next/link";

export default function Erreur({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="font-titre text-3xl font-extrabold">Quelque chose a coincé.</p>
      <p className="mt-4 text-lg">
        Rien n&apos;est perdu. Réessaie, ou reviens à l&apos;accueil.
      </p>
      <div className="mt-8 flex flex-col gap-3">
        <button
          onClick={reset}
          className="min-h-[56px] rounded-xl bg-orange px-6 font-bold text-white"
        >
          Réessayer
        </button>
        <Link href="/" className="min-h-[56px] py-4 font-bold underline">
          Revenir à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
