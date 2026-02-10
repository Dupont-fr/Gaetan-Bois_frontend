import React from 'react'
import './styles/DimensionSchema.css'

const DimensionSchema = ({ longueur, largeur, hauteur }) => {
  // Convertir cm en m
  const L = longueur ? (longueur / 100).toFixed(2) : null
  const l = largeur ? (largeur / 100).toFixed(2) : null
  const h = hauteur ? (hauteur / 100).toFixed(2) : null

  if (!L && !l && !h) return null

  return (
    <div className='dimension-schema'>
      <svg viewBox='0 0 120 100' xmlns='http://www.w3.org/2000/svg'>
        {/* Forme 3D du meuble (perspective isométrique) */}
        <g className='box'>
          {/* Face avant */}
          <polygon
            points='30,60 90,60 90,30 30,30'
            fill='#d4a574'
            stroke='#8b5a2b'
            strokeWidth='1.5'
          />
          {/* Face droite */}
          <polygon
            points='90,60 110,50 110,20 90,30'
            fill='#b8935a'
            stroke='#8b5a2b'
            strokeWidth='1.5'
          />
          {/* Face dessus */}
          <polygon
            points='30,30 90,30 110,20 50,20'
            fill='#e6c9a8'
            stroke='#8b5a2b'
            strokeWidth='1.5'
          />
        </g>

        {/* Flèches et dimensions */}
        <g className='dimensions'>
          {/* Longueur (L) - horizontal haut */}
          {L && (
            <>
              <line
                x1='30'
                y1='15'
                x2='90'
                y2='15'
                stroke='#4a5568'
                strokeWidth='1'
              />
              <polygon points='30,15 34,13 34,17' fill='#4a5568' />
              <polygon points='90,15 86,13 86,17' fill='#4a5568' />
              <text
                x='60'
                y='12'
                className='dimension-text'
                textAnchor='middle'
              >
                L {L}m
              </text>
            </>
          )}

          {/* Largeur (l) - horizontal droite */}
          {l && (
            <>
              <line
                x1='95'
                y1='30'
                x2='115'
                y2='20'
                stroke='#4a5568'
                strokeWidth='1'
              />
              <polygon points='95,30 97,27 99,31' fill='#4a5568' />
              <polygon points='115,20 113,17 117,19' fill='#4a5568' />
              <text
                x='105'
                y='22'
                className='dimension-text'
                textAnchor='middle'
              >
                l {l}m
              </text>
            </>
          )}

          {/* Hauteur (h) - vertical gauche */}
          {h && (
            <>
              <line
                x1='20'
                y1='30'
                x2='20'
                y2='60'
                stroke='#4a5568'
                strokeWidth='1'
              />
              <polygon points='20,30 18,34 22,34' fill='#4a5568' />
              <polygon points='20,60 18,56 22,56' fill='#4a5568' />
              <text
                x='13'
                y='47'
                className='dimension-text'
                textAnchor='middle'
              >
                h {h}m
              </text>
            </>
          )}
        </g>
      </svg>
    </div>
  )
}

export default DimensionSchema
