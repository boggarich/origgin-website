import React from "react";
import "../assets/sass/contact.scss";
import GoogleMapReact from 'google-map-react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MapContainer from "../components/googleMaps";
// import axios from 'axios';

function MyComponent() {

    const { isLoaded, loadError } = useJsApiLoader({

        googleMapsApiKey: "AIzaSyDguOsd3nCzsd4RWDN9TjtJfs-D3TbtNkg"

    })
  
    const renderMap = () => {
      
      const onLoad = React.useCallback(
        function onLoad (mapInstance) {
          
        }
      )

      return <GoogleMap
        options={options}
        onLoad={onLoad}
      >
        {
          
        }
      </GoogleMap>
    }
  
    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }
  
    return isLoaded ? renderMap() : <Spinner />

}

const defaultProps = {

    center: {
      lat: 5.567543,
      lng: -0.2081408
    },
    zoom: 8

};

const HeadOfficeMarker = ({ text }) => <div><img style={{ height: '45px', transform: 'matrix(-1, 0, 0, 1, 10, 0)' }} src={ process.env.PUBLIC_URL + "/img/location-pin.png" } /></div>;
const KumasiOfficeMarker = ({ text }) => <div><img style={{ height: '45px', transform: 'matrix(-1, 0, 0, 1, 10, 0)' }} src={ process.env.PUBLIC_URL + "/img/location-pin.png" } /></div>;
const TakoradiOfficeMarker = ({ text }) => <div><img style={{ height: '45px', transform: 'matrix(-1, 0, 0, 1, 10, 0)' }} src={ process.env.PUBLIC_URL + "/img/location-pin.png" } /></div>;

export default class Contact extends React.Component {

    sendMessage = async (name, email, subject, message) => {

        const data = JSON.stringify({

            "Messages": [{
            "From": {"Email": "<YOUR EMAIL>", "Name": "<YOUR NAME>"},
            "To": [{"Email": email, "Name": name}],
            "Subject": subject,
            "TextPart": message
            }]

        });
      
        const config = {
            method: 'post',
            url: 'https://api.mailjet.com/v3.1/send',
            data: data,
            headers: {'Content-Type': 'application/json'},
            auth: {username: '<API Key>', password: '<Secret Key>'},
        };
      
        // return axios(config)
        //   .then(function (response) {
        //     console.log(JSON.stringify(response.data));
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
      
      }

    state = {
        isMarkerShown: true
    }

    render() {

        return(

            <div className="main-content contact">
                <div className="layout-width">

                    <div style={{ height: '600px', width: '100%', marginBottom: '5rem', borderRadius: '8px' }}>

                        <MapContainer />

                        {/* 
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyDguOsd3nCzsd4RWDN9TjtJfs-D3TbtNkg" }}
                            yesIWantToUseGoogleMapApiInternals
                            defaultCenter={defaultProps.center}
                            center={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >

                            <HeadOfficeMarker
                                lat={5.567543}
                                lng={-0.2081408}
                            
                            />

                            <KumasiOfficeMarker
                                lat={6.699764}
                                lng={-1.6721845}
                                
                            />

                            <TakoradiOfficeMarker
                                lat={4.9067394}
                                lng={-1.7700419}
                                
                            />


                        </GoogleMapReact> */}

                    </div>
                    
                    <div className="grid-2">

                        <div>
                            <h4 className="header-xl mb-3 ms-2">Find Us</h4>

                            <div className="card-shadow">

                                <h4 className="header-md fw-600 mb-4">Corporate Offices</h4>

                                <div className="grid-2-row">
                                    <h4 className="sub-header">Head Office Accra</h4>
                                    <p>Origgin Ltd. <br></br> 11 Afram Link, Asylum Down <br/>Accra, Ghana <br></br> West Africa.</p>
                                </div>

                                <div className="grid-2-row">
                                    <h4 className="sub-header">Regional Office, Kumasi</h4>
                                    <p>Origgin Ltd. <br></br>Block 4, SSNIT Flats, Asuoyeboah <br></br>Kumasi, Ghana <br></br>West Africa.</p>
                                </div>

                                <div className="grid-2-row">
                                    <h4 className="sub-header">Regional Office, Takoradi</h4>
                                    <p>Origgin Ltd. <br></br>4, Takoradi Mall <br></br>Takoradi, Ghana <br></br>West Africa.</p>
                                </div>

                            </div>

                            <div className="card-shadow">
                                <div className="grid-2-row">
                                    <h4 className="sub-header">Service Center</h4>
                                    <p>Accra</p>
                                </div>

                            </div>

                        </div>
                        
                        <div>
                            <form class="row g-3">
                                <h4 className="header-md mb-4">We're happy to hear from you..</h4>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="inputEmail4" placeholder="Enter your Name"/>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">Email</label>
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Enter your Email"/>
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Your Subject</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Type subject..."/>
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress2" class="form-label">Your Number</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Telephone Number..."/>
                                </div>
                                <div class="col-md-12">
                                    <label for="inputCity" class="form-label">Message</label>
                                    <textarea type="text" class="form-control w-100" id="inputCity"></textarea>
                                </div>

                                <button className="btn btn-pill btn-pink large mx-auto mt-3" onClick={ this.sendMessage }>Send Message</button>
                             
                            </form>
                        </div>

                    </div>

                </div>
            </div>

        );

    }

}