import React from "react";

import "./sidebar.scss";

class SideBar extends React.Component {
  render() 
  {
    const sidebar = this.props.sidebar;
    return (
      <ul>
        {sidebar.map((item) => (
          <li key={item?.id}>{item?.label}</li>
        ))}
      </ul>
    );
  }
  }

export default SideBar;