// // ============================================
// // services/api.js
// // Configuration centralisée d'Axios
// // ============================================

// import axios from 'axios'

// // Base URL de l'API
// const API_URL = 'http://localhost:3000/api'

// // Instance Axios configurée
// const api = axios.create({
//   baseURL: API_URL,
//   withCredentials: true, // Important pour les cookies
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })

// // Intercepteur pour gérer les erreurs globalement
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Gestion centralisée des erreurs
//     if (error.response) {
//       // Erreur retournée par le serveur
//       const message = error.response.data?.message || 'Erreur serveur'

//       // Session expirée
//       if (error.response.status === 401) {
//         console.error('Session expirée')
//         // Optionnel : Rediriger vers login
//         // window.location.href = '/admin/login';
//       }

//       return Promise.reject(new Error(message))
//     } else if (error.request) {
//       // Pas de réponse du serveur
//       return Promise.reject(new Error('Serveur inaccessible'))
//     } else {
//       // Erreur lors de la configuration de la requête
//       return Promise.reject(new Error('Erreur de requête'))
//     }
//   },
// )

// export default api
// export { API_URL }
