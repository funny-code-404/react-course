import React from 'react';

const Input = ({ name, value, onChange }) => {
  return (
    <>
      <input name={name} value={value} onChange={onChange} required />
    </>
  );
};

export default React.memo(Input);
