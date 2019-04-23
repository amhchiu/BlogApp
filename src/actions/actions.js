import axios from 'axios';

export const blogpostsFromURL = () => (dispatch) => {
    console.log('actions');
    return axios.get('http://localhost:8080/api/posts')
        .then( ({data}) => {
            console.log(data);
            dispatch({type: 'LOAD_BLOGPOST_SUCCESS', payload: data});
        })
        .catch( err => dispatch({ type: 'LOAD_BLOGPOST_ERROR', payload: err.toString() }));
};
//Load blogposts initialisation. 
export const blogpostFromID = () => (dispatch) => {
    
};

export const createNewPost = (query) => (dispatch) => {
    console.log(query);
    axios.post('http://localhost:8080/api/posts', query)
        .then( ({data}) => {
            console.log(data);
            dispatch({type: 'CREATE_BLOGPOST_SUCCESS', payload: data});
        })
        .catch( err => dispatch({ type: 'CREATE_POST_ERROR', payload: err.toString() }));
};
