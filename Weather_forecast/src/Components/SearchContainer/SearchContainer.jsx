import SimpleMap from "../SimpleMap/SimpleMap"
import React from 'react';
import WithCallbacks from './Search/Search'
import style from './SearchContainer.module.css'
import Temp from './Temp/Temp'

const SearchContainer = ({ onChange }) => {

    return (
        <div className={style.wrapper}>
            <div>
                <WithCallbacks />
                <SimpleMap />
            </div>
            <Temp onChange={onChange} />
        </div>
    )
}

export default SearchContainer


