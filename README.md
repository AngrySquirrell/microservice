# Exercice 1 - Réponses :

## Validation du Checkpoint

Apres avoir fait la modification, repondez a ces questions :

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
