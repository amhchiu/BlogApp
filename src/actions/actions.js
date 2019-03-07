import axios from 'axios';

export const blogpostsFromURL = () => (dispatch) => {
    return axios.get('http://localhost:8080/api/posts')
        .then( ({data}) => {
            dispatch({type: 'LOAD_BLOGPOST_SUCCESS', payload: data});
        })
        .catch( err => dispatch({ type: 'LOAD_BLOGPOST_ERROR', payload: err.toString() }));
};

export const blogpostFromID = () => (dispatch) => {
    
};