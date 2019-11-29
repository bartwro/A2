import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  @Input() items: Item[];

  constructor() { }

  ngOnInit() {
  }

}
