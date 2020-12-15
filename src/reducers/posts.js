
// Posts Reducer
const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...state,action.payload];
      case "DELETE":
      return state.filter((post)=> post._id !== action.payload);
    default:
      return state;
  }
};

export default postsReducer;
