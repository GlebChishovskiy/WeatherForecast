import React, { useEffect, useState } from 'react'
import './App.css'
import Paginator from './Components/Paginator/Paginator'
import Gallery from './Components/Gallery/Gallery'

const NUMBER_COLORS_PER_PAGE = 8

const App = () => {

  const [data, setData] = useState([])
  const [portion, setPortion] = useState([])
  const [numberPortion, setNumberPortion] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/100/photos')
      .then(response => response.json()).then(data => {
        changeCountPortion(data)
        return setData(data)
      })
  }, [])
  useEffect(() => {
    if (data.length) {
      changeCountPortion(data)
    }
  }, [numberPortion])

  const changeCountPortion = (data) => {
    setPortion(data.slice(NUMBER_COLORS_PER_PAGE * numberPortion,
      NUMBER_COLORS_PER_PAGE + NUMBER_COLORS_PER_PAGE * numberPortion))
  }

  return (
    <div className='wrapper'>
      <Paginator
        NUMBER_COLORS_PER_PAGE={NUMBER_COLORS_PER_PAGE}
        data={data}
        numberPortion={numberPortion}
        setNumberPortion={setNumberPortion} />
      <Gallery
        portion={portion} />
    </div>
  )
}

export default App;
