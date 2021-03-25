import useForm from '../../Hooks/useForm.hook';

const Form = () => {
  const {
    value,
    formData,
    handleChange,
    handleClick
  } = useForm();

  return (
    <>
      <div>
        <input value={value} onChange={handleChange}></input>
        <button onClick={handleClick}>Submit</button>
      </div>
      <ul>
        {formData.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </>
  )
}

export default Form;
