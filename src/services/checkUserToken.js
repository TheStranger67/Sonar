import api from './api';

const checkUserToken = async () => {
  try {
    await api.get ('/users/check-token', {
      headers: { 'Authorization': 'Bearer ' + localStorage.user_token }
    });
  } catch (error) {
    console.log (error);
  }
}

export default checkUserToken;