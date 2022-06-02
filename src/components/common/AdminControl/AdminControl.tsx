import React from 'react';

type Props = {
  children: JSX.Element | JSX.Element[];
};

function AdminControl({ children }: Props) {
  const value = localStorage.getItem('loginStatus');
  if (value === 'admin') {
    return (
      <div>{children}</div>
    );
  }
  return null;
}

export default AdminControl;
