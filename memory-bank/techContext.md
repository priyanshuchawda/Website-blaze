# Tech Context

## Technologies Used
- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.2
- **Styling Framework:** Tailwind CSS 3.4.1
- **Language:** TypeScript 5.5.3
- **Package Manager:** npm
- **Linting:** ESLint 9.9.1
- **PostCSS:** 8.4.35
- **Routing:** React Router DOM 6.23.1
- **Animation:** Framer Motion 11.0.8
- **Icons:** Lucide React 0.344.0
- **Particles:** tsParticles 2.12.0 & React tsParticles 2.12.2
- **Text Animation:** React Type Animation 3.2.0
- **Deployment:** GitHub Pages (via GitHub Actions)

## Development Setup
- Node.js environment (v18+)
- npm for package management
- Vite for local development server and build process
- GitHub Actions for CI/CD

## Technical Constraints
- Frontend-only application.
- Data is currently local (`src/data/`). If dynamic content is needed, an API integration would be a future consideration.
- GitHub Pages hosting (static site deployment)
- Client-side routing handled by HashRouter for GitHub Pages compatibility

## Dependencies
### Production Dependencies:
- react: ^18.3.1
- react-dom: ^18.3.1
- react-router-dom: ^6.23.1
- framer-motion: ^11.0.8
- lucide-react: ^0.344.0
- react-tsparticles: ^2.12.2
- tsparticles: ^2.12.0
- react-type-animation: ^3.2.0
- react-intersection-observer: ^9.8.1

### Development Dependencies:
- typescript: ^5.5.3
- vite: ^5.4.2
- @vitejs/plugin-react: ^4.3.1
- eslint: ^9.9.1
- tailwindcss: ^3.4.1
- postcss: ^8.4.35
- autoprefixer: ^10.4.18
- @types/react: ^18.3.5
- @types/react-dom: ^18.3.0

## Tool Usage Patterns
- `npm install` for dependency management.
- `npm run dev` for local development.
- `npm run build` for production builds.
- Tailwind CSS utility classes for styling.
- TypeScript for type checking during development.
- GitHub Actions for automated deployment to GitHub Pages.
- Framer Motion for animations and transitions.
- Lucide React for consistent icons.

## Deployment Configuration
- GitHub Pages for hosting at https://team-4blaze.github.io/Website/
- GitHub Actions workflow in `.github/workflows/deploy.yml`
- HashRouter for client-side routing compatibility with GitHub Pages
- Custom 404.html page with redirection logic
- Base path configured in Vite config (`base: './'`)

## Performance Optimizations
- Lazy loading of images
- Code splitting via dynamic imports (potential future enhancement)
- Motion preferences respecting user settings
- Optimized animations with Framer Motion
- Efficient rendering with React 18

## Tool Usage Patterns
- `npm install` for dependency management.
- `npm run dev` for local development.
- `npm run build` for production builds.
- Tailwind CSS utility classes for styling.
- TypeScript for type checking during development.

## Areas for Improvement (Technical)
- **Dependency Updates:** Ensure all packages are updated to their latest stable versions to leverage new features, performance improvements, and security fixes.
- **Build Process Optimization:** Further fine-tune Vite configuration for smaller bundle sizes and faster builds (e.g., aggressive tree-shaking, image optimization plugins).
- **Code Quality Tools:** Integrate Prettier for consistent code formatting, and potentially more rigorous linting rules.
- **Testing Frameworks:** Introduce Jest/React Testing Library for unit/integration tests, and Cypress/Playwright for E2E tests.
- **Routing Library:** Explicitly define and potentially update the routing library (e.g., React Router DOM).
- **Environment Variables:** Proper management of environment variables for different deployment environments.
- **CI/CD Integration:** Set up automated build, test, and deployment pipelines.
