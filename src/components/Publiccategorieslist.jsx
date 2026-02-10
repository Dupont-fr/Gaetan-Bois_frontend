import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import * as publicService from '../services/publicService'
import Navbar from '../components/Navbar'
import Footer from './footer/Footer'
import './styles/PublicCategoriesList.css'

const PublicCategoriesList = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    try {
      setLoading(true)
      const data = await publicService.getPublicCategories()
      setCategories(data.categories || [])
      setError(null)
    } catch (err) {
      console.error('Erreur:', err)
      setError('Erreur lors du chargement')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <>
        <Navbar categories={[]} />
        <div className='loading-container'>
          <div className='spinner'></div>
          <p>Chargement...</p>
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Navbar categories={[]} />
        <div className='error-container'>
          <p>⚠️ {error}</p>
          <button onClick={loadCategories}>Réessayer</button>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar categories={categories} />
      <div className='public-categories-page'>
        <div className='categories-hero'>
          <h1>📁 Nos Catégories</h1>
          <p>Découvrez toutes nos créations par catégorie</p>
        </div>

        <div className='categories-container'>
          {categories.length === 0 ? (
            <div className='empty-state'>
              <span className='empty-icon'>🛠️</span>
              <h3>Aucune catégorie</h3>
              <p>Nos créations seront bientôt disponibles...</p>
              <Link to='/' className='btn-home'>Retour à l'accueil</Link>
            </div>
          ) : (
            <div className='categories-grid'>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className='category-card'
                >
                  {category.images && category.images.length > 0 && (
                    <div className='category-image'>
                      <img
                        src={category.images[0].url}
                        alt={category.nom}
                        loading='lazy'
                      />
                      <div className='overlay'>
                        <span className='view-text'>Voir les produits →</span>
                      </div>
                    </div>
                  )}

                  <div className='category-info'>
                    <h3>{category.nom}</h3>
                    {category.description && (
                      <p className='category-description'>{category.description}</p>
                    )}
                    <div className='category-meta'>
                      <span className='product-count'>
                        {category.nombreImages} {category.nombreImages > 1 ? 'produits' : 'produit'}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PublicCategoriesList