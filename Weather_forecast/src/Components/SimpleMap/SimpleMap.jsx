import React from 'react';
import GoogleMapReact from 'google-map-react';
import Weather from '../../Store/Index'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = () => {

  const zoom = 11

  return (
    <div style={{ height: '400px', width: '600px' }}>
      <GoogleMapReact
        center={{
          lat: Weather.coord.lat,
          lng: Weather.coord.lon
        }}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={Weather.coord.lat}
          lng={Weather.coord.lon}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap