import {useSelector} from "react-redux";
import {selectIsLoading} from "../../../store/modules/search/selectors";
import {SearchLoaded} from "../searchLoaded/SearchLoaded";

export const SearchResult = () => {

    const load = useSelector(selectIsLoading)

    switch (load) {
        case false:
            return <SearchLoaded/>
        case true:
            return <h1 className="loading">Loading...</h1>
        default:
            return null
    }
}