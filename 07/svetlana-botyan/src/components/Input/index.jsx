import React from 'react'

function Input({ name, value, placeholder, onChange }) {

  return (
    <div>
      <input name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}


export default React.memo(Input);
