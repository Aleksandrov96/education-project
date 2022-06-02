const getLoginStatus = (): boolean => {
  if (localStorage.getItem('loginStatus')) {
    return true;
  }
  return false;
};

export default getLoginStatus;
