import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemShellComponent } from './containers/item-shell/item-shell.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './state/item.effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/item.reducer';

const itemRoutes: Routes = [
  { path: '', component: ItemShellComponent}
]

@NgModule({
  declarations: [
    ItemShellComponent,
    ItemDetailsComponent,
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(itemRoutes),
    StoreModule.forFeature('items', reducer),
    EffectsModule.forFeature([ItemEffects])
  ],
})
export class ItemModule { }
