import { React, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = () => {

    const [ selected, setSelected ] = useState({});

    const onSelect = item => {
        setSelected(item);
    }

    const locations = [
        {
          name: "Head Office, Accra",
          companyName: "Origgin Ltd.",
          locationName: "11 Afram Link, Asylum Down",
          city: "Accra, Ghana",
          region: 'West Africa.',
          location: { 
            lat: 5.567543,
            lng: -0.2081408 
          },
        },
        {
          name: "Regional Office, Kumasi",
          companyName: "Origgin Ltd.",
          locationName: "Block 4, SSNIT Flats, Asuoyeboah",
          city: "Kumasi, Ghana",
          region: 'West Africa.',
          location: { 
            lat: 6.699764,
            lng: -1.6721845
          },
        },
        {
          name: "Regional Office, Takoradi",
          companyName: "Origgin Ltd.",
          locationName: "4, Takoradi Mall",
          city: "Takoradi, Ghana",
          region: 'West Africa.',
          location: { 
            lat: 4.9067394,
            lng: -1.7700419
          },
        }
    ];
  
    const mapStyles = {
        height: "600px",
        width: "100%",
        borderRadius: '8px',
        marginBottom: '5rem'
    };
  
    const defaultCenter = {
        lat: 5.567543,
        lng: -0.2081408 
    }
  
  return (
     <LoadScript
        googleMapsApiKey='AIzaSyDguOsd3nCzsd4RWDN9TjtJfs-D3TbtNkg'>

        <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={8}
            center={defaultCenter}
            onClick={() => setSelected({})}
        >
            {

                locations.map(item => {
                    return (

                        <Marker key={item.name} position={item.location} onMouseOver={() => onSelect(item)} />

                    )
                })

            }
            {
                selected.location && 
                (
                <InfoWindow
                    position={selected.location}
                    clickable={true}
                    onCloseClick={() => setSelected({})}
                >

                    <div className="grid-2-row">
                        <h4 className="sub-header mb-0 text-black">{ selected.name }</h4>
                        <p className='text-black'>{ selected.companyName } <br></br> { selected.locationName } <br/>{ selected.city } <br></br> { selected.region }</p>
                    </div>

                </InfoWindow>
                )
            }
        </GoogleMap>
        
     </LoadScript>
  )
}

export default MapContainer;