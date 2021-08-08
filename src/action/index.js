export function addCity(name) {
    return {
        type : 'ADD_CITY',
        payload: {
            city: name,
            temp: 40,
            pressure: 100,
            humidity : 80
        }
    }
}

