import { useContext } from "react";
import DataContext from "../../context/DataContext";
import { Link } from "react-router-dom";

const Data = () => {
  const { data } = useContext(DataContext);

  return (
    Boolean(data?.length) && (
      <div className="nav">
        {data.map((car) => (
          <Link
            to={{
              pathname: `/${car.id}`,
              state: {
                data,
              },
            }}
            key={car.id}
          >
            {car.make + " " + car.model}
          </Link>
        ))}
      </div>
    )
  );
};

export default Data;
