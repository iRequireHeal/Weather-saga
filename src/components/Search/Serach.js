import {useState} from "react";
import {useDispatch} from "react-redux";
import {getInput} from "../../store/modules/search/SearchSlice";
import './Search.styles.css'

export const Search = () => {
    const [city, setCity] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const getData = (e) => {
        if (e.key === 'Enter' && city) {
            dispatch(getInput(city))
            setCity('')
        }
    };

    return (
        <div>
            <input className='search' type="text" onChange={handleChange} onKeyPress={getData} value={city}
                   placeholder='Enter city'/>
        </div>
    )
}