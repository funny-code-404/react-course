import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { URL_TODOS } from "../../constants/api";

const InfoTodoPage = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${URL_TODOS}/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    data && (
      <div>
        <h2>User id: {data.userId}</h2>
        <h3>Title: {data.title}</h3>
      </div>
    )
  );
};

InfoTodoPage.propTypes = {
  text: PropTypes.string,
};

export default InfoTodoPage;
