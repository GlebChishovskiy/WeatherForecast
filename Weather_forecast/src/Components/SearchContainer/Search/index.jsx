import { useEffect } from "react"
import { observer } from "mobx-react"
import { useParams, useHistory } from "react-router-dom"
import Weather from '../../../Store'
import AsyncSelect from 'react-select/async'
import style from './index.module.css'

const WithCallbacks = () => {

    const param = useParams()
    const history = useHistory()

    useEffect(() => {
        Weather.setNameCity(param.city)
    }, [param.city])

    const onChange = (e) => {
        history.push(`/search/${e.label}`)
    }

    const handleInputChange = (newValue) => {
        Weather.changeInputText(newValue)
    };

    const loadOptions = (inputValue, callback) => {
        setTimeout(() => {
            callback(Weather.searchCitiesList);
        }, 1000);
    };

    return (
        <div className={style.wrapper}>
            <AsyncSelect
                cacheOptions
                onChange={onChange}
                defaultOptions
                loadOptions={loadOptions}
                onInputChange={handleInputChange}
            />
        </div>
    )
}

export default observer(WithCallbacks)