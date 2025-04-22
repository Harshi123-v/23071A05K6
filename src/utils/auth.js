// utils/auth.js

export const registerUser = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) return false;
    users[username] = { password };
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  };
  
  export const loginUser = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]?.password === password) {
      localStorage.setItem('loggedInUser', username);
      return true;
    }
    return false;
  };
  
  export const logoutUser = () => {
    localStorage.removeItem('loggedInUser');
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem('loggedInUser');
  };
  