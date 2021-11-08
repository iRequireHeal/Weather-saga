import {createSlice} from "@reduxjs/toolkit";

const initialState = {searchInput: "kotaro"}

const searchSlice = createSlice({
        name: 'search',
        initialState,
        reducers: {
            getInput(state, action) {
                state.searchInput = action.payload
            }
        }
    }
)

export const {getInput} = searchSlice.actions

export default searchSlice.reducer