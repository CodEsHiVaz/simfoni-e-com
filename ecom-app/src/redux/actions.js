import axios from "axios";

export const fetchData = () => async (dispatch) => {
    console.log("dfgf gf gfjfgjd jtf ")
  try {
    const response = await axios.get("https://api.example.com/data");
    dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
  }
};
