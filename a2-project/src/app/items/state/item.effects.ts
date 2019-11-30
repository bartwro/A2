import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as actions from './items.actions';
import { ItemService } from '../item.service';
import { mergeMap, map, catchError } from 'rxjs/operators';


@Injectable()
export class ItemEffects {
    constructor(
        private itemService: ItemService,
        private actions$: Actions) {}

    @Effect()
    loadItems$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ItemActionTypes.Load),
        mergeMap(action =>
            this.itemService.LoadItems().pipe(
                map(items => (new actions.LoadSuccess(items))),
                catchError(err => of(err))
            )
        )
    );

    @Effect()
    addItem$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ItemActionTypes.CreateItem),
        map( (action: actions.CreateItem) => action.payload),
        map(item => new actions.CreateItemSuccess(item))
        //mergeMap(action => this.itemService.AddItem(action).pipe(
            //map(i => new actions.CreateItemSuccess(i)),
            //catchError(err => of(new actions.CreateItemFail(err))))
        );
    //);
}