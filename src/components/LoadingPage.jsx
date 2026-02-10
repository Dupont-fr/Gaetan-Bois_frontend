import React, { useEffect } from 'react'
import './styles/LoadingPage.css'

const LoadingPage = ({ onLoadingComplete }) => {
  useEffect(() => {
    // Durée du chargement : 3.5 secondes
    const timer = setTimeout(() => {
      onLoadingComplete()
    }, 3500)

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <div className='loading-container'>
      <div className='loading-content'>
        {/* Logo augmenté */}
        <div className='logo-container'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
            className='main-logo'
          >
            <circle cx='50' cy='50' r='45' fill='#8B5A2B' />
            <rect x='20' y='30' width='60' height='40' rx='5' fill='#654321' />
            <ellipse
              cx='50'
              cy='50'
              rx='20'
              ry='10'
              stroke='#D4A76A'
              strokeWidth='2'
              fill='none'
            />
            <ellipse
              cx='50'
              cy='50'
              rx='12'
              ry='6'
              stroke='#D4A76A'
              strokeWidth='1.5'
              fill='none'
            />
            <path
              d='M35 30 L65 30 M50 20 L50 40'
              stroke='#D4AF37'
              strokeWidth='2'
              strokeLinecap='round'
            />
            <text
              x='50'
              y='80'
              textAnchor='middle'
              fontFamily='Georgia, serif'
              fontSize='14'
              fontWeight='bold'
              fill='#FFFFFF'
            >
              GB
            </text>
          </svg>
        </div>

        {/* Animation de chargement style Facebook */}
        <div className='loading-animation'>
          <div className='loading-bar-container'>
            <div className='loading-bar'></div>
          </div>
          <p className='loading-text'>Chargement de votre espace...</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
