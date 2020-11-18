import './Paginator.css'
import React from 'react'

const Paginator = ({numberPortion,setNumberPortion,numberPaginator}) => {
    return (
        <div className='paginator'>
            {numberPaginator.map(index => <button 
            className={index - 1 == numberPortion ? 'paginator_active' : 'paginator_button'} 
            key={index} onClick={() => setNumberPortion(index - 1)}>{index}</button>)}
        </div>
    )
}

export default Paginator;
