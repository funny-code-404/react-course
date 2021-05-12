import React from 'react';
import { connect } from 'react-redux';
import FormBase from '../FormBase'
import { StyledListRate, StyledText, Styledtextarea, StyledTitle, StyledRadioContainer, StyledButton } 
from './style.js';

const AccountDeleting = (props) => {
    const { onChangeText, onChangeRate, onChangeDeletingButton} = props;
    const handleChangeText = (e) => onChangeText(e.target.value);
    const handleChangeRate = (e) => onChangeRate(e.target.value);
    const handleDeletingButton = (e) => {
        e.preventDefault();
        onChangeDeletingButton();
    }

    return (
        <FormBase>
        <div>
            <StyledTitle>Удаление аккаунта</StyledTitle>
            <Styledtextarea onChange={handleChangeText}></Styledtextarea>
            <p>Оцените работу приложения</p>
            <StyledListRate>
                <StyledText>1</StyledText>
                <StyledText>2</StyledText>
                <StyledText>3</StyledText>
                <StyledText>4</StyledText>
                <StyledText>5</StyledText>
            </StyledListRate>
            <StyledRadioContainer>
                <input type="radio" value="1" onClick={handleChangeRate}/>
                <input type="radio" value="2" onClick={handleChangeRate}/>
                <input type="radio" value="3" onClick={handleChangeRate}/>
                <input type="radio" value="4" onClick={handleChangeRate}/>
                <input type="radio" value="5" onClick={handleChangeRate}/>
            </StyledRadioContainer>
            <StyledButton onClick={handleDeletingButton}>Отправить</StyledButton>
        </div>
        </FormBase>
    )
}

const mapStateToProps = ({ deletingForm }) => {
    return {
        deletingForm,
    }
}

const mapDispatchToProps = (dispatch) => ({
    onChangeText: (value) => 
        dispatch({
            type: 'INPUT_TEXT',
            payload: value,
        }),
    onChangeRate: (value) => 
        dispatch({
            type: 'INPUT_RATE',
            payload: value,
        }),   
    onChangeDeletingButton: () => 
        dispatch({
            type: 'DETELE_BUTTON',
        }),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AccountDeleting);