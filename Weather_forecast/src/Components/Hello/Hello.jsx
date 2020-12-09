import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = (props) => {


  const center = {
    lat: props.lat,
    lng: props.lon
  }
  console.log(center)
  console.log(props.lat, props.lon)

  const zoom = 11


  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        center={{
          lat: props.lat,
          lng: props.lon
        }}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={props.lat}
          lng={props.lon}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap