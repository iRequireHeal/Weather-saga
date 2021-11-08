import {useSelector} from "react-redux";
import {selectCity, selectHumidity, selectTemp, selectWind} from "../../../store/modules/weather/selectors";
import {selectIsError} from "../../../store/modules/search/selectors";
import {SearchFail} from "../SearchFail/SearchFail";
import './SearchSuccess.styles.css'

export const SearchLoaded = () => {
    const city = useSelector(selectCity)
    const wind = useSelector(selectWind)
    const temp = useSelector(selectTemp)
    const humidity = useSelector(selectHumidity)
    const error = useSelector(selectIsError)

    if (!error) return(
        <div className="conteiner">
            <h1 className ="title">{city} </h1>
            <p  className ="data">Temp: {temp}°С</p>
            <p  className ="data">Humidity: {humidity}%</p>
            <p  className ="data">Wind speed: {wind.windSpeed}</p>
            <p  className ="data">Wind degree: {wind.windDegree}</p>
        </div>
    )
    else return (<SearchFail/>)
}