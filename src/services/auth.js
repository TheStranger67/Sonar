export const isAuthenticated = () => {
  const token = localStorage.getItem ('userToken') || null;
  return token !== null;
}

export const getToken = () => {
  const token = localStorage.getItem ('userToken') || null;
  return token;
};

export const getUserName = () => {
  return localStorage.getItem ('userName')
};

export const getUserID = () => {
  return localStorage.getItem ('userID')
};

export const login = data => {
  localStorage.setItem ('userToken', data.token);
  localStorage.setItem ('userName', data.userName);
  localStorage.setItem ('userID', data.userID);
};

export const logout = () => {
  localStorage.removeItem ('userToken');
  localStorage.removeItem ('userName');
  localStorage.removeItem ('userID');
};