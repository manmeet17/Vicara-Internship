import axios from 'axios';
export const FETCH_POST="FETCH_POST"

const url="http://reduxblog.herokuapp.com/api/posts";
const api="?key=manmeet"

export function fetchPost() {
    const req=axios.get(url+api);
    return {
        type: FETCH_POST,
        payload: req
    };
}