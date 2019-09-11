import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/map.css';
import { ChatBot } from 'aws-amplify-react';
import Chat from './chatbot';
import GoogleMap from './components/GoogleMaps';




function App() {


  

  return (
    <div className="App">
    <div className="Title">Trailhead</div>
    <div className="Top-Container">
    </div>
    <GoogleMap />
    <div>
     
    </div>
    {/* <Chat /> */}
  </div>
  );
}

export default App;
