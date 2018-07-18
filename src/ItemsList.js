import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';

const ItemsList = props => (
  <div>
    <p>Your IP address is: {props.ip}</p>
    <ul>
      {props.items.map(i => <Item key={i} item={i}/>)}
    </ul>
  </div>
);

const mapStateToProps = state => {
  return {
    items: state.items,
    ip: state.ip,
  };
};

export default connect(
  mapStateToProps,
)(ItemsList);
