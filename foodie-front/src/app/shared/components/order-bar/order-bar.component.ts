import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {Menu} from "../../../models/menu-item-model/menu-item.model";
import {tap} from "rxjs";

@Component({
  selector: 'app-order-bar',
  templateUrl: './order-bar.component.html',
  styleUrls: ['./order-bar.component.css']
})
export class OrderBarComponent implements OnInit{

  selectedMenuItems: Menu[] = [];
  isMenuLoading = false;
  subTotal: number = 0;
  tax: number = 0;
  payableAmount: number = 0;

  constructor(private _sharedService: SharedService) {}

  ngOnInit() {
    this.loadSelectedMenuItems();
  }

  receiveQuantity(quantity: number, index: number) {
    this.selectedMenuItems[index].quantity = quantity;
    console.log(quantity);
  }

  receiveDiscount(discount: number, index: number) {
    this.selectedMenuItems[index].discount = discount;
    console.log(discount);
  }

  onRefreshSelectedItems() {
    this.isMenuLoading = true;
    setTimeout(() => {
      this.isMenuLoading = false;
    }, 1000)
  }

  loadSelectedMenuItems() {
    this._sharedService.selectedItems$
      .pipe(
        tap((selectedMenuItems) =>
          this.calculatePayableAmountSpecs(selectedMenuItems))
      )
      .subscribe({
      next: menuItems => this.selectedMenuItems = menuItems,
      error: err => console.log(err)
    })
  }

  onDismiss() {
    this.selectedMenuItems = [];
    this._sharedService.dismissSelectedItems(this.selectedMenuItems);
  }

  calculatePayableAmountSpecs(selectedMenuItems: Menu[]) {
    let totalMenuPrice : number = 0;
    for (let selectedMenuItem of selectedMenuItems) {
      if (selectedMenuItem.quantity === 0 || typeof selectedMenuItem.quantity === 'undefined') {
        selectedMenuItem.quantity = 1;
      }
      if(typeof selectedMenuItem.discount === 'undefined') {
        selectedMenuItem.discount = 0;
      }
      totalMenuPrice += (selectedMenuItem.price - selectedMenuItem.discount) * selectedMenuItem.quantity;
      this.subTotal += totalMenuPrice;
      this.tax += totalMenuPrice * 0.015;
    }
    this.payableAmount = this.subTotal - this.tax;
  }
}
