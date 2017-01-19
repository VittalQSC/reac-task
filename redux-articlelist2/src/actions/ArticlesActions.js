import * as types from '../constants/ActionTypes';

export function addArticle(name) {
  return {
    type: types.ADD_ARTICLE,
    name
  };
}

export function deleteArticle(id) {
  return {
    type: types.DELETE_ARTICLE,
    id
  };
}

export function starArticle(id) {
  return {
    type: types.STAR_ARTICLE,
    id
  };
}
