import { DataBlock } from '../../components/DataBlock';
import { dogsListPath } from '../../services/api/dogs';

export const HomePage = () => 
(
    <>
        <h1>Dogs Breeds</h1>
        <DataBlock path = {dogsListPath}/> 
    </>
)