import { useEffect, useRef, useState } from "react"
import { observer } from "mobx-react"
import { Link, useParams, useHistory } from "react-router-dom"
import style from './Search.module.css'
import Weather from '../../Store/Index'
import SimpleMap from "../SimpleMap/SimpleMap"

const Search = () => {
    const refInput = useRef()

    const param = useParams()
    const history = useHistory()

    const setCity = () => {
        history.push(`/search/${Weather.inputText}`)
    }

    let changeText = () => {
        Weather.changeInputText(refInput.current.value)
    }

    useEffect(() => {
        Weather.setNameCity(param.city)
        if (param.city !== undefined) {
            Weather.changeInputText(param.city)
        }
    }, [param.city])

    const [visibleList, setVisibleList] = useState(true)

    let handleClick = (e) => {
        if (!e.path.includes(refInput.current)) {
            setVisibleList(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleClick)
    }, [])

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setActiveCity(document.getElementsByName(`${Weather.searchCitiesList[0].name}`)[0])
            document.getElementsByName(`${Weather.searchCitiesList[0].name}`)[0].focus()
        }
    }

    const [activeCity, setActiveCity] = useState()

    const scrollList = (e) => {
        if (e.key === 'Enter') {
            history.push(`/search/${e.target.innerText}`)
            setVisibleList(false)
        }
        if (e.key === 'ArrowDown' && (activeCity.parentNode.innerText !== Weather.searchCitiesList[Weather.searchCitiesList.length - 1].name)) {
            activeCity.parentNode.nextSibling.firstChild.focus()
            setActiveCity(activeCity.parentNode.nextSibling.firstChild)
        }
        if (e.key === 'ArrowUp' && (activeCity.parentNode.innerText !== Weather.searchCitiesList[0].name)) {
            activeCity.parentNode.previousSibling.firstChild.focus()
            setActiveCity(activeCity.parentNode.previousSibling.firstChild)
        }
    }

    return (
        <div>
            <input onKeyDown={handleKeyDown} onFocus={() => setVisibleList(true)} onChange={changeText} ref={refInput} value={`${Weather.inputText}`} type="text" />
            <button onClick={setCity}> Найти </button>
            {visibleList && Weather.searchCitiesList.length ? <div className={style.listOfTips}>
                {Weather.searchCitiesList.map(p => (
                    <Link key={p.id} className={style.linkItem} to={`/search/${p.name}`}>
                        <div name={`${p.name}`} onKeyDown={scrollList} tabIndex='1' className={style.itemList}>{p.name}</div>
                    </Link>
                ))}
                <div>
                    <Link to={`/allFilms/${Weather.inputText}`}>Посмотреть все результаты</Link>
                </div>
            </div> : null}
            <SimpleMap lon={Weather.coord.lon} lat={Weather.coord.lat} />
        </div>
    )
}

export default observer(Search)
