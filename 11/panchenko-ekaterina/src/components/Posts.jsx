import { useEffect } from "react";
import { connect } from "react-redux";

import { ACTION_GET_DATA } from "../middlewares/actions";
import { Link } from "react-router-dom";

const PostsList = ({ getData, data, error }) => {
  useEffect(() => {
    getData("/posts");
  }, [getData]);

  return (
    <section>
      {data.length ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <Link
                to={{
                  pathname: `/posts/${item.id}`,
                  state: { item },
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        error && <h1>{error}</h1>
      )}
    </section>
  );
};

export const mapStateToProps = ({ posts }) => ({
  data: posts.data,
  error: posts.error,
});

export const mapDispatchToProps = (dispatch) => ({
  getData: (path) => {
    dispatch(ACTION_GET_DATA(path));
  },
});

export const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsList);
