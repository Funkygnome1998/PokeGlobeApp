import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const initialState = {
    area:{},
    isLoading: true,
    errMsg: ""
}


export const fetchAreaObj = createAsyncThunk(
    'areas/fetchAreaObj',
    async (area) => {
        
        const response = await fetch(area.url)
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status)
        }
        const data = await response.json()
        
        return data
    }
)


const areasSlice = createSlice({
    name: 'areas',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAreaObj.pending, (state) => {
            state.isLoading = true
        }).addCase(fetchAreaObj.fulfilled, (state, action ) => {
            state.area = action.payload
            state.isLoading = false
            state.errMsg = ''
        }).addCase(fetchAreaObj.rejected, (state, action) => {
            state.isLoading = false
            state.errMsg = action.error ? action.error.message : 'Fetch Failed'
        })
    }
})



export const areaReducer = areasSlice.reducer

export const selectAreaObject = (state) => {
    return state.areas.area
}

export const selectPokemonEncounters = (state) => {
    return(state.areas.area.pokemon_encounters)
}