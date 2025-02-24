import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const initialState = {
    pokemonObj:{},
    isLoading: true,
    errMsg: ""
}


export const fetchPokemonObject = createAsyncThunk(
    'pokemon/fetchPokemonObject',
    async (pokemon) => {
        const response = await fetch(pokemon.url)
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status)
        }
        const data = await response.json()
        return data
    }
)


const pokemonSlice = createSlice({
    name: 'areas',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonObject.pending, (state) => {
            state.isLoading = true
        }).addCase(fetchPokemonObject.fulfilled, (state, action ) => {
            state.pokemonObj = action.payload
            state.isLoading = false
            state.errMsg = ''
        }).addCase(fetchPokemonObject.rejected, (state, action) => {
            state.isLoading = false
            state.errMsg = action.error ? action.error.message : 'Fetch Failed'
        })
    }
})

export const selectPokemonObject = (state) => {
    console.log(state.pokemon.pokemonObj)
    return state.pokemon.pokemonObj
}


export const pokemonReducer = pokemonSlice.reducer