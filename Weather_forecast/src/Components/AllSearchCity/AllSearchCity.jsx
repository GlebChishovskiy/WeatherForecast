import { observer } from "mobx-react"
import Weather from '../../Store/Index'

export const AllSearchCity = observer(() => {

    return (
        <div>
            {Weather.searchCities.map(p => (
                <div key={p.id}>{p.name}</div>
            ))}
        </div>
    )
})

