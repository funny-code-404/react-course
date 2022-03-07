import React from 'react';

function Input({ name, value, type, placeholder, onChange }) {
  return (
    <>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </>
  );
}

export default React.memo(Input);
