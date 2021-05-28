import React, {useState, useEffect} from "react";

const withItemData = (Component) => (props) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(props.url)
        .then((data) => data.json())
        .then((data) => setData(data));
    }, [])

  return (data && <Component data={data} {...props} />);
};

export default withItemData;