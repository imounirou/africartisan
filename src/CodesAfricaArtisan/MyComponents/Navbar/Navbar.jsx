import React, { Component } from 'react'
import './Navbar.css'
import logo from '../../../assets/MyImages/icons-svg/logo.svg'
/**
* ----------------------------------------------------------------------------------------------------------------------------
 * INFORMATIONS GENERALES
 * ----------------------------------------------------------------------------------------------------------------------------
 * Date Création                 : < 29/07/2025 >
 * Texte Explicatif du composant : ||  Ce composant represente la barre de Menu
 *                                 ||  Particularite : Responsive & Fixe  
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
export class Navbar extends Component {
  render() {
      return (
      <nav className="containair">
		<img src={logo} alt="mon logo"  /> 
		<ul>
			<li>Travaux</li>
			<li>Collaborateurs</li>
			<li>Inscription</li>
			<li><button className='btn'>Connexion</button></li>
			<li>Contacter nous</li>
		</ul>	
      </nav>
    )
  }
}

export default Navbar
