import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromItems from '../../index';
import { Observable } from 'rxjs';
import { Item } from '../../item';
import { Store, select } from '@ngrx/store';
import * as actions from '../../state/items.actions';

@Component({
  selector: 'app-item-shell',
  templateUrl: './item-shell.component.html',
  styleUrls: ['./item-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemShellComponent implements OnInit {

  items$: Observable<Item[]>;

  constructor(private store: Store<fromItems.State>) { }

  ngOnInit() {
    this.store.dispatch(new actions.Load());
    this.items$ = this.store.pipe(select(fromItems.getItems));
  }

}
