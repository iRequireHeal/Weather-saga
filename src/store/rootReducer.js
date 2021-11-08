import {combineReducers} from "@reduxjs/toolkit";
import weatherSlice from "../components/Weather/WeatherSlice";
import SearchSlice from "../components/Search/SearchSlice";

export const rootReducer = combineReducers({
    reducer: weatherSlice,
    searchReducer: SearchSlice
})