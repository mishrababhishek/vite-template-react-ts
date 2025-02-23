# Vite Template React TypeScript

A modern, feature-rich template for building React applications with TypeScript and Vite.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast build tool
- ⚛️ [React 19](https://react.dev/) with TypeScript
- 🔒 Type-safe development with TypeScript
- 📝 ESLint for code linting
- 💅 Prettier for code formatting
- 🚦 React Router for navigation
- 🛡️ React Error Boundary for error handling

## Getting Started

1. Create a new project using degit:

```sh
npx degit username/vite-template-react-ts my-project
cd my-project
```

2. Install dependencies:

```sh
npm install
# or
yarn install
```

3. Start development server:

```sh
npm run dev
# or
yarn dev
```

## Available Scripts

- `npm run dev` / `yarn dev` - Start development server
- `npm run build` / `yarn build` - Build for production
- `npm run preview` / `yarn preview` - Preview production build
- `npm run lint` / `yarn lint` - Lint code with ESLint
- `npm run format` / `yarn format` - Format code with Prettier

## ESLint Configuration

The project includes a robust ESLint setup with:

- TypeScript support
- React Hooks linting
- React Refresh rules
- Prettier integration

To enable type-aware linting, update [`eslint.config.js`](eslint.config.js):

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

## Project Structure

```
src/
  ├── app/          # App core components
  ├── assets/       # Static assets
  ├── features/     # Feature modules
  └── shared/       # Shared utilities and types
```

## License

MIT
