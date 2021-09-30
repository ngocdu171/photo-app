import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
}

export const getPosts = createActions({
    getPostRequest: undefined, //gui 1 request di. vi ko co payload nen de undifined
    getPostSuccess: (payload) => payload, //co ket qua se goi den action nay
    getPostFailure: (err) => err,
});