import SimpleMap from './SimpleMap'
import Search from './Search'
import style from './index.module.css'
import Temp from './Temp'
import pointer from './SimpleMap/pointer.png'

const SearchContainer = () => {

    return (
        <div className={style.wrapper}>
            <div>
                <Search />
                <SimpleMap children={<img alt='(' style={{'width':'30px','height':'30px'}} src={pointer} />} />
            </div>
            <Temp />
        </div>
    )
}

export default SearchContainer


