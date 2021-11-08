import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    city: "null",
    temp: null,
    wind: {
        windSpeed: null,
        windDegree: null
    },
    Error: null,
    isLoading: null
}

const convertTemp = (F) => {
    return (F/18).toFixed(2)
}

export const weatherSlice = createSlice({
        name: 'weather',
        initialState,
        reducers: {
            requestWeather(state, action) {
                state.Error = false
                state.isLoading = true
            },
            requestWeatherSuccess(state, action) {
                state.Error = false
                state.isLoading = false

                state.city = action.payload.name
                state.temp = convertTemp(action.payload.main.temp)
                state.wind = {
                    windSpeed:action.payload.wind.speed,
                    windDegree:action.payload.wind.deg
                }
            },
            requestWeatherFail(state, action) {
                state.Error = true
                state.isLoading = false
            }
        }
    }
)

export const {requestWeather, requestWeatherFail, requestWeatherSuccess} = weatherSlice.actions


export default weatherSlice.reducer