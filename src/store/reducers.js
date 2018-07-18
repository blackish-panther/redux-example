import * as actions from './actions';

const initialState = {
  newItem: '',
  items: [],
  hoverItem: undefined,
};

export function rootReducer(currentState = initialState, action) {
  switch (action.type) {
    case actions.HOVER_ITEM: {
      return { ...currentState, hoverItem: action.payload };
    }

    case actions.UPDATE_NEW_ITEM: {
      return { ...currentState, newItem: action.payload };
    }

    case actions.CREATE_ITEM: {
      return {
        ...currentState,
        newItem: '',
        items: [ ...currentState.items, currentState.newItem ],
      };
    }

    case actions.START_LOAD_IP: {
      return { ...currentState, ip: 'Loading...' };
    }

    case actions.SUCCEED_LOAD_IP: {
      return { ...currentState, ip: action.payload };
    }

    default: {
      return currentState;
    }
  }
}
