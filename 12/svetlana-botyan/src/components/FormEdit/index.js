const FormEdit = ({ id, name, review, email, onChange, onClick }) => {

    return (
        <div>
            <input type="text" name="name" value={name} onChange={onChange} />
            <input type="text" name="review" value={review} onChange={onChange} />
            <input type="email" name="email" value={email} onChange={onChange} />
            <button id={id} onClick={onClick} >Update</button>
        </div>
    );
};

export default FormEdit;
