import loading from './Loading.gif';

const LoaderSecondary = () => {
    return (
        <div className='small_loader'>
            <img src={loading} alt="loading..." />
        </div>
    );
};

export default LoaderSecondary;
