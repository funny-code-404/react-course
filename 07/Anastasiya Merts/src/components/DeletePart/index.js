const DeletePart = (props) => {

    const handleClick = (e) => {
        e.preventDefault();
    }

    const handleChangeData = (e) => {
        props.updateData(e.target.name, e.target.value);
    }
    
    console.log("PROPS", props);
    return (
        <div className="additional-part">
                <h3>Delete account</h3>
                <textarea name="review" rows="3" cols="35" id="review" name="review" placeholder="Leave your review" onChange={handleChangeData}/>
                <p className="rating-title ">Please rate app</p>
                <div className="rating">
                        <input className="custom-radio" type="radio" id="rating1" name="rate" value="1" onChange={handleChangeData}/>
                        <label htmlFor="rating1">1</label>
                        <input className="custom-radio" type="radio" id="rating2" name="rate" value="2" onChange={handleChangeData}/>
                        <label htmlFor="rating2">2</label>
                        <input className="custom-radio" type="radio" id="rating3" name="rate" value="3" onChange={handleChangeData}/>
                        <label htmlFor="rating3">3</label>
                        <input className="custom-radio" type="radio" id="rating4" name="rate" value="4" onChange={handleChangeData}/>
                        <label htmlFor="rating4">4</label>
                        <input className="custom-radio" type="radio" id="rating5" name="rate" value="5" onChange={handleChangeData}/>
                        <label htmlFor="rating5">5</label>
                </div>
                <button className="send-button" onClick={handleClick}>Send</button>
            </div>
       
    );
}

export default DeletePart;