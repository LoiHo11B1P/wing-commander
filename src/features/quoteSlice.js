import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    quoteOption: 'quotes',
    quoteData: { },

}

export const getQuoteData = createAsyncThunk('getQuoteDataThunk', async(option) => {
    console.log('getting quote')
    const response = await fetch (

        `https://type.fit/api/quotes`

    ).then ( res => {
        return res.json()
    })

    return response
})

export const quoteSlice = createSlice({

    name: 'quote',
    initialState,
    reducers: {

        // get list of author
        getAuthors: (state) => {
        
            state.option = 'authors'
        
        },
        
        // get list of quote
        getQuotes: (state) => {

            state.option = 'quotes'

        },

    },

    extraReducers: (builder) => {

        builder.addCase( getQuoteData.fulfilled, ( state, action ) => {

            state.quoteData = action.payload

        })
    }
})

export const { getAuthors, getQuotes } = quoteSlice.actions

export default quoteSlice.reducer