# Déploiement sur GitHub Pages

## Configuration GitHub Pages

Pour activer le déploiement automatique sur GitHub Pages :

1. **Aller dans les paramètres du repo**
   - Ouvrir https://github.com/ljclaeyssen/demo-concept/settings/pages

2. **Configurer la source de déploiement**
   - Dans la section "Build and deployment"
   - Source : Sélectionner **"GitHub Actions"**

3. **Push vers GitHub**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push
   ```

4. **Le déploiement se lance automatiquement**
   - Le workflow se lance à chaque push sur `main` ou `master`
   - Voir la progression dans l'onglet "Actions"
   - Une fois terminé, l'application sera disponible à : https://ljclaeyssen.github.io/demo-concept/

## Déploiement manuel

Pour tester le build localement avant de déployer :

```bash
npm run build:gh-pages
```

Cela génère le build avec le bon `base-href` pour GitHub Pages.

## Architecture du déploiement

- **Workflow** : `.github/workflows/deploy.yml`
- **Script de génération** : `scripts/generate-code-constants.mjs`
- **Build output** : `dist/demo-concept/browser/`

Le workflow :
1. Génère les constantes de code
2. Build l'application avec `--base-href=/demo-concept/`
3. Ajoute un fichier `.nojekyll` pour que GitHub ne traite pas les fichiers Angular
4. Déploie sur GitHub Pages

## Commandes disponibles

- `npm start` : Développement local
- `npm run build` : Build production
- `npm run build:gh-pages` : Build pour GitHub Pages
- `npm run generate:code` : Génère les constantes de code
