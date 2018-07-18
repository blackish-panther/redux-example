import React from 'react';
import { connect } from 'react-redux';
import { updateNewItem, createItem } from './store/actions';

const ItemInput = props => (
  <div>
    <input
      type="text"
      onChange={props.onItemChanged}
      value={props.newItem}/>
    <button onClick={props.onAddItem}>Add</button>
  </div>
);

const mapStateToProps = state => {
  return {
    newItem: state.newItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onItemChanged: e => dispatch(updateNewItem(e.target.value)),
    onAddItem: () => dispatch(createItem()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemInput);
