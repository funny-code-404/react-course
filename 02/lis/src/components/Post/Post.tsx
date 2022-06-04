import "../Style/styles.scss";

export type Props = {
  post: {
    imageUrl: string;
    name: string;
    city: string;
    country: string;
    id: string;
  };
};
export type Tposts = {
  imageUrl: string;
  name: string;
  city: string;
  country: string;
  id: string;
};
const Post = (props: Props) => {
  return (
    <div className="post">
      <img
        className="hotel_img"
        src={props.post.imageUrl}
        alt={props.post.name}
      ></img>
      <p className="hotel_name">{props.post.name}</p>
      <p className="hotel_city">
        {props.post.city},{props.post.country}
      </p>
    </div>
  );
};
export default Post;
