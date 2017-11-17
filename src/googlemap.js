import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Card from 'material-ui/Card'
import CardHeader from 'material-ui/Card/CardHeader'

const MapCardContets = () => (
    <div>
        <CardHeader 
            title={
                <h2>Hello</h2>
            }
        />
        <Map google={this.props.google} zoom={14}>
                        
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                </div>
            </InfoWindow>
        </Map>
    </div>
)   

export class MapContainer extends Component {
    render() {
        return (
            <Card 
                expandable='true'
                expanded='true'
                initiallyExpanded='false'
                showExpandableButton='true'
                children={
                    <div>
                        <Map google={this.props.google} zoom={14}>
                        
                        <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />
            
                        <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                            </div>
                        </InfoWindow>
                        </Map>
                    </div>
                }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDFzlMxWzkJhtvi79C41UY2N0SKrGzUpRY'
})(MapContainer)