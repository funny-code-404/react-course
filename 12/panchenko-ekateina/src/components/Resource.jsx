import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Resource = ({ url, action, data, type }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (url && !data) {
      dispatch(action(url));
    }
  }, [url, data]);

  return (
    <ul>
      {data?.map((item) => (
        <li key={item.id}>
          <Link
            to={{
              pathname: `/${type}/${item.name.toLowerCase()}`,
              state: {
                data: item,
              },
            }}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
