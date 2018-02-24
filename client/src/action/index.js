import axios from 'axios';
export const FETCH_POST="FETCH_POST";
export const FETCH_SINGLE_POST="FETCH_SINGLE_POST";
export const DELETE_POST="DELETE_POST";

const url="http://reduxblog.herokuapp.com/api/posts";
const api="?key=manmeet";

// var callApi= async () =>{
//     const res=await fetch('/api/users');
//     const body = await res.json();
//     if (res.status!==200) throw Error(body.message);
//     return body;
// }

export function fetchPosts() {
    fetch('/api/users')
        .then( res => res.json())
        .then(res=> {
            var data = new Promise(function(resolve,reject){
                
            });
        })
        .catch( err => console.error(err))
    return {
        type: FETCH_POST,
        payload: data
    }
}

export function fetchPost(id){
    const req=axios.get(`${url}/${id}${api}`);
    console.log("Req is :",req);
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