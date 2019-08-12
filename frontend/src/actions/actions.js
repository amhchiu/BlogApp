import axios from 'axios';

export const blogpostsFromURL = () => (dispatch) => {
    return axios.get(`${process.env.API_URL}/api/posts`)
        .then( ({data}) => {
            dispatch({type: 'LOAD_BLOGPOSTS_SUCCESS', payload: data});
        })
        .catch( err => dispatch({ type: 'LOAD_BLOGPOSTS_ERROR', payload: err }));
};
//Load blogposts initialisation. 
export const blogpostFromUID = (uid) => (dispatch) => {
    return axios.get(`${process.env.API_URL}/api/uid/${uid}`) //localhost:8080/api/uid/:uid
        .then( ({data}) => {
            dispatch({type: 'LOAD_POST_SUCCESS', payload: data})
        }).catch(err => console.log(err));
};
/**
 * POSTs new post to add to db. in handler; creates a uid and title stub. and returns. Or rather, 
 */
export const createNewPost = (query) => (dispatch) => {
    console.log(query);
    return axios.post(`${process.env.API_URL}/api/posts`, query)
        .then( ({data}) => {
            dispatch({type: 'CREATE_BLOGPOST_SUCCESS', payload: data});
        })
        .catch( err => {
            dispatch({ type: 'CREATE_POST_ERROR', payload: err })
        });
};

export const savePost = (query) => (dispatch) => {
    
}
/**
 * Load draft on /Create. via user. 
 */
export const loadDraft = () => (dispatch) => {
    return axios.get(`${process.env.API_URL}/api/user/draft`)
        .then( ({data}) => {
            dispatch({type: 'LOAD_DRAFT_SUCCESS', payload: data});
        })
        .catch( err => {
            dispatch({ type: 'LOAD_DRAFT_ERROR', payload: err});
        })
};

export const updateDraft = (newDraft) => (dispatch) => {
    return axios.put(`${process.env.API_URL}/api/user/draft`, newDraft)
        .then( ({data}) => {
            dispatch({ type: 'UPDATE_DRAFT', payload: data});
        })
        .catch( err => {
            dispatch({ type: 'UPDATE_DRAFT_ERROR', payload: err});
        })
};

//equiv to cnp(query){ return func(dispatch){ //dosomething }}... currying
