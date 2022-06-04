import Post from "../Post/Post";
import { data } from "../data";
import "../Style/styles.scss";
import { Tposts } from "../Post/Post";

const Hotel = () => {
  return (
    <div className="container">
      <h2 className="hotel__title">Homes guests loves</h2>
      <div className="wraper">
        {data.map((post: Tposts) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
export default Hotel;
