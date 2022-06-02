function logout(): void {
  return localStorage.removeItem('loginStatus');
}

export default logout;
