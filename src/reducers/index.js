import produce from "immer";

const initialState = {
    cities : [
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
};
const reducer = produce((state, action) => {
    switch(action.type) {
        default:
            break;
    }
}, initialState)

export default reducer;