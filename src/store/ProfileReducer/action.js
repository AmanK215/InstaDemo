import { ADD_COMMENT, CREATE_PRIMARY_STORE } from "./actionTypes"


export const createPrimaryStore = payload => {
  return {
    type: CREATE_PRIMARY_STORE,
    payload: payload
  }
}

export const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload: payload
  }
}