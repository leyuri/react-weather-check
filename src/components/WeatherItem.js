import React from 'react';

export default function WeatherItem({data}) {
    return (
        <tr>
            <td>{data.city}</td>
            <td>{data.temp}</td>
            <td>{data.pressure}</td>
            <td>{data.humidity}</td>
        </tr>
    )
}
