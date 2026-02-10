import React from 'react'
import CountdownTimer from './CountdownTimer'
import './styles/PromoBanner.css'

const PromoBanner = ({ promotion, onExpire }) => {
  if (!promotion) return null

  return (
    <div className='promo-banner stock-limite'>
      <div className='promo-content'>
        <span className='promo-text'>
          <strong>Spéciale Promo!!</strong> | Gaetan-Bois, Achetez et gagnez des
          cadeaux incroyables! | {promotion.description}
        </span>
        <span className='promo-timer'>
          Termine dans: <br />
          <CountdownTimer dateFin={promotion.dateFin} onExpire={onExpire} />
        </span>
      </div>
      <button className='promo-btn'>Voir Plus</button>
    </div>
  )
}

export default PromoBanner
