import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Card from 'material-ui/Card'
import CardHeader from 'material-ui/Card/CardHeader'
import CardMedia from 'material-ui/Card/CardMedia'
import styled, { injectGlobal } from 'styled-components'

//cant export this properly for some reason
const MapCardContents = ({ title, node, history }) => (
    <div>
        <Card 
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
                    <center>
                        <CardHeader 
                            title={
                                <Card children={
                                    <div>
                                        <H2>{title}</H2>
                                        {node}
                                    </div>
                                } />
                            }
                        />
                    </center>
                </div>
            }
        />

    </div>
)   

export class MapContainer extends Component {
    render() {
        let height = window.screen.availHeight* 0.5;
        let width = window.screen.availWidth* 0.9;
        let margin = window.screen.availWidth* 0.2;
        return (
            <Card 
                style={{width:'90%', height:height}}
                >
                <Map style={{width:'90%'}}
                    google={this.props.google} zoom={14}>
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />
                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                        </div>
                    </InfoWindow>
                </Map>
                
            </Card>

        );
    }
}

//need to move this to external file
const WellStyles = { maxWidth: 1000, margin: '0 auto 10px' };

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Header = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const H1 = styled.h1`
color: #ead7d7;
font-size: 100px;
margin-bottom: -20px;
`;

const H2 = styled.h2`
color: #d2bebe;
font-size: 35px;
`;

const StyledContainer = styled.section`
background: #fff;
position: relative;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const InputText = styled.input`
padding: 16px 16px 16px 60px;
border: none;
background: rgba(0, 0, 0, 0.003);
box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
width: 440px;
position: relative;
margin: 0;
font-size: 24px;
font-family: inherit;
font-weight: inherit;
line-height: 1.4em;
&:focus {
  outline: none;
}
`;

const List = styled.ul`
width: 440px;
margin: 0;
padding: 0;
list-style: none;
`;

const TodoItem = styled.li`
position: relative;
font-size: 24px;
border-bottom: 1px solid #ededed;
&:last-child {
  border-bottom: none;
}
`;

const ItemLabel = styled.label`
white-space: pre-line;
word-break: break-all;
padding: 15px 60px 15px 15px;
margin-left: 45px;
display: block;
line-height: 1.2;
transition: color 0.4s;
`;



const Btn = styled.button`
margin: 0;
padding: 0;
border: 0;
background: none;
font-size: 50%;
vertical-align: baseline;
font-family: inherit;
font-weight: inherit;
color: inherit;
appearance: none;
font-smoothing: antialiased;
outline: none;
`;

const StyledBtn = styled(Btn)`
position: relative;
top: 0;
right: -50px;
bottom: 0;
width: 80px;
height: 25px;
margin: auto 0;
font-size: 25px;
color: #cc9a9a;
margin-bottom: 11px;
transition: color 0.2s ease-out;
cursor: pointer;
`;

const PendingContainer = styled.div`
position: fixed;
top: 0;
right: 0;
`;

const Pending = styled.div`
color: ${props => props.active ? props.activeColor || 'red' : '#c7c7c7'};
`;

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto');
body {
  background-color: whitesmoke;
  font-family: 'Roboto', sans-serif;
}
`


export default GoogleApiWrapper({
    apiKey: 'AIzaSyDFzlMxWzkJhtvi79C41UY2N0SKrGzUpRY'
})(MapContainer)
