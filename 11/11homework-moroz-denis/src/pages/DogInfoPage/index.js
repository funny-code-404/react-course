import { DogRandomPhoto } from '../../components/DogRandomPhoto' 

export const DogInfoPage = (props) => {
    
    const { breed } = props.match.params;
    
    const handleGoBack = () => {
        const { history } = props;
        history.goBack();
      };

    return (
        <>
            <h1>{breed.charAt(0).toUpperCase() + breed.slice(1)}</h1>

            <DogRandomPhoto breed = {breed}/>

            <div>
                <button onClick = {handleGoBack}>GO BACK</button>
            </div>
        </>
    );
};
