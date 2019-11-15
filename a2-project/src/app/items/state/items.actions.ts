import {Action} from '@ngrx/store';
import { Item } from '../item';

export enum ItemActionTypes {
    Load = '[Items] Load',
    LoadSuccess = '[Items] Load Success',
    LoadFail = '[Items] Load Fail',
    CreateItem = '[Item] Create Item',
    CreateItemSuccess = '[Item] Create Item Success',
    CreateItemFail = '[Item] Create Item Fail',
    UpdateItem = '[Item] Update Item',
    UpdateItemSuccess = '[Item] Update Item Success',
    UpdateItemFail = '[Item] Update Item Fail',
    DeleteItem = '[Item] Delete Item',
    DeleteItemSuccess = '[Item] Delete Item Success',
    DeleteItemFail = '[Item] Delete Item Fail',
}

export class Load implements Action {
    readonly type: ItemActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type: ItemActionTypes.LoadSuccess;
}

export class LoadFail implements Action {
    readonly type: ItemActionTypes.LoadFail;
}

export class CreateItem implements Action {
    readonly type: ItemActionTypes.CreateItem;

    constructor(public payload: Item) { }
}

export class CreateItemSuccess implements Action {
    readonly type: ItemActionTypes.CreateItemSuccess;

    constructor(public payload: Item) { }
}

export class CreateItemFail implements Action {
    readonly type: ItemActionTypes.CreateItemFail;

    constructor(public payload: Item) { }
}

export class UpdateItem implements Action {
    readonly type: ItemActionTypes.UpdateItem;

    constructor(public payload: Item) { }
}

export class UpdateItemSuccess implements Action {
    readonly type: ItemActionTypes.UpdateItemSuccess;

    constructor(public payload: Item) { }
}

export class UpdateItemFail implements Action {
    readonly type: ItemActionTypes.UpdateItemFail;

    constructor(public payload: Item) { }
}

export class DeleteItem implements Action {
    readonly type: ItemActionTypes.DeleteItem;

    constructor(public payload: Item) { }
}

export class DeleteItemSuccess implements Action {
    readonly type: ItemActionTypes.DeleteItemSuccess;

    constructor(public payload: Item) { }
}

export class DeleteItemFail implements Action {
    readonly type: ItemActionTypes.DeleteItemFail;

    constructor(public payload: Item) { }
}