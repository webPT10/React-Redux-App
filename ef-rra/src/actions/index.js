import axios from 'axios';

export const FETCH_DOGS_START = 'FETCH_DOGS_START';
export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS';
export const FETCH_DOGS_FAIL = 'FETCH_DOGS_FAIL';

export const getDogs = () => {
    dispatch({ type: FETCH_DOGS_START });

    axios   
        .get('https://dog.ceo/api/breed/germanshepherd/images')
        .then(response => {
            console.log(response.data.message);
            dispatch({ type: FETCH_DOGS_SUCCESS, payload: response.data.message })
        })
        .catch(error => {
            console.log('Dog-o error:', error);
            dispatch({ type: FETCH_DOGS_FAIL, payload: error })
        })
}