import produce from "immer";

const initialState = {
    cities : [ ]
};
// produce를 이용하여 현재 state 와 action 을 받음
const reducer = produce((state, action) => {
    // console.log(action);
    switch(action.type) {
        case 'ADD_CITY' :
            state.cities.push(action.payload);
            break;
        default:
            break;
    }
}, initialState)

export default reducer;