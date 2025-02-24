import { configureStore } from '@reduxjs/toolkit';
import { regionReducer } from '../features/regions/regionsSlice';
import { areaReducer } from '../features/areas/areasSlice';
import { locationReducer } from '../features/locations/locationsSlice';
import { pokemonReducer } from '../features/pokemon/pokemonSlice';


export const store = configureStore({
  reducer: {
    regions: regionReducer,
    areas: areaReducer,
    locations:locationReducer,
    pokemon: pokemonReducer,
  }
});