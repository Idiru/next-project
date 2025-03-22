## 🧠 Pokémon List — Redux Toolkit + Next.js + TypeScript

### ⚙️ Tech Stack

- Next.js (App Router)
- Redux Toolkit
- React Redux
- TypeScript
- Tailwind CSS (optional)

---

## 🚀 Feature Overview

Displays a list of the first 151 Pokémon using data fetched from the PokéAPI, with global state management via Redux Toolkit and full TypeScript support.

---

## 🧩 Implementation Summary

### 1. Redux Slice

- A dedicated slice was created for managing the Pokémon list.
- Uses `createAsyncThunk` to handle the asynchronous API call.
- Manages loading, success, and error states.
- The data is typed using TypeScript interfaces.

### 2. TypeScript Integration

- Defined types for `PokemonSummary` and API response structure.
- The slice state is typed (`PokemonState`) for better reliability.
- `RootState` and `AppDispatch` are exported to ensure typed Redux hooks.

### 3. Store Configuration

- All reducers are registered in the central `store.ts` file.
- Store types are exported to be used throughout the app.

### 4. Redux Provider

- A custom `ReduxProvider` wraps the application.
- Integrated into `layout.tsx` to make the store available globally.

### 5. Custom Hooks

- `useAppDispatch` and `useAppSelector` were created for type-safe usage of Redux in components.

### 6. Component Usage

- `fetchPokemonList` is dispatched in a `useEffect` to trigger the API call on mount.
- Loading and error states are handled in the UI.
- Pokémon are displayed as a bullet-point list using Tailwind CSS (`list-disc`, `pl-6`).