import './Gallery.css'

const Gallery = ({portion}) => {
  return (
    <div className='gallery_colors'>
      {portion.map(p => <div className='gallery_color' key={`${p.id}`}>
        <h4>{p.title}</h4>
        <div><img src={`${p.thumbnailUrl}`} /></div>
      </div>)}
    </div>
  )
}

export default Gallery;
