export const isAuthenticated = () => {
  const token = localStorage.getItem ('userToken') || null;
  return token !== null;
}

export const getToken = () => {
  const token = localStorage.getItem ('userToken') || null;
  return token;
};

export const getUserName = () => localStorage.getItem ('userName');
export const getUserID = () => parseInt (localStorage.getItem ('userID'));

export const getUserLevel = () => {
  let level;
  
  switch (parseInt (localStorage.getItem ('userLevel'))) {
    case comp_key: level = 'company'; break;
    case adm_key: level = 'admin'; break;
    case user_key: level = 'user'; break;
    default: break;
  }
  return level;
}

export const login = data => {
  localStorage.setItem ('userToken', data.token);
  localStorage.setItem ('userName', data.userName);
  localStorage.setItem ('userID', data.userID);
  localStorage.setItem ('userLevel', data.level);
};

export const logout = () => {
  localStorage.removeItem ('userToken');
  localStorage.removeItem ('userName');
  localStorage.removeItem ('userID');
  localStorage.removeItem ('userLevel');
};


const user_key = 4268;
const adm_key = 9317;
const comp_key = 5648;
