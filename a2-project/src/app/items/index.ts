import * as fromRoot from '../state/app.state';
import * as fromItems from './state/item.reducer'
import { createFeatureSelector, createSelector } from '@ngrx/store';


// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends fromRoot.State {
    items: fromItems.ItemState;
}

const getItemsState = createFeatureSelector<fromItems.ItemState>('items');

export const getItems = createSelector(
    getItemsState,
    itemstate => itemstate.Items
)