import { LikeTypes } from "./actionTypes"

export const IncreaseLike = payload => {
  return {
    type: LikeTypes.INCREASE_LIKE,
    payload: payload
  }
}

export const DecreaseLike = payload => {
  return {
    type: LikeTypes.DECREASE_LIKE,
    payload: payload
  }
}