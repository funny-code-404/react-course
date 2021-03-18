import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

const SpinnerComponent = ({ isTodosFetching }) =>
  isTodosFetching && <StyledSpinner>Loading...</StyledSpinner>;

export const mapStateToProps = ({ todos }) => ({
  isTodosFetching: todos.isFetching,
});

const StyledSpinner = styled.div`
  position: fixed;
  width: 100%;
  height: 87vh;
  background-color: tan;
  color: black;
  font-size: 5rem;
`;

export const Spinner = connect(mapStateToProps)(SpinnerComponent);

SpinnerComponent.propTypes = {
  isTodosFetching: PropTypes.object,
};
