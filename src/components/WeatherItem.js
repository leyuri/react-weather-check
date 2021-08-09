/* global google */

import React from 'react';
import styled from 'styled-components'
import { Sparklines, SparklinesLine } from 'react-sparklines';

const StyledDiv = styled.td`
  width: 250px;
  height: 150px;
`;

export default class WeatherItem extends React.Component {
    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
    }
    componentDidMount() {
        if (this.props.data && this.props.data.city) {
            const city = this.props.data.city;
            new google.maps.Map(this.mapRef.current, {
                center: { lat: city.coord.lat, lng: city.coord.lon },
                zoom: 10,
                disableDefaultUI: true
            });
        }
    }
    render() {
        const { city, list } = this.props.data;
        const name = city.name;
        const { temp, pressure, humidity } = list[0].main;
        const temps = list.map(v => v.main.temp);
        // console.log(temps);

        return (
            <tr>
                <StyledDiv ref={this.mapRef} ></StyledDiv>
                <td>{name}</td>
                <td>{temp}</td>
                <td>
                    <Sparklines data={temps} height={150}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </td>
                <td>{pressure}</td>
                <td>{humidity}</td>
            </tr>
        )
    }
}
