import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import WeatherItem from './WeatherItem';

export default function WeatherList() {

    const cities = useSelector((state) => state.cities) 
    return (
        <div>
            <Table className="mt-2" striped bordered hover>
                <thead>
                    <tr>
                        <th>Map</th>
                        <th>City</th>
                        <th>Pressure</th>
                        <th>Temperature</th>
                        <th>Temperature-chart</th>
                        <th>{'\u00A0'}{'\u00A0'}{'\u00A0'}
                            Humidity-chart
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map(item => (<WeatherItem key={item.city.id} data={item} />))}
                </tbody>
            </Table>
        </div>
    )
}