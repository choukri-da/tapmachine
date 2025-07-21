// src/data/products.js

import assets from "./assets";

const products = [
  {
    id: 1,
    name: "Batteur de tapis",
    img: assets.affichage.batteur,
    link: "/produits/1",
    details: (
      <div className="product-details">
        <h2>Avantages</h2>
        <ul>
          <li>Une amélioration significative de la qualité de service par rapport au fouet mécanique Tornado T-600</li>
          <li>Économiser de l'électricité</li>
          <li>Possibilité de placer la machine à côté du mur</li>
          <li>Économiser du travail humain et raccourcir le temps de service</li>
          <li>Système d'agitation sûr et efficace</li>
          <li>Possibilité de secouer plusieurs petits tapis en même temps</li>
          <li>L'ensemble comprend un absorbeur et une plateforme pour rouler les tapis</li>
          <li>Panneau de commande simple et clair (interrupteur, marche arrière, potentiomètre pour régler la vitesse d'avancement du tapis)</li>
          <li>Quatre roues pivotantes avec verrou qui garantissent la mobilité</li>
          <li>L'ensemble de l'appareil est en acier galvanisé à chaud</li>
        </ul>

        <h2>Données techniques</h2>
        <table className="specs-table">
          <tbody>
            <tr>
              <td>Largeur maximale du tapis</td>
              <td>3,0 m</td>
            </tr>
            <tr>
              <td>Efficacité</td>
              <td>250 m²/heure</td>
            </tr>
            <tr>
              <td>Longueur</td>
              <td>3300 mm</td>
            </tr>
            <tr>
              <td>Largeur</td>
              <td>800 mm</td>
            </tr>
            <tr>
              <td>Hauteur</td>
              <td>1400 mm</td>
            </tr>
            <tr>
              <td>Poids</td>
              <td>300 kg</td>
            </tr>
            <tr>
              <td>Matériau</td>
              <td>Galvanisé à chaud</td>
            </tr>
            <tr>
              <td>Type de suspension</td>
              <td>Roues</td>
            </tr>
            <tr>
              <td>Puissance du moteur</td>
              <td>3,7 kW</td>
            </tr>
            <tr>
              <td>Connexion</td>
              <td>16A 5P 400V</td>
            </tr>
            <tr>
              <td>Inverse</td>
              <td>Oui</td>
            </tr>
            <tr>
              <td>Longueur du cordon d'alimentation</td>
              <td>2 mètres</td>
            </tr>
            <tr>
              <td>Nombre de bandes battantes</td>
              <td>36</td>
            </tr>
            <tr>
              <td>Possibilité de remplacer les sangles</td>
              <td>Oui</td>
            </tr>
            <tr>
              <td>Garantie</td>
              <td>12 mois</td>
            </tr>
            <tr>
              <td>Garantie prolongée</td>
              <td>Facultatif</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    id: 2,
    name: "Centrifugeuse à tapis de mosquée",
    img: assets.affichage.centiMosquee,
    link: "/produits/2",
    details: (
      <div className="product-details">
        <h2>Avantages</h2>
        <ul>
          <li>Fonctionnement très silencieux</li>
          <li>Rotor de 200 cm de long</li>
          <li>Rotor équilibré électroniquement</li>
          <li>Tuyau en acier inoxydable INOX sans soudure de 3 mm</li>
          <li>Anneau de renfort de roue</li>
          <li>3 ans de garantie sur le rotor</li>
          <li>Joint de porte</li>
          <li>Charnières de porte boulonnées</li>
          <li>Système de roulement innovant</li>
          <li>Panneau de commande clair et simple</li>
          <li>Potentiomètre de temps de travail et marche arrière</li>
          <li>Fin de course protégeant contre le démarrage lorsque la porte est ouverte</li>
          <li>Poignée d'ouverture de porte améliorée</li>
          <li>Roues amovibles avec supports</li>
          <li>Possibilité d'insérer l'appareil à travers des portes étroites</li>
          <li>Corps de la centrifugeuse en acier épais, galvanisé à chaud</li>
          <li>Wrap de voiture avec des graphismes esthétiques facilitant l'entretien</li>
          <li>Documentation technique - Certificat CE et CE</li>
          <li>Moteur économique d'une puissance de 2,2 kW</li>
        </ul>

        <h2>Données techniques</h2>
        <table className="specs-table">
          <tbody>
            <tr>
              <td>Largeur maximale du tapis</td>
              <td>2,0 m</td>
            </tr>
            <tr>
              <td>Efficacité</td>
              <td>50 m²/heure</td>
            </tr>
            <tr>
              <td>Longueur</td>
              <td>2350 mm</td>
            </tr>
            <tr>
              <td>Largeur</td>
              <td>920 mm</td>
            </tr>
            <tr>
              <td>Hauteur</td>
              <td>1000 mm</td>
            </tr>
            <tr>
              <td>Poids</td>
              <td>250 kg</td>
            </tr>
            <tr>
              <td>Diamètre du rotor</td>
              <td>320 mm</td>
            </tr>
            <tr>
              <td>Diamètre du couvercle du rotor</td>
              <td>400 mm</td>
            </tr>
            <tr>
              <td>Matériau du rotor</td>
              <td>Acier inoxydable</td>
            </tr>
            <tr>
              <td>Matériel</td>
              <td>Galvanisé à chaud</td>
            </tr>
            <tr>
              <td>Hauteur de chargement</td>
              <td>310 mm</td>
            </tr>
            <tr>
              <td>Nombre de vidanges d'eau</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Diamètre des évacuations d'eau</td>
              <td>Ø75 mm</td>
            </tr>
            <tr>
              <td>Type de suspension</td>
              <td>Roues</td>
            </tr>
            <tr>
              <td>Puissance du moteur</td>
              <td>2,2 kW</td>
            </tr>
            <tr>
              <td>Régime moteur</td>
              <td>1100 tr/min</td>
            </tr>
            <tr>
              <td>Connexion</td>
              <td>16A 5P 400V</td>
            </tr>
            <tr>
              <td>Garantie</td>
              <td>12 mois</td>
            </tr>
            <tr>
              <td>Garantie prolongée</td>
              <td>NON</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  
  {
    id: 3,
    name: "Centrifugeuse à tapis",
    img: assets.affichage.centrifugeuse,
    link: "/produits/4",
    details: (
      <div className="product-details">
        <h2>Avantages</h2>
        <ul>
          <li>Fonctionnement très silencieux</li>
          <li>Rotor de 200 cm de long</li>
          <li>Rotor équilibré électroniquement</li>
          <li>Tuyau en acier inoxydable INOX sans soudure de 3 mm</li>
          <li>Anneau de renfort de roue</li>
          <li>3 ans de garantie sur le rotor</li>
          <li>Joint de porte</li>
          <li>Charnières de porte boulonnées</li>
          <li>Système de roulement innovant</li>
          <li>Panneau de commande clair et simple</li>
          <li>Potentiomètre de temps de travail et marche arrière</li>
          <li>Fin de course protégeant contre le démarrage lorsque la porte est ouverte</li>
          <li>Poignée d'ouverture de porte améliorée</li>
          <li>Roues amovibles avec supports</li>
          <li>Possibilité d'insérer l'appareil à travers des portes étroites</li>
          <li>Corps de la centrifugeuse en acier épais, galvanisé à chaud</li>
          <li>Wrap de voiture avec des graphismes esthétiques facilitant l'entretien</li>
          <li>Documentation technique - Certificat CE et CE</li>
          <li>Moteur économique d'une puissance de 2,2 kW</li>
        </ul>

        <h2>Données techniques</h2>
        <table className="specs-table">
          <tbody>
            <tr>
              <td>Largeur maximale du tapis</td>
              <td>2,0 m</td>
            </tr>
            <tr>
              <td>Efficacité</td>
              <td>50 m²/heure</td>
            </tr>
            <tr>
              <td>Longueur</td>
              <td>2350 mm</td>
            </tr>
            <tr>
              <td>Largeur</td>
              <td>920 mm</td>
            </tr>
            <tr>
              <td>Hauteur</td>
              <td>1000 mm</td>
            </tr>
            <tr>
              <td>Poids</td>
              <td>250 kg</td>
            </tr>
            <tr>
              <td>Diamètre du rotor</td>
              <td>320 mm</td>
            </tr>
            <tr>
              <td>Diamètre du couvercle du rotor</td>
              <td>400 mm</td>
            </tr>
            <tr>
              <td>Matériau du rotor</td>
              <td>Acier inoxydable</td>
            </tr>
            <tr>
              <td>Matériel</td>
              <td>Galvanisé à chaud</td>
            </tr>
            <tr>
              <td>Hauteur de chargement</td>
              <td>310 mm</td>
            </tr>
            <tr>
              <td>Nombre de vidanges d'eau</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Diamètre des évacuations d'eau</td>
              <td>Ø75 mm</td>
            </tr>
            <tr>
              <td>Type de suspension</td>
              <td>Roues</td>
            </tr>
            <tr>
              <td>Puissance du moteur</td>
              <td>2,2 kW</td>
            </tr>
            <tr>
              <td>Régime moteur</td>
              <td>1100 tr/min</td>
            </tr>
            <tr>
              <td>Connexion</td>
              <td>16A 5P 400V</td>
            </tr>
            <tr>
              <td>Garantie</td>
              <td>12 mois</td>
            </tr>
            <tr>
              <td>Garantie prolongée</td>
              <td>NON</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    id: 4,
    name: "Table de roulage et d'emballage",
    img: assets.affichage.emballage,
    link: "/produits/5",
    details: (
      <div className="product-details">
        <h2>Avantages</h2>
        <ul>
          <li>Capacité jusqu'à 40 tapis par heure</li>
          <li>Mobilité totale de l'appareil</li>
          <li>Plateforme de capture de tapis ajourée pliable</li>
          <li>Alimentation 230V</li>
          <li>Panneau de commande simple et clair</li>
          <li>Régulation de la vitesse d'enroulement</li>
          <li>Deux interrupteurs d'arrêt d'urgence</li>
          <li>Éclairage LED pour le contrôle qualité</li>
          <li>Étagère ajourée sur toute la longueur</li>
          <li>Prix attractif</li>
        </ul>

        <h2>Données techniques</h2>
        <table className="specs-table">
          <tbody>
            <tr>
              <td>Largeur maximale du tapis</td>
              <td>3,0 m</td>
            </tr>
            <tr>
              <td>Efficacité</td>
              <td>40 m²/heure</td>
            </tr>
            <tr>
              <td>Longueur</td>
              <td>3420 mm</td>
            </tr>
            <tr>
              <td>Largeur</td>
              <td>1400 mm</td>
            </tr>
            <tr>
              <td>Hauteur</td>
              <td>1770 mm</td>
            </tr>
            <tr>
              <td>Poids</td>
              <td>315 kg</td>
            </tr>
            <tr>
              <td>Matériel</td>
              <td>Galvanisé à chaud</td>
            </tr>
            <tr>
              <td>Puissance du moteur</td>
              <td>0,75 kW</td>
            </tr>
            <tr>
              <td>Régime moteur</td>
              <td>Réglable</td>
            </tr>
            <tr>
              <td>Connexion</td>
              <td>230 V</td>
            </tr>
            <tr>
              <td>Onduleur</td>
              <td>Oui</td>
            </tr>
            <tr>
              <td>Inverse</td>
              <td>Oui</td>
            </tr>
            <tr>
              <td>Garantie</td>
              <td>12 mois</td>
            </tr>
            <tr>
              <td>Garantie prolongée</td>
              <td>Facultatif</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    id: 5,
    name: "Table de roulage et d'emballage avec brosse",
    img: assets.affichage.emballageBrosse,
    link: "/produits/6",
    details: (
      <div className="product-details">
        <h2>Avantages</h2>
        <ul>
          <li>Capacité jusqu'à 40 tapis par heure</li>
          <li>Mobilité totale de l'appareil</li>
          <li>Plateforme de capture de tapis ajourée pliable</li>
          <li>Alimentation 230V</li>
          <li>Panneau de commande simple et clair</li>
          <li>Régulation de la vitesse d'enroulement</li>
          <li>Deux interrupteurs d'arrêt d'urgence</li>
          <li>Éclairage LED pour le contrôle qualité</li>
          <li>Étagère ajourée sur toute la longueur</li>
          <li>Prix attractif</li>
        </ul>

        <h2>Données techniques</h2>
        <table className="specs-table">
          <tbody>
            <tr>
              <td>Largeur maximale du tapis</td>
              <td>3,0 m</td>
            </tr>
            <tr>
              <td>Efficacité</td>
              <td>40 m²/heure</td>
            </tr>
            <tr>
              <td>Longueur</td>
              <td>3420 mm</td>
            </tr>
            <tr>
              <td>Largeur</td>
              <td>1400 mm</td>
            </tr>
            <tr>
              <td>Hauteur</td>
              <td>1770 mm</td>
            </tr>
            <tr>
              <td>Poids</td>
              <td>315 kg</td>
            </tr>
            <tr>
              <td>Matériel</td>
              <td>Galvanisé à chaud</td>
            </tr>
            <tr>
              <td>Puissance du moteur</td>
              <td>0,75 kW</td>
            </tr>
            <tr>
              <td>Régime moteur</td>
              <td>Réglable</td>
            </tr>
            <tr>
              <td>Connexion</td>
              <td>230 V</td>
            </tr>
            <tr>
              <td>Onduleur</td>
              <td>Oui</td>
            </tr>
            <tr>
              <td>Inverse</td>
              <td>Oui</td>
            </tr>
            <tr>
              <td>Garantie</td>
              <td>12 mois</td>
            </tr>
            <tr>
              <td>Garantie prolongée</td>
              <td>Facultatif</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    id: 6,
    name: "Machine à laver les tapis",
    img: assets.affichage.lavage,
    link: "/produits/7",
    details: (
      <div className="product-details">
        <h2>Avantages</h2>
        <ul>
          <li>Capacité jusqu'à 15 tapis par heure</li>
          <li>Possibilité de laver 1 à 3 tapis en même temps</li>
          <li>Possibilité de fonctionnement continu sans éteindre l'appareil</li>
          <li>Trois sections de lavage</li>
          <li>Pompe à pression intégrée 92 l/min</li>
          <li>Un tuyau mobile qui facilite le transfert des tapis vers un chariot de transport incliné</li>
          <li>Deux étagères pratiques pour ranger des produits chimiques ou des accessoires</li>
          <li>Pas besoin d'alimentation en air comprimé</li>
          <li>Panneau de commande simple</li>
          <li>Fonction de roulement de tapis</li>
          <li>Régulation en douceur de la pression des brosses à disque avec un actionneur électrique jusqu'à 100 kg</li>
          <li>Remplacement simple et rapide des brosses</li>
          <li>Régulation de la vitesse d'avance du tapis avec possibilité d'inversion</li>
          <li>Interrupteur d'arrêt d'urgence</li>
          <li>Régulation de la plage de fonctionnement des sections de lavage et de rinçage</li>
          <li>Les moteurs et les éléments de transmission cachés derrière les capots garantissent une sécurité à 100 %</li>
          <li>Possibilité d'inspection visuelle du tapis pendant tout le processus de lavage</li>
          <li>Appareil exploité par un seul opérateur</li>
          <li>Petite taille et poids permettant une installation dans de petites blanchisseries</li>
          <li>Appareil équipé de roues pivotantes</li>
        </ul>

        <h2>Données techniques</h2>
        <table className="specs-table">
          <tbody>
            <tr>
              <td>Largeur maximale du tapis</td>
              <td>3,0 m</td>
            </tr>
            <tr>
              <td>Efficacité</td>
              <td>90 m²/heure</td>
            </tr>
            <tr>
              <td>Longueur</td>
              <td>3450 mm</td>
            </tr>
            <tr>
              <td>Largeur</td>
              <td>1230 mm</td>
            </tr>
            <tr>
              <td>Hauteur</td>
              <td>1580 mm</td>
            </tr>
            <tr>
              <td>Poids</td>
              <td>560 kg</td>
            </tr>
            <tr>
              <td>Matériel</td>
              <td>Galvanisé à chaud</td>
            </tr>
            <tr>
              <td>Hauteur de chargement</td>
              <td>800 mm</td>
            </tr>
            <tr>
              <td>Type de suspension</td>
              <td>Roues</td>
            </tr>
            <tr>
              <td>Puissance du moteur</td>
              <td>5,9 kW</td>
            </tr>
            <tr>
              <td>Connexion</td>
              <td>16A 5P 400V</td>
            </tr>
            <tr>
              <td>Onduleur</td>
              <td>Oui</td>
            </tr>
            <tr>
              <td>Inverse</td>
              <td>Oui</td>
            </tr>
            <tr>
              <td>Garantie</td>
              <td>12 mois</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    id: 7,
    name: "Machine à laver et centrifugeuse 2 en 1",
    img: assets.affichage.lavage2en1,
    link: "/produits/8",
    details: (
      <div className="product-details">
        <h2>Avantages</h2>
        <ul>
          <li>Capacité jusqu'à 15 tapis par heure</li>
          <li>Possibilité de laver 1 à 3 tapis en même temps</li>
          <li>Possibilité de fonctionnement continu sans éteindre l'appareil</li>
          <li>Trois sections de lavage</li>
          <li>Pompe à pression intégrée 92 l/min</li>
          <li>Un tuyau mobile qui facilite le transfert des tapis vers un chariot de transport incliné</li>
          <li>Deux étagères pratiques pour ranger des produits chimiques ou des accessoires</li>
          <li>Pas besoin d'alimentation en air comprimé</li>
          <li>Panneau de commande simple</li>
          <li>Fonction de roulement de tapis</li>
          <li>Régulation en douceur de la pression des brosses à disque avec un actionneur électrique jusqu'à 100 kg</li>
          <li>Remplacement simple et rapide des brosses</li>
          <li>Régulation de la vitesse d'avance du tapis avec possibilité d'inversion</li>
          <li>Interrupteur d'arrêt d'urgence</li>
          <li>Régulation de la plage de fonctionnement des sections de lavage et de rinçage</li>
          <li>Les moteurs et les éléments de transmission cachés derrière les capots garantissent une sécurité à 100 %</li>
          <li>Possibilité d'inspection visuelle du tapis pendant tout le processus de lavage</li>
          <li>Appareil exploité par un seul opérateur</li>
          <li>Petite taille et poids permettant une installation dans de petites blanchisseries</li>
          <li>Appareil équipé de roues pivotantes</li>
        </ul>

        <h2>Données techniques</h2>
        <table className="specs-table">
          <tbody>
            <tr>
              <td>Largeur maximale du tapis</td>
              <td>3,0 m</td>
            </tr>
            <tr>
              <td>Efficacité</td>
              <td>90 m²/heure</td>
            </tr>
            <tr>
              <td>Longueur</td>
              <td>3450 mm</td>
            </tr>
            <tr>
              <td>Largeur</td>
              <td>1230 mm</td>
            </tr>
            <tr>
              <td>Hauteur</td>
              <td>1580 mm</td>
            </tr>
            <tr>
              <td>Poids</td>
              <td>560 kg</td>
            </tr>
            <tr>
              <td>Matériel</td>
              <td>Galvanisé à chaud</td>
            </tr>
            <tr>
              <td>Hauteur de chargement</td>
              <td>800 mm</td>
            </tr>
            <tr>
              <td>Type de suspension</td>
              <td>Roues</td>
            </tr>
            <tr>
              <td>Puissance du moteur</td>
              <td>5,9 kW</td>
            </tr>
            <tr>
              <td>Connexion</td>
              <td>16A 5P 400V</td>
            </tr>
            <tr>
              <td>Onduleur</td>
              <td>Oui</td>
            </tr>
            <tr>
              <td>Inverse</td>
              <td>Oui</td>
            </tr>
            <tr>
              <td>Garantie</td>
              <td>12 mois</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    id: 8,
    name: "Cabine de séchage",
    img: assets.affichage.secheuse,
    link: "/produits/9",
    details: (
      <div className="product-details">
        <h2>Avantages</h2>
        <ul>
          <li>Capacités disponibles : 12 tapis et 25 tapis</li>
          <li>Structure : conteneur en tube d'acier inoxydable, complètement isolé avec un panneau sandwich de 4 cm</li>
          <li>Ventilation : ventilateur de 80 cm de diamètre, positionné à gauche</li>
          <li>Déshumidification : intégré pour optimiser le séchage</li>
          <li>Barres de suspension : conçues pour des tapis de 4 mètres de large, ancrées sur des chaînes de convoyeurs à déplacement manuel</li>
          <li>Portes : porte avant pour faciliter le chargement et le déchargement des tapis</li>
          <li>Économie d'énergie : système de séchage parmi les moins consommateurs du marché</li>
          <li>Temps de séchage complet : 20 heures maximum (réduit à 12 heures pour des tapis fins et en quantité réduite)</li>
        </ul>

        <h2>Données techniques</h2>
        <table className="specs-table">
          <tbody>
            <tr>
              <td>Sèche-linge</td>
              <td>12 tapis</td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>longueur 6,10m, largeur 1,20m. haut 2m.</td>
            </tr>
            <tr>
              <td>Puissance</td>
              <td>2kw</td>
            </tr>
            <tr>
              <td>Poids</td>
              <td>500 kg</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
];

export default products;