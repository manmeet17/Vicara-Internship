import axios from 'axios';
export const FETCH_POST="FETCH_POST";
export const FETCH_SINGLE_POST="FETCH_SINGLE_POST";
export const DELETE_POST="DELETE_POST";

const url="http://reduxblog.herokuapp.com/api/posts";
const api="?key=manmeet";

export function fetchPosts() {
    const req=axios.get(url+api);
    return {
        type: FETCH_POST,
        payload: req
    };
}

export function fetchPost(id){
    const req=axios.get(`${url}/${id}${api}`);
    return {
        type: FETCH_SINGLE_POST,
        payload: req
    }
}

export function deletePost(id,cb){
    const request=axios.delete(`${url}/${id}${api}`).then(() => cb());
    return{
        type: DELETE_POST,
        payload: id
    }
}