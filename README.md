# AutoPulse

AutoPulse is a React + Vite automotive platform UI with pages for inventory, financing, trade-in, and contact workflows.

## What AutoPulse Is About

AutoPulse is designed as a modern digital dealership experience that helps shoppers and dealer teams move from discovery to decision faster.

- Browse curated vehicle listings with clear specs and visual-first presentation.
- Explore financing options to understand payment pathways before committing.
- Start trade-in conversations to estimate value and reduce purchase friction.
- Contact the team through a unified support/sales entry point.
- Deliver a premium, responsive interface optimized for speed and clarity.

### Target Users

- **Car Shoppers:** Discover inventory, compare options, and submit interest quickly.
- **Sales Teams:** Capture qualified leads and reduce back-and-forth in early conversations.
- **Finance Teams:** Guide buyers through financing readiness and payment-related questions.
- **Dealership Operations:** Present a consistent, modern digital storefront across devices.

## Tech Stack

- React 19
- Vite 8
- React Router
- Tailwind CSS 4
- Lucide React icons
- ESLint (React Hooks + React Refresh rules)

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run the app in development

```bash
npm run dev
```

### 3) Lint the project

```bash
npm run lint
```

### 4) Build for production

```bash
npm run build
```

### 5) Preview production build

```bash
npm run preview
```

## Project Structure

```text
src/
	components/
	contexts/
		themeContext.jsx
	pages/
```

This structure keeps React Fast Refresh happy and avoids `react-refresh/only-export-components` violations.

## Security Notes

- Do not commit API keys or secrets to source files.
- Use environment variables for sensitive values (Vite convention: `VITE_*`).
- The Contact page map embed uses a keyless Google Maps URL to avoid hardcoded secret leakage.

## Status

- Lint: passing
- Build: passing
