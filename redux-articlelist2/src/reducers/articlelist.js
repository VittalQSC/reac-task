import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {
  articles: [1, 2, 3],
  articlesById: {
    1: {
      id: 1,
      name: 'Theodore Roosevelt'
    },
    2: {
      id: 2,
      name: 'Abraham Lincoln'
    },
    3: {
      id: 3,
      name: 'George Washington'
    }
  }
};

export default function articles(state = initialState, action) {
  switch (action.type) {

    case types.ADD_ARTICLE:
      const newId = state.articles[state.articles.length-1] + 1;
      return {
        ...state,
        articles: state.articles.concat(newId),
        articlesById: {
          ...state.articlesById,
          [newId]: {
            id: newId,
            name: action.name
          }
        },
      }

    case types.DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(id => id !== action.id),
        articlesById: omit(state.articlesById, action.id)
      }

    case types.STAR_ARTICLE:
      return {
        ...state,
        articlesById: mapValues(state.articlesById, (article) => {
          return article.id === action.id ?
            assign({}, article, { starred: !article.starred }) :
            article
        })
      }

    default:
      return state;
  }
}
