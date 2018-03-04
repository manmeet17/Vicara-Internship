import axios from 'axios';
export const FETCH_POST="FETCH_POST";
export const FETCH_SINGLE_POST="FETCH_SINGLE_POST";
export const DELETE_POST="DELETE_POST";

// var callApi= async () =>{
//     const res=await fetch('/api/users');
//     const body = await res.json();
//     if (res.status!==200) throw Error(body.message);
//     return body;
// }

export function fetchPosts(){
    const req=axios.get('http://localhost:3001/api/posts');
    console.log("Req: ",req);
    return {
        type: FETCH_POST,
        payload: req
    }
}

export function fetchPost(id){
    const req=axios.get(`http://localhost:3001/api/posts/${id}`);
    console.log("Req is :",req);
    return {
        type: FETCH_SINGLE_POST,
        payload: req
    }
}

export function deletePost(id,cb){
    const request=axios.delete(`http://localhost:3001/api/posts/${id}`).then(() => cb());
    return{
        type: DELETE_POST,
        payload: id
    }
}