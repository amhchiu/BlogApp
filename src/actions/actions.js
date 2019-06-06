import axios from 'axios';
import config from '../config.json';

export const blogpostsFromURL = () => (dispatch) => {
    return axios.get('http://localhost:8080/api/posts')
        .then( ({data}) => {
            dispatch({type: 'LOAD_BLOGPOSTS_SUCCESS', payload: data});
        })
        .catch( err => dispatch({ type: 'LOAD_BLOGPOSTS_ERROR', payload: err }));
};
//Load blogposts initialisation. 
export const blogpostFromUID = (uid) => (dispatch) => {
    return axios.get(config.Backend+'/api/uid/'+uid) //localhost:8080/api/uid/:uid
        .then( ({data}) => {
            console.log(data);
            dispatch({type: 'LOAD_POST_SUCCESS', payload: data})
        }).catch(err => console.log(err));
};
/**
 * POSTs new post to add to db. in handler; creates a uid and title stub. and returns. Or rather, 
 */
export const createNewPost = (query) => (dispatch) => {
    console.log(query);
    return axios.post('http://localhost:8080/api/posts', query)
        .then( ({data}) => {
            console.log('in loop')
            dispatch({type: 'CREATE_BLOGPOST_SUCCESS', payload: data});
        })
        .catch( err => {
            console.error(err);
            dispatch({ type: 'CREATE_POST_ERROR', payload: err })
        });
};

//equiv to cnp(query){ return func(dispatch){ //dosomething }}... currying
