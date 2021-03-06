import { combineReducers } from 'redux';

/**
 * Hydrates state tree from reducer initialstate or from createStore initial state param which takes priority.
*/

/**
 * array of blogposts limited to n sorted by date. 
 * single blogpost when viewing it
 */
const initialBlogState = {
    blogPosts: [], 
    currentPost: {}, 
    draft: {
        
    }
};

const initialErrorState = {
    error: null
};

const initialDraftState = {

};

const initialNavState = {
    create: false
};

const blogPostReducer = (state = initialBlogState, action) => {
    switch (action.type) {
        case 'LOAD_BLOGPOSTS_SUCCESS':
            return { ...state, blogPosts: action.payload };
        case 'CREATE_BLOGPOST_SUCCESS':
            return { ...state, blogPosts: [...state.blogPosts, action.payload] } //add payload obj to state
        case 'LOAD_POST_SUCCESS':
            return { ...state, currentPost: action.payload };
        case 'CLEAR_CURRENTPOST':
            console.log('clear currentpost');
            return { ...state, currentPost: {}};
        case 'LOAD_DRAFT':
            return {...state, draft: action.payload};
        default:
            return state;
    }
};

const errorReducer = (state = initialErrorState, action) => {
    switch (action.type) {
        case 'LOAD_BLOGPOSTS_ERROR':
            return { ...state, error: action.payload };
        case 'CREATE_POST_ERROR':
            return { ...state, error: action.payload};
        default:
            return state;
    }
};

export default combineReducers({
    blog: blogPostReducer,
    error: errorReducer
});
