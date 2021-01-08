import Weather from '../../../../Store'
import { observer } from 'mobx-react'
import style from './index.module.css'
import { Link } from 'react-router-dom'

const CitiesCertainTemperature = observer(() => {

    return (
        <section className={style.wrapper}>
            <h1 className={style.header}>Cities with the temperature you want</h1>
            {Weather.citiesCertainTemperature.length ?
                <div className={style.search_cities_of_temperature}>
                    {Weather.citiesCertainTemperature.map(p => (
                        <Link to={`/search/${p.name}`} key={p.index} className={style.item_link}>
                            <div className={style.item}>
                                {p.name}
                            </div>
                        </Link>
                    ))}
                </div> : <div className={style.header_bottom}>
                    <h2>Городов с такой температрой нету(</h2>
                </div>}
        </section >
    )
})

export default CitiesCertainTemperature

