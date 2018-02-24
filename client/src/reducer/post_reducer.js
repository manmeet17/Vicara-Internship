import { FETCH_SINGLE_POST,FETCH_POST,DELETE_POST } from "../action/index";
import _ from 'lodash';

export default function(state={},action){
    switch(action.type){
        case FETCH_POST:
            console.log("Payload returned: ",action.payload.data);
            return _.mapKeys(action.payload.data,'id');
        case FETCH_SINGLE_POST:
            const post=action.payload.data;
            const newState= {...state };
            newState[post.id]=post;
            console.log('newState: ', newState);
            return newState;
        case DELETE_POST:
            const delPost=action.payload.id;
            return delPost;
        default:
            return state;
    }
}