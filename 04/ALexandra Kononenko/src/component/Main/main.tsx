import SearchHomes from '../Search/SearchHomes';
import { HomesContent} from '../../data/data';

type Props = {
    data: HomesContent[]
}
export const Main = ({data}: Props) => {
    
    return(
        <main>
            <SearchHomes homes={data} />
        </main>
    )
     
};

export default Main;