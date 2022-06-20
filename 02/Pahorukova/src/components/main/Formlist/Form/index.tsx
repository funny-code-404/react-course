import { ChangeEvent } from "react";

type Props = {
  title: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};


const Form = ({title, onChange}: Props) => {
  return (
    <div>
      <div className="search-form">
        <div className="input">
          <h3 className="input__title">{title}</h3>
          <input className = "input__name" name ="name" onChange={onChange} placeholder = "Enter name hotel"/>
        </div>
      </div>
  </div> 
  )
}
  
export default Form;