import {
  initialStateItems,
  GET_ALL_ITEMS, GET_ALL_ITEMS_PENDING, GET_ALL_ITEMS_ERROR,
} from '../constants/constants';

const itemReducer = (state = initialStateItems, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return {
        ...state,
        pending: false,
        itemsList: action.itemsList,
      };
    case GET_ALL_ITEMS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_ITEMS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };  
    default:
      return state;
  }
};

export default itemReducer;