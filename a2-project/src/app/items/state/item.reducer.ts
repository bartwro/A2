import { ItemActions, ItemActionTypes } from './items.actions';
import { Item } from '../item';

export interface ItemState {
    Items: Item[];
}

const initialState: ItemState = {
    Items: []
}

export function reducer(state = initialState, action: ItemActions): ItemState {
    switch(action.type) {
        case ItemActionTypes.LoadSuccess:
            return {
                ...state,
                Items: action.payload
            };
        case ItemActionTypes.CreateItemSuccess:
            return {
                ...state,
                Items: state.Items.concat(action.payload)
            };
        default:
            return state;
    }
}