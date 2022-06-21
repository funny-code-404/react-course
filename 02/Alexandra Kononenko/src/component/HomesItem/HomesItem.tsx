import { HomesContent } from "../../data/data";

type PropsHome = {
  home: HomesContent;
}

const HomesItem = ({home}: PropsHome) => {
    return (
      <li className="hotel" key={home.id}>
        <img className="hotel__image" src={home.imageUrl} alt="hotel" />
        <p className="hotel__name">{home.name}</p>
        <p className="hotel__local">{home.city}, {home.country}</p>
      </li>
    );
}

export default HomesItem;