import { useState, ChangeEvent } from "react";
import {data} from "./List/data";
import Form from "./Form/";
import List from "./List";



const Formlist = () => {
  const [name, filterName] = useState(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    filterName(data.filter((hotel) => hotel.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())));
  };


  return (
    <div>
      <h2 className="hotels__title">Available hotels</h2>
      <Form title ="Your destination or hotel name" onChange={handleChange}/>
      <List data ={name}/>
    </div>
  )
};

export default Formlist;