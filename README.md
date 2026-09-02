# Electro — React + CSS version

Portage fidèle du template HTML/CSS "Electro" en application React (Vite),
sans aucune modification du design (même CSS, mêmes images, même markup).

## Installation

```bash
npm install
npm run dev       # serveur de développement (http://localhost:5173)
npm run build     # build de production dans dist/
npm run preview   # sert le build de production localement
```

## Structure

```
src/
├── components/
│   ├── Header.jsx        # top bar + logo + recherche + panier + menu burger
│   ├── Navigation.jsx     # barre de navigation principale
│   ├── Footer.jsx         # pied de page
│   ├── Newsletter.jsx     # bandeau newsletter
│   ├── Breadcrumb.jsx     # fil d'ariane réutilisable
│   ├── ProductCard.jsx    # carte produit (grille boutique / accueil)
│   ├── ProductWidget.jsx  # mini carte produit (sidebar / slick "top selling")
│   └── Layout.jsx         # assemble Header + Navigation + <Outlet/> + Footer
├── pages/
│   ├── Home.jsx           # accueil (index.html)
│   ├── Store.jsx          # boutique + filtres (store.html)
│   ├── Product.jsx        # fiche produit (product.html)
│   └── Checkout.jsx       # commande (checkout.html)
├── App.jsx                 # routes React Router
└── main.jsx                 # point d'entrée

public/
├── css/    # Bootstrap, Slick, nouiSlider, Font Awesome, style.css original
├── js/     # jQuery, Bootstrap, Slick, nouiSlider, jquery.zoom (libs originales)
├── fonts/  # polices Font Awesome
└── img/    # images du template original
```

## Notes techniques

- Le CSS original (`style.css`) n'a pas été touché : toute la mise en page,
  les couleurs et la typographie restent identiques au template de départ.
- Les plugins jQuery du template (Slick slider, noUiSlider, jquery.zoom,
  Bootstrap dropdown/tabs) sont conservés et initialisés depuis des
  `useEffect` React, avec nettoyage au démontage des composants.
- Navigation multi-pages gérée par React Router (`/`, `/store`, `/product`,
  `/checkout`) au lieu des fichiers `.html` séparés du template original.
