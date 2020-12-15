import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = (props) => {

  const zoom = 11

  return (
    <div style={{ height: '400px', width: '100%px' }}>
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