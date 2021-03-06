import axios from 'axios';
export const FETCH_POST="FETCH_POST";
export const FETCH_SINGLE_POST="FETCH_SINGLE_POST";
export const DELETE_POST="DELETE_POST";
export const CREATE_POST="CREATE_POST";

// var callApi= async () =>{
//     const res=await fetch('/api/users');
//     const body = await res.json();
//     if (res.status!==200) throw Error(body.message);
//     return body;
// }

export function fetchPosts(){
    const req=axios.get('/api/posts');
    return {
        type: FETCH_POST,
        payload: req
    }
}

export function fetchPost(id){
    const req=axios.get(`/api/posts/${id}`);
    return {
        type: FETCH_SINGLE_POST,
        payload: req
    }
}

export function deletePost(id,cb){
    const req=axios.delete(`/api/posts/${id}`).then(() => cb());
    return{
        type: DELETE_POST,
        payload: id
    }
}

export function createPost(values,cb){
    const req=axios.post('/api/posts/new',values).then(() => cb()).catch((err) => console.log(err));
    return {
        type: CREATE_POST,
        payload: req
    }
}