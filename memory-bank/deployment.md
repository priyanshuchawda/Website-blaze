# Deployment Documentation

## GitHub Pages Deployment

The Team Blaze website is deployed to GitHub Pages at [https://team-4blaze.github.io/Website/](https://team-4blaze.github.io/Website/).

### Deployment Configuration

#### GitHub Repository
- **Repository URL:** https://github.com/Team-4Blaze/Website.git
- **Branch for Deployment:** main

#### GitHub Actions Workflow
The website uses GitHub Actions for automated deployment to GitHub Pages. The workflow is defined in `.github/workflows/deploy.yml`.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build project
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    name: Deploy
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### Client-Side Routing Configuration

To support client-side routing with React Router on GitHub Pages, we've implemented the following:

1. **HashRouter Usage:** Changed from BrowserRouter to HashRouter in `App.tsx` to support GitHub Pages routing.

2. **Custom 404.html Page:** Added a custom 404.html page that redirects back to the main page with the requested path as a query parameter.

3. **URL Parameter Handling:** Added script in index.html to detect and process the path from URL parameters.

4. **Base Path Configuration:** Updated the Vite configuration with `base: './'` to use relative paths.

### Package.json Configuration

Updated package.json with the GitHub Pages homepage:

```json
{
  "name": "team-blaze-website",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "homepage": "https://team-4blaze.github.io/Website/",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  ...
}
```

### Required Files for GitHub Pages

- **`.nojekyll`**: Added to the public folder to prevent GitHub Pages from processing files with Jekyll.
- **`404.html`**: Custom 404 page for handling client-side routing.

## Manual Deployment Instructions

If needed, the website can also be deployed manually:

1. **Build the Project:**
   ```bash
   npm run build
   ```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

3. **Verify GitHub Actions Workflow:**
   - Go to the repository on GitHub
   - Navigate to Actions tab
   - Ensure the "Deploy to GitHub Pages" workflow has run successfully

## Post-Deployment Verification

After deployment, verify the following:

1. **Website Loading:** Ensure the website loads correctly at https://team-4blaze.github.io/Website/
2. **Navigation:** Test all navigation links to ensure they work properly with HashRouter
3. **Responsive Design:** Test the website on various device sizes
4. **Dark Mode:** Test the dark mode toggle functionality
5. **Animations:** Verify that animations and transitions work correctly
6. **Images:** Ensure all images load properly
7. **Performance:** Check for any performance issues with large animations or components

## Future Deployment Considerations

1. **Custom Domain:** If desired, a custom domain can be configured in the GitHub Pages settings.
2. **CDN Integration:** Consider using a CDN for improved global performance.
3. **Analytics:** Add analytics tracking to monitor user behavior and website performance.
4. **Performance Optimization:** Implement code splitting, lazy loading, and other performance optimizations if needed.
5. **Monitoring:** Set up uptime and performance monitoring.
