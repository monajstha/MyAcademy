export const setUser = (login) => {
  return {
    type: 'SET_LOGIN_STATUS',
    payload: {login},
  };
};

export const setFaculty = (faculty) => {
  return {
    type: 'SET_Faculty',
    payload: {faculty},
  };
};

export const setUsername1 = (username) => {
  return {
    type: 'SET_USERNAME',
    payload: {username},
  };
};
