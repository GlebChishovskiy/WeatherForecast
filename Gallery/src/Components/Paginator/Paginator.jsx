import './Paginator.css'
import React, {useEffect, useState } from 'react'

const Paginator = ({ colorGallery,numberColorsPerPage,numberPortion, setNumberPortion }) => {

    const [numberPaginator, setNumberPaginator] = useState([])

    useEffect(() => {
        let cloneNumberPaginator = []
        for (let i = 1; i <= Math.ceil(colorGallery.length / numberColorsPerPage); i++) {
            cloneNumberPaginator[i] = i
        }
        return setNumberPaginator(cloneNumberPaginator)
    }, [colorGallery])

    return (
        <div className='paginator'>
            {numberPaginator.map(index => <button
                className={index - 1 == numberPortion ? 'paginator_active' : 'paginator_button'}
                key={index} onClick={() => setNumberPortion(index - 1)}>{index}</button>)}
        </div>
    )
}

export default Paginator
