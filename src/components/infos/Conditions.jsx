import React from 'react'
import Navbar from '../Navbar'
import Footer from '../footer/Footer'
import './styles/Legal.css'

const Conditions = () => {
  return (
    <>
      <Navbar categories={[]} />
      <div className='legal-page'>
        <div className='legal-hero'>
          <h1>📄 Conditions d'Utilisation</h1>
          <p>Dernière mise à jour : Février 2026</p>
        </div>

        <div className='legal-content'>
          <section>
            <h2>1. Acceptation des Conditions</h2>
            <p>
              En accédant et en utilisant le site GAETAN BOIS, vous acceptez
              d'être lié par ces conditions d'utilisation. Si vous n'acceptez
              pas ces conditions, veuillez ne pas utiliser notre site.
            </p>
          </section>

          <section>
            <h2>2. Utilisation du Site</h2>
            <p>
              Vous vous engagez à utiliser ce site uniquement à des fins légales
              et de manière à ne pas porter atteinte aux droits de tiers.
            </p>
            <ul>
              <li>Ne pas utiliser le site de manière frauduleuse</li>
              <li>Ne pas tenter d'accéder à des zones non autorisées</li>
              <li>Ne pas diffuser de contenus illégaux ou offensants</li>
              <li>Respecter la propriété intellectuelle</li>
            </ul>
          </section>

          <section>
            <h2>3. Commandes et Paiements</h2>
            <p>
              Toutes les commandes passées sur notre site sont soumises à
              confirmation. Nous nous réservons le droit d'annuler toute
              commande en cas de suspicion de fraude ou d'indisponibilité des
              produits.
            </p>
            <ul>
              <li>
                Les prix sont indiqués en FCFA (ou autre devise spécifiée)
              </li>
              <li>Les paiements sont sécurisés</li>
              <li>Un devis peut être demandé avant toute commande</li>
            </ul>
          </section>

          <section>
            <h2>4. Livraison</h2>
            <p>
              Les délais de livraison sont donnés à titre indicatif. GAETAN BOIS
              s'engage à faire ses meilleurs efforts pour respecter ces délais,
              mais ne saurait être tenu responsable des retards indépendants de
              sa volonté.
            </p>
          </section>

          <section>
            <h2>5. Retours et Remboursements</h2>
            <p>
              Les produits sur mesure ne peuvent être ni repris ni échangés,
              sauf en cas de défaut de fabrication. Pour tout autre produit,
              vous disposez d'un délai de 14 jours pour exercer votre droit de
              rétractation.
            </p>
          </section>

          <section>
            <h2>6. Garantie</h2>
            <p>
              Tous nos produits bénéficient de la garantie légale de conformité.
              Les défauts de fabrication sont couverts selon les conditions
              légales en vigueur au Cameroun.
            </p>
          </section>

          <section>
            <h2>7. Propriété Intellectuelle</h2>
            <p>
              Tous les contenus présents sur ce site (textes, images, logos,
              vidéos) sont la propriété exclusive de GAETAN BOIS ou de ses
              partenaires. Toute reproduction sans autorisation est strictement
              interdite.
            </p>
          </section>

          <section>
            <h2>8. Limitation de Responsabilité</h2>
            <p>
              GAETAN BOIS ne saurait être tenu responsable des dommages directs
              ou indirects résultant de l'utilisation du site ou de
              l'impossibilité d'y accéder.
            </p>
          </section>

          <section>
            <h2>9. Modification des Conditions</h2>
            <p>
              Nous nous réservons le droit de modifier ces conditions à tout
              moment. Les nouvelles conditions seront applicables dès leur mise
              en ligne.
            </p>
          </section>

          <section>
            <h2>10. Loi Applicable</h2>
            <p>
              Ces conditions sont régies par le droit camerounais. Tout litige
              sera soumis aux tribunaux compétents de Douala, Cameroun.
            </p>
          </section>

          <section>
            <h2>11. Contact</h2>
            <p>
              Pour toute question concernant ces conditions, vous pouvez nous
              contacter à l'adresse : <strong>gaetanteguezang@gmail.com</strong>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Conditions
