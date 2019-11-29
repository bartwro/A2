import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  LoadItem(id: number): Item {
    return null;
  }

  LoadItems(): Observable<Item[]> {
    return this.httpClient
      .get<Item[]>('http://localhost:3000/items');
  }
}
