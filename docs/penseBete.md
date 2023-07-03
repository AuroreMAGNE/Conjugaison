# Créer un fichier package.json : npm init -y

# Installation  de packages : 

## Nodemon : npm i nodemon
Dans le fichier package.json, rajouter dans la section scripts, après "test" : "dev": "nodemon app.js" ->, Dans le terminal écrire : run dev permet de lancer plus rapidement nodemon.
Avant faire : npm run dev

## Express : npm i express
Framework pour Node.js (un ensemble de fonctionnalités prêtes à l'usage qui va servir de base, de fondation, à une application.) qui va nous aider à créer un serveur web.
 - On importe le module dans notre application :
const express = require('express');
 - Puis on initialise notre serveur web : 
const app = express();
 - Ensuite, nous allons créer une route pour servir la page d'accueil sinon c'est une page 404: 
app.get('/', (request,response) =>{
    response.send('Hello World!");
});
 - Et enfin, nous demandons à Express de démarrer le serveur et de lui dire d'écouter sur un port précis: 
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});
=>Le serveur minimaliste est créé!

# Pour garder les étapes des versions : git init

# Création d'un dossier .gitignore afin d'ignorer les dossiers suivants dans git : 
node_modules/
.env

# Création du commit initial :
git add .
git commit -m "initial commit"

# Création du repo sur github:
new
vérifier le owner
mettre le titre du repo
create

# connexion à une base remote :
git remote

git push
