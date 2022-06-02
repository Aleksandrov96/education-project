const login = (email: string, pass: string) => new Promise((resolve, reject) => {
  if (email === 'admin@gmail.com' && pass === '123456') {
    setTimeout(() => {
      resolve('admin');
    }, 1000);
  } else if (email === 'user@gmail.com' && pass === '654321') {
    setTimeout(() => {
      resolve('user');
    }, 1000);
  } else {
    reject(new Error('Auth failure'));
  }
});

export default login;
