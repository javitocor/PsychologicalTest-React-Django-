import {
  GET_ALL_ITEMS, GET_ALL_ITEMS_PENDING, GET_ALL_ITEMS_ERROR,
} from '../constants/constants';


export const getAllItems = itemsList => ({
  type: GET_ALL_ITEMS,
  itemsList,
});

export const getAllItemsError = error => ({
  type: GET_ALL_ITEMS_ERROR,
  error,
});

export const getAllItemsPending = () => ({
  type: GET_ALL_ITEMS_PENDING,
});
