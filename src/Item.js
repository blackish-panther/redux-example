import React from 'react';
import { connect } from 'react-redux';
import { hoverItem } from './store/actions';

const Item = props => (
  <li
    style={{fontWeight: props.isSelected? 'bold' : 'normal'}}
    onMouseOver={props.onMouseOver}
    onMouseOut={props.onMouseOut}>
    {props.item}
  </li>
);

const mapStateToProps = (state, ownProps) => {
  return {
    isSelected: state.hoverItem === ownProps.item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMouseOver: () => dispatch(hoverItem(ownProps.item)),
    onMouseOut: () => dispatch(hoverItem('')),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Item);
