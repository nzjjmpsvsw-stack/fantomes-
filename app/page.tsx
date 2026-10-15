// Lien de paiement Stripe (Payment Link). C'est une simple adresse publique,
// ce n'est pas un secret : elle se renseigne dans Vercel (NEXT_PUBLIC_STRIPE_LINK).
const LIEN_PAIEMENT = process.env.NEXT_PUBLIC_STRIPE_LINK ?? "#paiement";
const EMAIL_CONTACT = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@exemple.fr";

function Bouton({ texte }: { texte: string }) {
  return (
    <a
      href={LIEN_PAIEMENT}
      className="flex min-h-[56px] w-full items-center justify-center rounded-xl bg-orange px-6 text-lg font-bold text-white shadow-[0_4px_0_0_#B8451B] transition active:translate-y-[2px] active:shadow-[0_2px_0_0_#B8451B]"
    >
      {texte}
    </a>
  );
}

export default function Accueil() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-16 pt-8">
      <p className="font-titre text-xl font-extrabold tracking-tight">
        Fantômes
      </p>

      <section className="pt-8">
        <h1 className="font-titre text-4xl font-extrabold leading-[1.1]">
          Tu paies des abonnements que tu n&apos;utilises plus.
        </h1>
        <p className="mt-4 text-lg leading-relaxed">
          Envoie-nous ton relevé bancaire. On retrouve chaque prélèvement
          oublié et on te dit ce qu&apos;il te coûte <strong>par an</strong>.
        </p>
        <div className="mt-6">
          <Bouton texte="Retrouver mes abonnements : 19 €" />
          <p className="mt-3 text-center text-sm">
            Paiement unique. Remboursé sous 14 jours si ça ne te sert à rien.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-encre p-6 text-creme">
        <p className="text-sm uppercase tracking-widest text-trait">
          Le calcul qui fait mal
        </p>
        <p className="mt-3 font-titre text-5xl font-extrabold">120 €</p>
        <p className="mt-2 text-lg leading-relaxed">
          par an, c&apos;est ce que coûte un seul abonnement oublié à 9,99 € par
          mois. Une fois qu&apos;on y pense, on n&apos;en a presque jamais
          qu&apos;un.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-titre text-2xl font-extrabold">
          Ce que tu reçois
        </h2>
        <ul className="mt-5 space-y-4">
          <li className="rounded-xl border border-trait bg-sable p-4">
            <p className="font-bold">La liste de tes prélèvements réguliers</p>
            <p className="mt-1">
              Classée par montant annuel, du plus coûteux au plus discret.
            </p>
          </li>
          <li className="rounded-xl border border-trait bg-sable p-4">
            <p className="font-bold">Une lettre de résiliation prête à envoyer</p>
            <p className="mt-1">
              Une par abonnement. Tu relis, tu signes, tu envoies.
            </p>
          </li>
          <li className="rounded-xl border border-trait bg-sable p-4">
            <p className="font-bold">Ton total économisé sur l&apos;année</p>
            <p className="mt-1">
              Un chiffre clair, pour voir ce que tu gardes dans ta poche.
            </p>
          </li>
        </ul>
      </section>

      <section id="paiement" className="mt-12 rounded-2xl border-2 border-encre p-6">
        <p className="text-sm uppercase tracking-widest">Audit complet</p>
        <p className="mt-2 font-titre text-5xl font-extrabold">19 €</p>
        <p className="mt-1">Une seule fois. Pas d&apos;abonnement.</p>
        <div className="mt-5">
          <Bouton texte="Retrouver mes abonnements" />
        </div>
        <p className="mt-4 rounded-xl bg-sable p-4 text-sm leading-relaxed">
          <strong>Garantie 14 jours.</strong> Si le résultat ne te convient pas,
          écris à {EMAIL_CONTACT} dans les 14 jours suivant ton achat. Tu es
          remboursé en intégralité sous 5 jours ouvrés, sans justification.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-titre text-2xl font-extrabold">Questions</h2>
        <div className="mt-4 space-y-3">
          <details className="rounded-xl border border-trait p-4">
            <summary className="cursor-pointer font-bold">
              Comment ça se passe après le paiement ?
            </summary>
            <p className="mt-2">
              Tu reçois un email avec la marche à suivre pour m&apos;envoyer ton
              relevé. Tu reçois ta liste et tes lettres en retour sous 24 h.
            </p>
          </details>
          <details className="rounded-xl border border-trait p-4">
            <summary className="cursor-pointer font-bold">
              Que devient mon relevé bancaire ?
            </summary>
            <p className="mt-2">
              Il sert uniquement à ton audit. Il est supprimé après la livraison.
              Tu peux masquer toi-même les lignes qui ne sont pas des
              prélèvements.
            </p>
          </details>
          <details className="rounded-xl border border-trait p-4">
            <summary className="cursor-pointer font-bold">
              Et si je n&apos;ai aucun abonnement oublié ?
            </summary>
            <p className="mt-2">
              Alors tu es remboursé. La garantie de 14 jours est faite pour ça.
            </p>
          </details>
          <details className="rounded-xl border border-trait p-4">
            <summary className="cursor-pointer font-bold">
              Faut-il m&apos;engager sur la durée ?
            </summary>
            <p className="mt-2">
              Non. C&apos;est un paiement unique de 19 €. Rien ne se
              renouvelle.
            </p>
          </details>
        </div>
      </section>

      <footer className="mt-14 border-t border-trait pt-6 text-sm">
        <p>Fantômes, un service vendu en France.</p>
        <p className="mt-1">
          Mentions légales, CGV et confidentialité : à compléter avant la mise
          en vente.
        </p>
      </footer>
    </main>
  );
}
