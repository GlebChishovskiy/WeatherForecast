import { Link } from 'react-router-dom'
import style from './index.module.css'

const Main = () => {

    return (
        <div className={style.wrapper} >
            <Link className={style.link_start} to='/search/Kharkiv/celsius'>
                <div className={style.start}>
                    Go
                </div>
            </Link>
        </div>
    )
}

export default Main