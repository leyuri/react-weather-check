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
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Humidity</th>
                        <th>Pressure</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map(item => (<WeatherItem key={item.id} data={item} />))}
                </tbody>
            </Table>
        </div>
    )
}