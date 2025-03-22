# 🧠 Pokémon List — Redux Toolkit + Next.js + TypeScript

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Idiru/next-project
cd next-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open the app

Go to [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Tech Stack

- Next.js
- Redux Toolkit
- React Redux
- TypeScript
- Tailwind CSS

---

## 🚀 Feature Overview

Displays a list of the first 10 Pokémon using data fetched from the PokéAPI, with global state management via Redux Toolkit and full TypeScript support.

---

## 🧩 Implementation Summary

### Redux Slice

- A dedicated slice was created to manage the Pokémon list.
- `createAsyncThunk` handles the asynchronous API call.
- The slice manages loading, success, and error states.
- Data is typed with TypeScript.

### TypeScript Integration

- Defined types for `PokemonSummary` and the API response.
- The slice state is typed using a `PokemonState` interface.
- `RootState` and `AppDispatch` are exported to ensure fully typed Redux usage.

### Store Configuration

- All reducers are registered in the central `store.ts` file.
- Store types are exported for reuse throughout the app.

### Redux Provider

- A custom `ReduxProvider` wraps the application.
- Integrated into `layout.tsx` so the Redux store is available globally.

### Custom Hooks

- `useAppDispatch` and `useAppSelector` were created for type-safe Redux usage.

### Pages
- The `Home` which is displaying the list of Pokemons
- The `PokemonDetailPage` which is displaying the detail of Pokemon after clicking on a `PokemonBlock`, the content of this page dynamically generated thanks an API done with the parameter `name` inside the url

### Component Usage

- The `fetchPokemonList` action is dispatched in a `useEffect` on mount.
- The `PokemonList` to get the list of Pokemons 
- The `PokemonBlock` mapped inside the `PokemonList` to display each Pokemon, to click on it redirect to the related Pokemon detail page
- Loading and error states are displayed in the UI.
