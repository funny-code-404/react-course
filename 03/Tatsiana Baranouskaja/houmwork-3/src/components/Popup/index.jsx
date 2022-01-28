import './style.scss';

const Popup = ({ text, updateData }) => {
    const handleClick = () => {
        updateData('UPDATED TEXT');
    };
    return (
        <div className='popup'>
            {text}
            <button className='button' onClick={handleClick}>Click</button>
        </div>
    )
};


export default Popup;