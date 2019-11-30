import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  @Input() items: Item[];

  @Output() addClicked: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() { }

  ngOnInit() {
  }

  addItem(){
    this.addClicked.emit( {id: 0, name: 'test', details: 'details test'} );
  }

}
