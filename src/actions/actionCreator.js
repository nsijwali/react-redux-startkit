import {
    GET_INITIAL_STATE
} from './actionTypes';


export const getInitialState = (dispatch) => {
    dispatch({
        type: GET_INITIAL_STATE,
        key: 'title'
    })
};