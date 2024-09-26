import { HomesContent } from "../../data/data";
import HomesItem from "../HomesItem/HomesItem";

type Propes = {
    homes: HomesContent[];
}

export const SearchList = ({ homes }: Propes) => {
    return (
        <div className="">
            <ul className="homes__items">
                {homes.map((home) =>(
                    <HomesItem key={home.id} home={home}/>
                ))}
            </ul>
        </div>
    );
};