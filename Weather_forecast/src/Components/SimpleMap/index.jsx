import React from 'react';
import GoogleMapReact from 'google-map-react';
import Weather from '../../Store'
import { observer } from 'mobx-react'

const SimpleMap = ({ children }) => {

  const zoom = 11

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        children
        center={{
          lat: Weather.coord.lat,
          lng: Weather.coord.lon
        }}
        defaultZoom={zoom}
      >
        {children}
      </GoogleMapReact>
    </div>
  )
}

export default observer(SimpleMap)