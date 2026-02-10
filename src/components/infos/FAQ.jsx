import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../footer/Footer'
import './styles/FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      category: 'Commandes',
      questions: [
        {
          q: 'Comment passer une commande ?',
          a: 'Vous pouvez passer commande directement sur notre site en ajoutant des produits au panier, ou nous contacter pour un devis personnalisé sur mesure.',
        },
        {
          q: 'Puis-je modifier ma commande après validation ?',
          a: "Une modification est possible uniquement si la fabrication n'a pas encore commencé. Contactez-nous rapidement au +237 6XX XX XX XX.",
        },
        {
          q: 'Comment puis-je suivre ma commande ?',
          a: "Vous recevrez un email de confirmation avec un numéro de suivi. Vous pouvez aussi nous contacter directement pour connaître l'état d'avancement.",
        },
      ],
    },
    {
      category: 'Paiement',
      questions: [
        {
          q: 'Quels moyens de paiement acceptez-vous ?',
          a: 'Nous acceptons les paiements par Mobile Money (Orange Money, MTN Mobile Money), virement bancaire, et paiement à la livraison pour certaines zones.',
        },
        {
          q: 'Le paiement en ligne est-il sécurisé ?',
          a: 'Oui, tous nos paiements en ligne sont sécurisés par des protocoles de cryptage SSL. Vos données bancaires ne sont jamais stockées sur nos serveurs.',
        },
        {
          q: 'Puis-je payer en plusieurs fois ?',
          a: 'Pour les commandes importantes ou sur mesure, nous proposons des facilités de paiement en plusieurs fois. Contactez-nous pour discuter des modalités.',
        },
      ],
    },
    {
      category: 'Livraison',
      questions: [
        {
          q: 'Quels sont les délais de livraison ?',
          a: 'Les délais varient selon les produits : 2-5 jours pour les produits en stock, 2-4 semaines pour les créations sur mesure. Nous vous informons du délai précis lors de la commande.',
        },
        {
          q: 'Livrez-vous partout au Cameroun ?',
          a: 'Oui, nous livrons dans tout le Cameroun. Les frais de livraison varient selon la distance. Douala et environs : gratuit pour commandes > 50 000 FCFA.',
        },
        {
          q: 'Comment se passe la livraison ?',
          a: "Nos livreurs vous contactent 24h avant pour convenir d'un créneau. Pour les meubles volumineux, nous assurons aussi le montage sur place.",
        },
      ],
    },
    {
      category: 'Produits',
      questions: [
        {
          q: 'Proposez-vous des produits sur mesure ?',
          a: 'Oui ! La majorité de nos créations peuvent être personnalisées (dimensions, finitions, couleurs). Contactez-nous avec vos spécifications pour un devis gratuit.',
        },
        {
          q: 'Quels types de bois utilisez-vous ?',
          a: 'Nous travaillons principalement avec du bois de teck, acajou, iroko et fraké. Tous nos bois sont issus de sources durables et certifiées.',
        },
        {
          q: 'Vos produits sont-ils garantis ?',
          a: "Oui, tous nos produits bénéficient d'une garantie de 2 ans contre les défauts de fabrication. L'entretien et l'usure normale ne sont pas couverts.",
        },
      ],
    },
    {
      category: 'Retours & SAV',
      questions: [
        {
          q: 'Puis-je retourner un produit ?',
          a: "Les produits standards peuvent être retournés sous 14 jours dans leur emballage d'origine. Les produits sur mesure ne sont ni repris ni échangés, sauf défaut.",
        },
        {
          q: 'Que faire si mon produit est défectueux ?',
          a: 'Contactez-nous immédiatement avec photos du défaut. Nous organisons gratuitement la réparation, le remplacement ou le remboursement selon le cas.',
        },
        {
          q: 'Proposez-vous un service de réparation ?',
          a: "Oui, nous assurons la réparation et la restauration de meubles en bois, même s'ils ne proviennent pas de chez nous. Demandez un devis gratuit.",
        },
      ],
    },
    {
      category: 'Compte Client',
      questions: [
        {
          q: 'Dois-je créer un compte pour commander ?',
          a: "Non, vous pouvez commander sans créer de compte. Cependant, un compte vous permet de suivre vos commandes et de bénéficier d'offres exclusives.",
        },
        {
          q: 'Comment modifier mes informations personnelles ?',
          a: 'Connectez-vous à votre compte et accédez à "Mon profil" pour modifier vos coordonnées, adresse de livraison et préférences.',
        },
        {
          q: "J'ai oublié mon mot de passe",
          a: 'Cliquez sur "Mot de passe oublié" sur la page de connexion. Vous recevrez un email pour réinitialiser votre mot de passe.',
        },
      ],
    },
  ]

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Composant pour l'icône de point d'interrogation
  const QuestionMarkIcon = () => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='currentColor'
      style={{ verticalAlign: 'middle', marginRight: '8px' }}
    >
      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z' />
    </svg>
  )

  // Composant pour l'icône d'enveloppe
  const EmailIcon = () => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='currentColor'
      style={{ verticalAlign: 'middle', marginRight: '8px' }}
    >
      <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
    </svg>
  )

  // Composant pour l'icône de téléphone
  const PhoneIcon = () => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='currentColor'
      style={{ verticalAlign: 'middle', marginRight: '8px' }}
    >
      <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
    </svg>
  )

  return (
    <>
      <Navbar categories={[]} />
      <div className='faq-page'>
        <div className='faq-hero'>
          <h1>
            <QuestionMarkIcon />
            Questions Fréquentes
          </h1>
          <p>Trouvez rapidement des réponses à vos questions</p>
        </div>

        <div className='faq-content'>
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className='faq-section'>
              <h2 className='faq-category'>{section.category}</h2>

              {section.questions.map((item, itemIndex) => {
                const globalIndex = `${sectionIndex}-${itemIndex}`
                const isOpen = openIndex === globalIndex

                return (
                  <div
                    key={itemIndex}
                    className={`faq-item ${isOpen ? 'open' : ''}`}
                  >
                    <button
                      className='faq-question'
                      onClick={() => toggle(globalIndex)}
                    >
                      <span>{item.q}</span>
                      <span className='faq-icon'>{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className='faq-answer'>
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}

          <div className='faq-contact'>
            <h3>Vous ne trouvez pas de réponse ?</h3>
            <p>Notre équipe est là pour vous aider !</p>
            <div className='contact-buttons'>
              <a href='/contact' className='btn-contact'>
                <EmailIcon />
                Nous contacter
              </a>

              <a href='tel:+237656173692' className='btn-phone'>
                <PhoneIcon />
                Appeler
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FAQ
