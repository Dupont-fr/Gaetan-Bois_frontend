import React, { useEffect, useState } from 'react'
import AnimatedText from './AnimatedText'
import CountdownTimer from './CountdownTimer'
import './styles/TombolaBanner.css'
import { Link } from 'react-router'

const TombolaBanner = ({ promotion }) => {
  const [currentGainIndex, setCurrentGainIndex] = useState(0)
  const [showText, setShowText] = useState(true)

  useEffect(() => {
    if (!promotion || !promotion.gains || promotion.gains.length === 0) return

    const textAnimationDuration =
      promotion.gains[currentGainIndex].length * 100 + 1000

    const timer = setTimeout(() => {
      setShowText(false)
      setTimeout(() => {
        setCurrentGainIndex((prev) => (prev + 1) % promotion.gains.length)
        setShowText(true)
      }, 500)
    }, textAnimationDuration)

    return () => clearTimeout(timer)
  }, [currentGainIndex, promotion])

  if (!promotion || !promotion.gains || promotion.gains.length === 0)
    return null
  const handleclick = () => {
    ;<Link to='/categories' className='nav-link'>
      Catégories
    </Link>
  }

  return (
    <div className='tombola-banner'>
      <div className='tombola-icon'>🎁</div>

      <div className='tombola-content'>
        <div className='tombola-title'>
          <span className='tombola-logo'>Tombola Chez Gaetan-Bois</span>
          <span className='tombola-subtitle'>Achetez et tentez de gagner</span>
        </div>

        <div className='tombola-prize'>
          {showText && (
            <AnimatedText
              text={promotion.gains[currentGainIndex]}
              speed={100}
            />
          )}
        </div>

        <div className='tombola-timer'>
          Termine dans :<br />
          <CountdownTimer dateFin={promotion.dateFin} />
        </div>
      </div>

      <button className='tombola-btn' onClick={handleclick}>
        Cliquez ici
      </button>
    </div>
  )
}

export default TombolaBanner
