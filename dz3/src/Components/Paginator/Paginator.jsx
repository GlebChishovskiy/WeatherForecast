import './Paginator.css'
import React, {useEffect, useState } from 'react'

const Paginator = ({ data,NUMBER_COLORS_PER_PAGE,numberPortion, setNumberPortion }) => {

    const [numberPaginator, setNumberPaginator] = useState([])

    useEffect(() => {
        let cloneNumberPaginator = []
        for (let i = 1; i <= Math.ceil(data.length / NUMBER_COLORS_PER_PAGE); i++) {
            cloneNumberPaginator[i] = i
        }
        return setNumberPaginator(cloneNumberPaginator)
    }, [data])

    return (
        <div className='paginator'>
            {numberPaginator.map(index => <button
                className={index - 1 == numberPortion ? 'paginator_active' : 'paginator_button'}
                key={index} onClick={() => setNumberPortion(index - 1)}>{index}</button>)}
        </div>
    )
}

export default Paginator;
