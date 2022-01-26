/* eslint-disable react/prop-types */
import './styles.scss';

const Popup = ({ text, updateData }) => {
  const handleClick = () => {
    // ...

    updateData('UPDATED TEXT');
  };

  return (
    <div className='popup'>
      {text}
      <button className='button' onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default Popup;
