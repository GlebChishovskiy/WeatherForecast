import { useEffect } from "react"
import { observer } from "mobx-react"
import { useParams, useHistory } from "react-router-dom"
import Weather from '../../../Store'
import AsyncSelect from 'react-select/async'
import style from './index.module.css'

const Search = () => {

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

    const options = [
        { name: 'Chocolate' },
        { name: 'Strawberry' },
        { name: 'Vanilla' }
    ]

    const loadOptions = (inputValue, callback) => {
        setTimeout(() => {
            for (let key of Weather.searchCitiesList) {
                key.label = key.name
            }
            callback(Weather.searchCitiesList)//убивать таймаут юзЭфект
        }, 5000)
    }

    useEffect(() => {
        return clearInterval(loadOptions)
    })

    return (
        <section className={style.wrapper}>
            <h2 className={style.header}>
                What city are you interested in?
            </h2>
            <AsyncSelect
                onChange={onChange}
                defaultOptions
                loadOptions={loadOptions}
                onInputChange={handleInputChange}
            />
        </section>
    )
}

export default observer(Search)