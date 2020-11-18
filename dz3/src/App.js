import React, { useEffect, useState } from 'react'
import './App.css'
import Paginator from './Components/Paginator/Paginator'
import Gallery from './Components/Select/Gallery'

const NUMBER_EIGHT = 8

const App = () => {

  const [data, setData] = useState([])
  const [numberPaginator, setNumberPaginator] = useState([])
  const [portion, setPortion] = useState([])
  const [numberPortion, setNumberPortion] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => response.json()).then(data => {
        let cloneNumberPaginator = []
        for (let i = 1; i <= Math.ceil(data.length / NUMBER_EIGHT); i++) {
          cloneNumberPaginator[i] = i
        }
        getCountPortion(data)
        return setData(data), setNumberPaginator(cloneNumberPaginator)
      })
  }, [])

  const getCountPortion = (data) => {
    let clonePortion = []
    for (let i = NUMBER_EIGHT * numberPortion; i < NUMBER_EIGHT + NUMBER_EIGHT * numberPortion; i++) {
      clonePortion[i] = data[i]
    }
    let clonePortionFilter = clonePortion.filter(n => n)
    setPortion(clonePortionFilter)
  }

  useEffect(() => {
    if (data.length) {
      getCountPortion(data)
    }
  }, [numberPortion])

  return (
    <div className='wrapper'>
      <Paginator
        numberPaginator={numberPaginator}
        numberPortion={numberPortion}
        setNumberPortion={setNumberPortion} />
      <Gallery
        portion={portion} />
    </div>
  )
}

export default App;
