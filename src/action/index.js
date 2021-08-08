import axios from 'axios';

// api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=4bc24589ea6c357b1047473b713d25eb&units=metric
const API_URI = "http://api.openweathermap.org/data/2.5/forecast"
const API_KEY = "4bc24589ea6c357b1047473b713d25eb"

export function addCity(name) {
    return (dispatch) => {
        axios.get(API_URI, {
            params: {
                q: name,
                appid: API_KEY,
                units: 'metric'
            }
        }).then(({ data }) => {
            const { city, list } = data;
            const { temp, pressure, humidity } = list[0].main;

            dispatch({
                type: 'ADD_CITY',
                payload:
                {
                    id: city.id,
                    city: city.name,
                    list: list, temp, pressure, humidity
                }
            });
        }).catch((error) => {
            console.log(error);
        });
    }
}