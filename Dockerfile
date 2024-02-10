# Étape de construction de l'application Node.js
FROM node:14 AS build

# Installer les outils nécessaires pour la construction
RUN apk add --no-cache npm@7.24.0

# ... reste du Dockerfile ...
# Étape de construction de l'application Node.js
FROM node:14 AS build

# Mettre à jour les informations de dépôt et installer npm
#RUN apk update && apk add --no-cache npm

# ... reste du Dockerfile ...
# Étape de construction de l'application Node.js
# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source de l'application
COPY . .

# Construire l'application si nécessaire
RUN npm run build

# Étape de production avec Apache
FROM httpd:2.4

# Copier les fichiers de configuration Apache personnalisés si nécessaire
# COPY httpd.conf /usr/local/apache2/conf/httpd.conf

# Copier les fichiers de l'application construite dans le répertoire de document root d'Apache
COPY --from=build /app/build /usr/local/apache2/htdocs/

# Exposer le port  80 pour le serveur web Apache
EXPOSE  80

# Démarrer Apache en premier plan
CMD ["httpd-foreground"]
