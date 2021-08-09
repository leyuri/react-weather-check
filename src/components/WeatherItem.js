/* global google */

import React from 'react';
import styled from 'styled-components'
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesBars } from 'react-sparklines';

const StyledMapTd = styled.td`
  width: 250px;
  border: 1px solid #fff;
  
`;
const StyledTextTd = styled.td`
    font-size: 1.5rem;
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
        const { temp, pressure } = list[0].main;
        const temps = list.map(v => v.main.temp);
        const humidities = list.map(v => v.main.humidity);
        console.log(name);
        console.log(temps);

        return (
            <tr>
                <StyledMapTd ref={this.mapRef} ></StyledMapTd>
                <StyledTextTd style={{ paddingTop : '75px'}}>{name}</StyledTextTd>
                <StyledTextTd style={{ paddingTop : '75px'}}>{pressure}</StyledTextTd>
                <StyledTextTd style={{ paddingTop : '75px'}}>{temp}</StyledTextTd>
                <td>
                    <Sparklines data={temps} style={{ background: "#00bdcc" }} margin={10} height={150}>
                        <SparklinesLine style={{ stroke: "white", fill: "none" }} />
                        <SparklinesReferenceLine
                            style={{ stroke: 'white', strokeOpacity: .75, strokeDasharray: '2, 2' }} />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={humidities} style={{ background: "rgb(255 152 0)" }} height={150}>
                        <SparklinesBars style={{ fill: "#fff" }} />
                    </Sparklines>
                </td>
            </tr >
        )
    }
}
