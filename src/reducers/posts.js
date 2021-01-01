const initialPostsState = {
  get: [],
  count: 0,
  create: {
    status: false,
    message: "",
  },
  update: {
    status: false,
    message: "",
  },
  delete: {
    status: false,
    message: "",
  },
};

const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, get: action.payload };
    case "COUNT":
      return { ...state, count: action.payload };
    case "CREATE":
      return { ...state, create: action.payload.create, get: [...state.get, action.payload.postData] };
    case "UPDATE":
      return {
        ...state,
        update: action.payload.update,
        get: state.get.map((post) => (post._id === action.payload.postData._id ? action.payload.postData : post)),
      };
    case "DELETE":
      return { ...state, update: action.payload.update, get: state.get.filter((post) => post._id !== action.payload.postId) };
    case "LOGOUT":
      return initialPostsState;
    case "CLEAN_CREATE":
      return { ...state, create: action.payload };
    case "CLEAN_UPDATE":
      return { ...state, update: action.payload };
    case "CLEAN_DELETE":
      return { ...state, delete: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
