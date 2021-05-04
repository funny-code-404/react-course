import { React, useState } from "react";

const Form = ({ title, loginConfig, signupConfig, deleteConfig }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "isSaved":
        setIsSaved(checked);
        break;
      case "phone":
        setPhone(value);
        break;
      case "surname":
        setSurname(value);
        break;
      case "year":
        setYear(value);
        break;
      case "rating":
        setRating(value);
        break;
    }
  };

  return (
    <form>
      <div>{title}</div>
      <input
        type="text"
        onChange={handleChange}
        name="name"
        placeholder="Name"
        value={name}
      />
      <input
        type="text"
        onChange={handleChange}
        name="email"
        placeholder="Email"
        value={email}
      />
      <input
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="Password"
        value={password}
      />

      {Boolean(loginConfig) && (
        <div className="form_login">
          <label>
            <input
              type="checkbox"
              name="isSaved"
              onChange={handleChange}
              checked={isSaved}
            />
            Оставить в системе
          </label>
          <button onClick={loginConfig.handler}>{loginConfig.label}</button>
        </div>
      )}

      {Boolean(signupConfig) && (
        <div className="form_signup">
          <input
            type="text"
            onChange={handleChange}
            name="surname"
            placeholder="Surname"
            value={surname}
          />
          <input
            type="text"
            onChange={handleChange}
            name="phone"
            placeholder="Phone"
            value={phone}
          />
          <input
            type="text"
            onChange={handleChange}
            name="year"
            placeholder="Year"
            value={year}
          />
          <button onClick={signupConfig.handler}>{signupConfig.label}</button>
        </div>
      )}

      {Boolean(deleteConfig) && (
        <div className="form_delete">
          <textarea placeholder="Оставьте свой отзыв" />
          <p>Оцените работу приложения</p>
          <div>
            <label>
              <input
                type="radio"
                name="rating"
                value="1"
                onChange={handleChange}
              />
              1
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="2"
                onChange={handleChange}
              />
              2
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="3"
                onChange={handleChange}
              />
              3
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="4"
                onChange={handleChange}
              />
              4
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="5"
                onChange={handleChange}
              />
              5
            </label>
          </div>
          <button onClick={deleteConfig.handler}>{deleteConfig.label}</button>
        </div>
      )}
    </form>
  );
};

export default Form;
