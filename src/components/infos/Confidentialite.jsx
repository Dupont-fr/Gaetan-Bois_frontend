import React from 'react'
import Navbar from '../Navbar'
import Footer from '../footer/Footer'
import './styles/Legal.css'

const Confidentialite = () => {
  return (
    <>
      <Navbar categories={[]} />
      <div className='legal-page'>
        <div className='legal-hero'>
          <h1>🔒 Politique de Confidentialité</h1>
          <p>Dernière mise à jour : Février 2026</p>
        </div>

        <div className='legal-content'>
          <section>
            <h2>1. Introduction</h2>
            <p>
              GAETAN BOIS accorde une grande importance à la protection de vos
              données personnelles. Cette politique de confidentialité explique
              quelles informations nous collectons, comment nous les utilisons
              et quels sont vos droits.
            </p>
          </section>

          <section>
            <h2>2. Données Collectées</h2>
            <p>Nous collectons les informations suivantes :</p>
            <ul>
              <li>
                <strong>Données d'identification :</strong> nom, prénom, adresse
                email
              </li>
              <li>
                <strong>Données de contact :</strong> numéro de téléphone,
                adresse postale
              </li>
              {/* <li>
                <strong>Données de commande :</strong> historique d'achats,
                préférences
              </li> */}
              {/* <li>
                <strong>Données de navigation :</strong> adresse IP, type de
                navigateur, pages visitées
              </li>*/}
            </ul>
          </section>

          <section>
            <h2>3. Utilisation des Données</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul>
              <li>Traiter vos commandes et gérer votre compte client</li>
              <li>Vous contacter concernant vos commandes</li>
              <li>Améliorer nos services et votre expérience utilisateur</li>
              <li>
                Vous envoyer des informations sur nos produits (avec votre
                consentement)
              </li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
          </section>

          <section>
            <h2>4. Base Légale du Traitement</h2>
            <p>Le traitement de vos données repose sur :</p>
            <ul>
              <li>L'exécution d'un contrat (commandes, livraisons)</li>
              <li>Votre consentement (newsletter, marketing)</li>
              <li>Notre intérêt légitime (amélioration des services)</li>
              <li>Le respect d'obligations légales</li>
            </ul>
          </section>

          <section>
            <h2>5. Partage des Données</h2>
            <p>
              Nous ne vendons jamais vos données personnelles. Vos informations
              peuvent être partagées uniquement avec :
            </p>
            <ul>
              <li>Nos prestataires de services (livraison, paiement)</li>
              <li>Les autorités légales si requis par la loi</li>
              <li>
                Nos partenaires, uniquement avec votre consentement explicite
              </li>
            </ul>
          </section>

          <section>
            <h2>6. Conservation des Données</h2>
            <p>
              Nous conservons vos données personnelles uniquement pendant la
              durée nécessaire aux finalités pour lesquelles elles ont été
              collectées :
            </p>
            <ul>
              <li>Données de commande : 10 ans (obligations comptables)</li>
              {/* <li>Données de compte client : jusqu'à suppression du compte</li> */}
              <li>Données marketing : jusqu'à retrait du consentement</li>
            </ul>
          </section>

          <section>
            <h2>7. Sécurité des Données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données contre tout accès,
              modification, divulgation ou destruction non autorisés.
            </p>
          </section>

          <section>
            <h2>8. Vos Droits</h2>
            <p>
              Conformément à la réglementation, vous disposez des droits
              suivants :
            </p>
            <ul>
              <li>
                <strong>Droit d'accès :</strong> obtenir une copie de vos
                données
              </li>
              <li>
                <strong>Droit de rectification :</strong> corriger vos données
                inexactes
              </li>
              <li>
                <strong>Droit à l'effacement :</strong> supprimer vos données
              </li>
              <li>
                <strong>Droit d'opposition :</strong> vous opposer au traitement
              </li>
              <li>
                <strong>Droit à la portabilité :</strong> récupérer vos données
              </li>
              <li>
                <strong>Droit de limitation :</strong> limiter le traitement
              </li>
            </ul>
            <p>
              Pour exercer vos droits, contactez-nous à :{' '}
              <strong>
                <a href='mailto:gaetanteguezang@gmail.com'>
                  gaetanteguezang@gmail.com{' '}
                </a>
              </strong>
            </p>
          </section>

          <section>
            <h2>9. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience de
              navigation. Vous pouvez configurer votre navigateur pour refuser
              les cookies, mais cela peut affecter certaines fonctionnalités du
              site.
            </p>
          </section>

          <section>
            <h2>10. Modifications de la Politique</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Les modifications seront publiées
              sur cette page avec une nouvelle date de mise à jour.
            </p>
          </section>

          <section>
            <h2>11. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité
              ou l'utilisation de vos données, contactez-nous :
            </p>
            <ul>
              <li>
                Email :{' '}
                <strong>
                  <a href='mailto:gaetanteguezang@gmail.com'>
                    gaetanteguezang@gmail.com{' '}
                  </a>
                </strong>
              </li>
              <li>
                Téléphone :{' '}
                <strong>
                  <a href='tel:+237656173692'>+237 656 173 692</a>
                </strong>
              </li>
              <li>Adresse : Yaoundé, Cameroun</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Confidentialite
