import React from 'react';

type Props = {
  onClick: () => void,
  className: string,
  text: string
};

function EditButton({ onClick, className, text }: Props) {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default EditButton;
