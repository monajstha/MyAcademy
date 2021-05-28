let initialState = {
  login: false,
  username: '',
  faculty: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGIN_STATUS':
      return {
        ...state,
        login: action.payload,
      };
    case 'SET_Faculty':
      return {
        ...state,
        faculty: action.payload,
      };
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export default user;
