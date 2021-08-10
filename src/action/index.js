import axios from 'axios';

// api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=4bc24589ea6c357b1047473b713d25eb&units=metric
const API_URI = "http://api.openweathermap.org/data/2.5/forecast"
const API_KEY = "4bc24589ea6c357b1047473b713d25eb"

export function searchCity(name) {
    return (dispatch) => {
        dispatch({type: 'START_LOADING'});
        dispatch({type: 'CREAR_ERRORS'});
        axios.get(API_URI, {
            params: {
                q: name,
                appid: API_KEY,
                units: 'metric'
            }
        }).then(({ data }) => {
            dispatch({
                type: 'SEARCH_CITY',
                payload: data
            });
        }).catch((error) => {
            // console.log(error.response.data);
            dispatch({
                type: 'ERROR',
                payload: error.response.data
            })            
        }).then(() => {
            dispatch({
                type: 'END_LOADING'
            });
        })
    }
}