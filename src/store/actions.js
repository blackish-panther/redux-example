export const UPDATE_NEW_ITEM = '[Item] Update';
export const CREATE_ITEM = '[Items] Create';
export const HOVER_ITEM = '[Item] Hover';
export const START_LOAD_IP = '[IP] Load';
export const SUCCEED_LOAD_IP = '[IP] Loaded';
export const FAILED_LOAD_IP = '[IP] Failed';

export function updateNewItem(newItemValue) {
  return {
    type: UPDATE_NEW_ITEM,
    payload: newItemValue,
  };
}

export function createItem() {
  return {
    type: CREATE_ITEM,
  };
}

export function hoverItem(item) {
  return {
    type: HOVER_ITEM,
    payload: item,
  };
}
