export const selectCity = (state) => { return state.reducer.city}
export const selectWind = (state) => { return state.reducer.wind}
export const selectTemp = (state) => { return state.reducer.temp}

export const selectInput = (state) => { return state.searchReducer.searchInput}

export const selectIsLoading = (state) => { return state.reducer.isLoading}
export const selectIsError = (state) => { return state.reducer.Error}
