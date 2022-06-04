import { ChangeEvent, useState } from "react";
import { data } from "../data";
import { Tposts } from "../Post/Post";
import "../Style/styles.scss";
import Post from "../Post/Post";
import Form from "../Form/index";

const FormList = () => {
  const [arr, setData] = useState(data);
  const [value, setTextInt] = useState("");
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextInt(
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    );
    setData(data.filter((post) => post.name.includes(event.target.value)));
  };

  return (
    <div className="container">
      <Form onChange={handleOnChange} value={value} />
      <div className="main">
        {arr.map((post: Tposts) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
export default FormList;
