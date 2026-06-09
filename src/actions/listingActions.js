import {
  LISTING_LIST_REQUEST,
  LISTING_LIST_SUCCESS,
  LISTING_LIST_FAIL,
} from '../types/listingTypes';
import axios from 'axios';

export const listListing = () => async (dispatch) => {
  try {
    dispatch({ type: LISTING_LIST_REQUEST });

    console.log("Making request...");

    const { data } = await axios.get(
      "http://localhost:5000/listings"
    );

    console.log("Data received:", data);

    dispatch({
      type: LISTING_LIST_SUCCESS,
      payload: data,
    });

  } catch (error) {
    console.log("FULL ERROR:", error);
    console.log("ERROR MESSAGE:", error.message);
    console.log("ERROR RESPONSE:", error.response);

    dispatch({
      type: LISTING_LIST_FAIL,
      payload: error.message,
    });
  }
};