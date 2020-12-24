import Weather from '../../../../Store'
import { observer } from 'mobx-react'
import style from './index.module.css'
import { Link } from 'react-router-dom'

const CitiesCertainTemperature = observer(() => {

    return (
        <div className={style.wrapper}>
            {Weather.citiesCertainTemperature.map(p => (
                <Link to={`/search/${p.name}`}  key={p.index} className={style.item_link}>
                    <div className={style.item}>
                        {p.name}
                    </div>
                </Link>
            ))}
        </div >
    )
})

export default CitiesCertainTemperature

