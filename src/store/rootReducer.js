import {combineReducers} from "@reduxjs/toolkit";
import {weatherSlice} from "./modules/weather/WeatherSlice";
import SearchSlice from "./modules/search/SearchSlice";

export const rootReducer = combineReducers({
    reducer: weatherSlice.reducer,
    searchReducer: SearchSlice
})