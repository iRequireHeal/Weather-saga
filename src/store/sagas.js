import {put, call, takeEvery, select} from "redux-saga/effects"
import {
    requestWeather,
    requestWeatherFail,
    requestWeatherSuccess
} from "./modules/weather/WeatherSlice";

import {getInput} from "./modules/search/SearchSlice";
import {selectInput} from "./modules/search/selectors";

function* getWeather() {
    {
        try {
            requestWeather()
            const city = yield select(selectInput)
            const data = yield call(() => {
                    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=d2ee61d7aa3a4488bcab4c8087121705`)
                        .then(res => res.json())
                }
            );
            console.log(data)
            yield put(requestWeatherSuccess(data));
        } catch (error) {
            yield put(requestWeatherFail(error));
        }
    }
}

export default function* watchFetchWeather() {
    yield takeEvery(getInput, getWeather)
}

