import React, { useEffect, useState } from 'react'
import './App.css'

const NUMBER_EIGHT = 8

const App = () => {

  const [data, setData] = useState([])
  const [numberPaginator, setNumberPaginator] = useState([])
  const [portion, setPortion] = useState([])
  const [numberPortion, setNumberPortion] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => response.json()).then(data => {
        let h = []
        for (let i = 1; i <= Math.ceil(data.length / NUMBER_EIGHT); i++) {
          h[i] = i
        }
        getCountPortion(data)
        return setData(data), setNumberPaginator(h)
      })
  }, [])

  const getCountPortion = (data) => {
      let d = []
      for (let i = NUMBER_EIGHT * numberPortion; i < NUMBER_EIGHT + NUMBER_EIGHT * numberPortion; i++) {
        d[i] = data[i]
      }
      let c = d.filter(n => n)
      setPortion(c)
  }

  useEffect(() => {
    if(data.length){
      getCountPortion(data)
    }
  }, [numberPortion])

  return (
    <div className='wrapper'>
      <div className='paginator'>
        {numberPaginator.map(index => <button className={index - 1 == numberPortion ? `active` : 'button'} key={index} onClick={() => setNumberPortion(index - 1)}>{index}</button>)}
      </div>
      <div className='colors'>
        {portion.map(p => <div className='color' key={`${p.title}_${p.id}`}>
          <h4>{p.title}</h4>
          <div><img src={`${p.thumbnailUrl}`} /></div>
        </div>)}
      </div>
    </div>
  )
}

export default App;
