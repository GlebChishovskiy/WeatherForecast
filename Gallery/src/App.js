import React, { useEffect, useState } from 'react'
import './App.css'
import Paginator from './Components/Paginator/Paginator'
import Gallery from './Components/Gallery/Gallery'

const NUMBER_COLORS_PER_PAGE = 8

const App = () => {

  const [colorGallery, setColorGallery] = useState([])
  const [portion, setPortion] = useState([])
  const [numberPortion, setNumberPortion] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/100/photos')
      .then(response => response.json()).then(data => {
        changeCountPortion(data)
        return setColorGallery(data)
      })
  }, [])
  useEffect(() => {
    if (colorGallery.length) {
      changeCountPortion(colorGallery)
    }
  }, [numberPortion])

  const changeCountPortion = (colorGallery) => {
    setPortion(colorGallery.slice(NUMBER_COLORS_PER_PAGE * numberPortion,
      NUMBER_COLORS_PER_PAGE + NUMBER_COLORS_PER_PAGE * numberPortion))
  }

  return (
    <div className='wrapper'>
      <Paginator
        numberColorsPerPage={NUMBER_COLORS_PER_PAGE}
        colorGallery={colorGallery}
        numberPortion={numberPortion}
        setNumberPortion={setNumberPortion} />
      <Gallery
        portion={portion} />
    </div>
  )
}

export default App
