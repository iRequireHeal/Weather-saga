import {useSelector} from "react-redux";
import {selectCity, selectTemp, selectWind} from "../../store/selectors";
import './SearchResult.styles.css'

export const SerarchResult = () => {
    const city = useSelector(selectCity)
    const wind = useSelector(selectWind)
    const temp = useSelector(selectTemp)

    return (
        <div className="conteiner">
            <h1 className="data">city - {city} </h1>
            <p className="data">Wind speed - {wind.windSpeed}</p>
            <p className="data">Wind degree - {wind.windDegree}</p>
            <p className="data">Temp - {temp}</p>
        </div>
    )
}