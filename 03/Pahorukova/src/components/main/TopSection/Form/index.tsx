import { FormEvent, ChangeEvent } from "react";

type Props = {
  title: string;
  value: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
};


const Form = ({title, onSubmit, onChange, value, isError}: Props) => {
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <div className="form-input">
          <p className="form-input__label">{title}</p>
          <input value={value} className = "form-input__search" name ="name" placeholder = "Enter name hotel" onChange={onChange}/>
        </div>
        <button className="form-button">Search</button>
      </form>
  </div> 
  )
}
  
export default Form;