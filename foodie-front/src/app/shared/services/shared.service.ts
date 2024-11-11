import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Menu} from "../../models/menu-item-model/menu-item.model";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  selectedItemsSource = new BehaviorSubject<Menu[]>([]);
  selectedItems$ = this.selectedItemsSource.asObservable();

  constructor() { }

  updateSelectedItems(selectedMenuItems: Menu[]) {
    this.selectedItemsSource.next(selectedMenuItems);
  }

  dismissSelectedItems(selectedMenuItems: Menu[]){
    this.selectedItemsSource.next([]);
  }

  dismissSelectedItem(item: Menu) {
    const selectedItems = this.selectedItemsSource.getValue().filter(sm => sm.id !== item.id);
    this.selectedItemsSource.next(selectedItems);
  }
}
