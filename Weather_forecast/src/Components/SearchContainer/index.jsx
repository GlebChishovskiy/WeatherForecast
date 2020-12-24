import SimpleMap from "../SimpleMap"
import WithCallbacks from './Search'
import style from './index.module.css'
import Temp from './Temp'
import pointer from '../SimpleMap/pointer.png'

const SearchContainer = () => {

    return (
        <div className={style.wrapper}>
            <div>
                <WithCallbacks />
                <SimpleMap children={<img style={{'width':'30px','height':'30px'}} src={pointer} />} />
            </div>
            <Temp />
        </div>
    )
}

export default SearchContainer


