import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const initialState = {
    location:{},
    isLoading: true,
    errMsg: ""
}


export const fetchLocationObj = createAsyncThunk(
    'locations/fetchLocationObj',
    async (location) => {
        const response = await fetch(location.url)
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status)
        }
        const data = await response.json()
        
        return data
    }
)


const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLocationObj.pending, (state) => {
            state.isLoading = true
        }).addCase(fetchLocationObj.fulfilled, (state, action ) => {
            state.location = action.payload
            state.isLoading = false
            state.errMsg = ''
        }).addCase(fetchLocationObj.rejected, (state, action) => {
            state.isLoading = false
            state.errMsg = action.error ? action.error.message : 'Fetch Failed'
        })
    }
})



export const locationReducer = locationsSlice.reducer

export const selectLocationObject = (state) => {
    return state.locations.location
}

export const selectAreasArray = (state) => {
    return state.locations.location.areas
}