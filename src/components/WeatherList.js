import React from 'react';
import { Table } from 'react-bootstrap';
import WeatherItem from './WeatherItem'

export default function WeatherList() {

    const data = [
        {
            id: 1,
            city: 'Seoul',
            temp: 12.89,
            pressure: 1018,
            humidity: 68,
        },
        {
            id: 2,
            city: 'Tokyo',
            temp: 12.89,
            pressure: 1018,
            humidity: 68,
        },
        {
            id: 3,
            city: 'Istanbul',
            temp: 12.89,
            pressure: 1018,
            humidity: 23,
        },
        {
            id: 4,
            city: 'Paris',
            temp: 12.89,
            pressure: 1018,
            humidity: 44,
        },
        {
            id: 5,
            city: 'Berlin',
            temp: 12.89,
            pressure: 2019,
            humidity: 70,
        },
    ]

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
                    {data.map(item => (<WeatherItem data={item} />))}
                </tbody>
            </Table>
        </div>
    )
}