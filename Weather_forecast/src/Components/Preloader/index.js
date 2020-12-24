import preolader from './Img/preloader.gif'
import style from './index.module.css'

const Preloader = () => {

    return (
        <div className={style.wrapper} >
            <img src={preolader}/>
        </div>
    )
}

export default Preloader