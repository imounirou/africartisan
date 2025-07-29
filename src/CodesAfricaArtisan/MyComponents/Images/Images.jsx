/**
 * ----------------------------------------------------------------------------------------------------------------------------
 * INFORMATIONS GENERALES
 * ----------------------------------------------------------------------------------------------------------------------------
 * Date Création                 : < 29/07/2025 >
 * Texte Explicatif du composant : ||  Ce composant represente la zone d'affichage en dessous du menu
 *                                 
 * Nom Developpeur               : < Mounirou Isideen >  Nom Developpeur Modificateur  :< Mounirou Isideen > 
 * Email Developpeur             : < mounirou@yahoo.fr>  Email Developpeur             :< mounirou@yahoo.fr>
 * Date de Mise à jour           : < >
 * ----------------------------------------------------------------------------------------------------------------------------
 * PARAMETRES DU COMPOSANT (ajouter @ en préfixe)
 * ----------------------------------------------------------------------------------------------------------------------------
 * @param   : none 
 * @throws  : none 
 * ----------------------------------------------------------------------------------------------------------------------------
 */
import React from 'react'
import './Images.css'
import icon_search from '../../../assets/MyImages/icons-png/search.png'
const Images = () => {
  return (
    <div className='images containair'>
      <div className='images-text'>
        <h1>Prenez RDV avec un artisan pour vos travaux !</h1>
        <p>
            Indiquez votre projet et votre ville
        </p>
        <button className='btn'> Voir les artisants que vous rechercher <img src={icon_search} alt="Rechercher un artisan" /></button>
      </div>
    </div>
  )
}

export default Images
