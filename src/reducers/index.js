import produce from "immer";

const initialState = {
    cities : [],
    error: null,
    loading: false,
};
// produce를 이용하여 현재 state 와 action 을 받음
const reducer = produce((state, action) => {
    // console.log(action);
    switch(action.type) {
        case 'SEARCH_CITY' :
            state.cities.push(action.payload);
            break;
        case 'ERROR' :
            state.error = action.payload;
            break;
        case 'CREAR_ERRORS' :
            state.error = null;
            break;
        case 'START_LOADING' :
            state.loading = true;
            break;
        case 'END_LOADING' :
            state.loading = false;
            break;
        default:
            break;
    }
}, initialState)

export default reducer;