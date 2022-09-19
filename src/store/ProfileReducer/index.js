
import cloneDeep from "lodash/cloneDeep";
import { LikeTypes } from "../LikeReducer/actionTypes";
import { ADD_COMMENT } from "./actionTypes";
import { CREATE_SECONDARY_STORE } from "./actionTypes";
import { CREATE_PRIMARY_STORE } from "./actionTypes";

const initialState = {};

const ProfileReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case CREATE_PRIMARY_STORE: {
      const { profile_id, likeData } = action.payload;
      const cloneState = cloneDeep(state);
      cloneState[profile_id] = {}
      cloneState[profile_id]['likeData'] = [];
      for(let i=0; i<likeData.length; i++) {
        cloneState[profile_id]['likeData'].push(likeData[i]);
      }
      return cloneState
    }
    case LikeTypes.INCREASE_LIKE: {
      const { profile_id, item } = action.payload;
      const cloneState = cloneDeep(state);
      cloneState[profile_id]['likeData'].forEach(likeItem => {
        if(likeItem.id === item.id) {
          likeItem.like = likeItem.like + 1
          likeItem.liked = true
        }
      });
      return cloneState
    }
    case LikeTypes.DECREASE_LIKE: {
      const { profile_id, item } = action.payload;
      const cloneState = cloneDeep(state);
      cloneState[profile_id]['likeData'].forEach(likeItem => {
        if(likeItem.id === item.id) {
          likeItem.like = likeItem.like - 1
          likeItem.liked = false
        }
      });
      return cloneState
    }
    case ADD_COMMENT: {
      const { profile_id, item, comObj } = action.payload;
      const cloneState = cloneDeep(state);
      cloneState[profile_id]['likeData'].forEach(likeItem => {
        if(likeItem.id === item.id) {
          likeItem.coments.unshift(comObj);
        }
      });
      return cloneState
    }
    default: return state
  }
}

export default ProfileReducer;