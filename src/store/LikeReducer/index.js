import { LikeTypes } from "./actionTypes";

const initialState = {
  like: 36
};

const LikeReducer = ( state = initialState, action ) => {
  switch(action.type) {
    // case LikeTypes.INCREASE_LIKE: return {
    //   ...state,
    //   like: state.like + 1
    // }
    // case LikeTypes.DECREASE_LIKE: return {
    //   ...state,
    //   like: state.like - 1
    // }
    default: return state
  }
}

export default LikeReducer;