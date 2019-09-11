import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import LocalTrails from './LocalTrails';
import dot from '../images/dot.png'
import star from '../images/star.png'
import '../css/map.css';
import '../App.css';
import Chat from '../chatbot';




const Marker = ({ text }) => <div><img className={dot} src={dot}></img><h5>{text}</h5></div>
const Marker1 = () => <div><img className={dot} src={star}></img></div>



const GoogleMap = () => {

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [location, setLocation] = useState(null);
    const [trails, setTrails] = useState([]);
    const [search, setSearch] = useState('');
    const key = 'AIzaSyCMo-oGIC5PMRgNpeq2sjYQjjUaBP7PHYI';
    const zoom = 11;


    let center = {
        lat: lat,
        lng: lng
    }


    const getLocation = async () => {
        axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCMo-oGIC5PMRgNpeq2sjYQjjUaBP7PHYI&considerIp=false`)
            .then(res => {
                console.log(res);
                setLat(res.data.location.lat);
                setLng(res.data.location.lng);
                axios.post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${res.data.location.lat},${res.data.location.lng}&key=AIzaSyCMo-oGIC5PMRgNpeq2sjYQjjUaBP7PHYI&result_type=locality`)
                    .then(res => {
                        setLocation(res.data.results[0].formatted_address);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                axios.get(`https://www.hikingproject.com/data/get-trails?lat=${res.data.location.lat}&lon=${res.data.location.lng}&maxDistance=40&key=200527848-412c158b9fff68cfde1976462075c115&maxResults=25`)
                    .then(res => {
                        setTrails(res.data.trails);
                        console.log(res.data.trails);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    };

    const getSearchLocation = async () => {
        axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=AIzaSyCMo-oGIC5PMRgNpeq2sjYQjjUaBP7PHYI`)
            .then(res => {
                console.log(res.data.results[0].geometry);
                setLat(res.data.results[0].geometry.location.lat);
                setLng(res.data.results[0].geometry.location.lng)
                axios.post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${res.data.results[0].geometry.location.lat},${res.data.results[0].geometry.location.lng}&key=AIzaSyCMo-oGIC5PMRgNpeq2sjYQjjUaBP7PHYI&result_type=locality`)
                    .then(res => {
                        setLocation(res.data.results[0].formatted_address);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                axios.get(`https://www.hikingproject.com/data/get-trails?lat=${res.data.results[0].geometry.location.lat}&lon=${res.data.results[0].geometry.location.lng}&maxDistance=40&key=200527848-412c158b9fff68cfde1976462075c115&maxResults=55`)
                    .then(res => {
                        setTrails(res.data.trails);
                        console.log(res.data.trails);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getLocation();
      },[]);

    return (
        <div>
            <div id="backgroundContainer">
                <header id="background"></header>
                <div id="searchBarContainer">
                    <h2>Trailhead</h2>
                    <input id="searchBar" placeholder="Search for trails" value={search} onChange={e => { setSearch(e.target.value) }}></input>
                    <button onClick={() => getSearchLocation()} className="button"><i class="fa fa-search"></i></button>
                </div>
            </div>
            <div className="container">
                <div id="divider">
                </div>
                <div className="row">
                    {/* <h4 align="center">Hiking trails in your area</h4> */}
                </div>
                {lat != null && lng != null && location != null && trails.length != 0 &&
                <div class="row justify-content-center">
                    <div class="col-8">
                        <div className="Card">
                                <div>
                                    {/* <h3>lat = {lat}</h3>
                                    <h3>lng = {lng}</h3>
                                    <h3>{location}</h3> */}
                                    <div style={{ height: '100vh', width: '100%' }}>
                                        <GoogleMapReact
                                            bootstrapURLKeys={{ key: key }}
                                            center={center}
                                            defaultZoom={zoom}
                                        >
                                            {trails.map((x,i) =>
                                                <Marker lat={x.latitude} lng={x.longitude} text={i+1} />
                                            )}
                                            <Marker1
                                                lat={lat}
                                                lng={lng}
                                                text="You"
                                            />
                                        </GoogleMapReact>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <LocalTrails trails={trails} />
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default GoogleMap;