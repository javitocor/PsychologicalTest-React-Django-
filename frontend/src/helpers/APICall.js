/* eslint-disable consistent-return */
import 'regenerator-runtime/runtime';
import { URL } from '../constants/constants';
import {
  getAllItems, getAllItemsPending, getAllItemsError, 
} from '../actions/items';

const callApi = () => async dispatch => {
  
  try {
    dispatch(getAllItemsPending());

    const response = await fetch(URL, { mode: 'cors' });
    const data = await response.json();

    dispatch(getAllItems(data));
    
    return data;  
     
  } catch (error) {

    dispatch(getAllItemsError(error));
    console.log(error);
  }
};

export default callApi;