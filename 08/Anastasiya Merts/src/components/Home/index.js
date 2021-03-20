import { useContext, } from 'react'
import DataContext from '../../context/DataContext';
import { CarButton } from '../../components';
import { BrandList, } from '../styles';

const Home = () => {
    const data = useContext(DataContext);
    
    return (
       <BrandList>
           {data?.map((item) => (<CarButton key={item.id} id={item.id} name={item.name}/>))}
       </BrandList>
    );
}

export default Home;
