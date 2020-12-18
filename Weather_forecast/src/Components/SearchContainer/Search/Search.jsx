import { useEffect } from "react"
import { observer } from "mobx-react"
import { useParams, useHistory } from "react-router-dom"
import Weather from '../../../Store/Index'
import AsyncSelect from 'react-select/async'
import style from './Search.module.css'

const WithCallbacks = observer(() => {

    const filterColors = () => {
        return Weather.searchCitiesListLimit
    };

    const loadOptions = (inputValue, callback) => {
        setTimeout(() => {
            callback(filterColors(inputValue))
        }, 1000)
    }

    const param = useParams()
    const history = useHistory()

    useEffect(() => {
        Weather.setNameCity(param.city)
    }, [param.city])

    const handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\W/g, '')
        Weather.changeInputText(inputValue)
        return inputValue
    }

    const onChange = (e) => {
        Weather.setNameCity(e.label)
        history.push(`/search/${e.label}`)
    }

    return (
        <div className={style.wrapper}>
            <AsyncSelect
                onChange={onChange}
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                onInputChange={handleInputChange}
            />
        </div>
    )
}
)

export default WithCallbacks