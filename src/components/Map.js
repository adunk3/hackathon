import React, { useState } from 'react';
// import Chat from './Chat';
import GoogleMapReact from 'google-map-react';
import dot from '../images/dot.png'
import '../css/map.css';



const Map = () => {

//   const [name, setName] = useState('Bob');
  const [activeTab, setTab] = useState(0);
  const key = 'AIzaSyCMo-oGIC5PMRgNpeq2sjYQjjUaBP7PHYI';
  const lat = 33.6748;
  const lon = -117.9089;
  const zoom = 11;

  let center = {
    lat: lat,
    lng: lon
  }

  const AnyReactComponent = ({ text }) => <img className="dot" src={dot}></img>;


//   const renderContent = () => {
//     switch (activeTab) {

//       case 0: return <div><label htmlFor="name"> Name: <input type="text" id={'name'} placeholder={'Enter your name...'} value={name} onChange={e => setName(e.target.value)} /></label>
//         <button onClick={() => setTab(1)}>Enter</button>
//       </div>

//       case 1: return <Chat name={name} />

//     }
//   }


  return (
    <div className="card" >
      {/* {renderContent()} */}
      
      
<div>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: key }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <AnyReactComponent
            lat={lat}
            lng={lon}
            text="My Marker"
          />
          <AnyReactComponent
            lat={33.70}
            lng={-117.84}
            text="My Marker"
          />

          </GoogleMapReact>
        </div>
     </div>
     </div>

  );
}

export default Map;
