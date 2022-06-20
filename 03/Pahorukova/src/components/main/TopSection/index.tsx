import { FormEvent, ChangeEvent } from "react";
import Form from "./Form";

type Props = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isError: boolean;
};

export const TopSection = ({onSubmit, onChange, value, isError}: Props) => {

  return (
    <div className="top-section d-flex align-center">
      <div className="container">
        <div className="top-section-content">
          <h1 className="top-section-title">Discover stays<br/>to live, work or just relax</h1>
          <Form title ="Your destination or hotel name" value={value} isError={isError} onSubmit={onSubmit} onChange={onChange}/>
        </div>
      </div>
    </div>
  )
}