/* eslint-disable */
import * as types from '../constants/actionTypes';

export function beginFetchRequest() {
  return {
    type: types.FETCH_REQUEST,
  };
}

export function fetchRequestSuccess() {
  return {
    type: types.FETCH_REQUEST_SUCCESS,
  };
}

export function fetchRequestError() {
  return {
    type: types.FETCH_REQUEST_FAILURE,
  };
}
