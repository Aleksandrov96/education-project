function setToken(value: string) {
  localStorage.setItem('loginStatus', value);
  return { value };
}

export default setToken;
