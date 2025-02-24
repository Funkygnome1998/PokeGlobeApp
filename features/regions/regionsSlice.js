import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { pokeapiUrl } from '../../shared/urls'


const initialState = {
    region:{},
    isLoading: true,
    errMsg: ""
}


export const fetchRegionObj = createAsyncThunk(
    'regions/fetchRegionObj',
    async (region) => {

        const response = await fetch(pokeapiUrl + "/region/" + region)
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status)
        }
        const data = await response.json()
        
        return data
    }
)


const regionsSlice = createSlice({
    name: 'regions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRegionObj.pending, (state) => {
            state.isLoading = true
        }).addCase(fetchRegionObj.fulfilled, (state, action ) => {
            state.region = action.payload
            state.isLoading = false
            state.errMsg = ''
        }).addCase(fetchRegionObj.rejected, (state, action) => {
            state.isLoading = false
            state.errMsg = action.error ? action.error.message : 'Fetch Failed'
        })
    }
})



export const regionReducer = regionsSlice.reducer

export const selectRegionObject = (state) => {
    return state.regions.region
}

export const selectRegionLocations = (state) => {
    return state.regions.region.locations
}
