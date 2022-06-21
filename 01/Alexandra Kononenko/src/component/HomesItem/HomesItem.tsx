type HomesContent = {
        id: string,
        name: string,
        city: string,
        country: string,
        imageUrl: string,
};

const HomesItem = ({key, home}: { key: string, home: HomesContent}) => {
    return (
      <li className="hotel" key={home.id}>
        <img className="hotel__image" src={home.imageUrl} alt="hotel" />
        <p className="hotel__name">{home.name}</p>
        <p className="hotel__local">{home.city}, {home.country}</p>
      </li>
    );
}

export default HomesItem;