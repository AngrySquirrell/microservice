# Exercice 1 - Réponses :

1. Le bouton "JOIN" est-il devenu vert ?
   Non, a cause des autres instanciasions de la classe `.button` qui s'override les une les autres
2. Les autres boutons ont-ils change de couleur aussi ?
   Oui
3. Si oui, pourquoi selon vous ?
   Car ils partagent la même classe

### -> Pour changer celà, nous devont créer une autre classe ou renommer celle actuelle pour trouver le résultat attendu

---

# Exercice 2 - Réponses :

A quoi sert le `Shell` dans le fichier `webpack.config.js` :
Le Shell est l'application hôte qui sert de conteneur principal sur le port 3000.
Ça permet de partager une seule instance de react et react-dom entre les modules.

---

# Exercice 3 - Réponses :

Qu'est ce qu'est le `remoteEntry.js` :
C'est le fichier manifeste généré automatiquement par Webpack quand un micro-frontend se build. Il contient la carte d'identité du MFE : son nom, les modules qu'il expose, et les dépendances partagées.

---

# Exercice 4 - Réponses :

Pourquoi on n'importe pas directement le state du Lobby dans le Header :
Parce que Lobby et Header sont deux applications indépendantes. Ils n'ont aucun accès direct à la mémoire ou au React de l'autre. Chaque MFE a son propre arbre React avec ses propres hooks et composants.
