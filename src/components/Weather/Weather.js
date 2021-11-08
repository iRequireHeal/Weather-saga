import {Header} from "../Header/Header";
import {Search} from "../Search/Serach";
import {SerarchResult} from "../SearchResult/SerarchResult";
import {useSelector} from "react-redux";
import {selectIsError, selectIsLoading} from "../../store/selectors";
import {SerarchFail} from "../SearchResult/SearchFail/SerarchFail";

export const Weather = () => {
    const isError = useSelector(selectIsError)
    const isLoad = useSelector(selectIsLoading)
    return (
        <div>
            <Header/>
            <Search/>
            {isError === false && isLoad === false ? <SerarchResult/> : <SerarchFail/>}
        </div>
    )
}