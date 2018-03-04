import { FETCH_SINGLE_POST,FETCH_POST,DELETE_POST } from "../action/index";
import _ from 'lodash';

export default function(state={},action){
    switch(action.type){
        case FETCH_POST:
            console.log("Payload returned: ",action.payload.data.info);
            return _.mapKeys(action.payload.data.info,'_id');
        case FETCH_SINGLE_POST:
            const post=action.payload.data.info;
            const newState= {...state };
            newState[post._id]=post;
            console.log('newState: ', newState);
            return newState;
        case DELETE_POST:
            const delPost=action.payload.id;
            return delPost;
        default:
            return state;
    }
}
