import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuType} from "../../models/menu-type-model/menu-type.model";
import {Menu} from "../../models/menu-item-model/menu-item.model";
import {MenuService} from "../services/menu.service";
import {Subject, takeUntil, tap} from "rxjs";
import {data} from "autoprefixer";
import {FoodieResponse} from "../../models/foodie-response.model/foodie-response.model";
import {SharedService} from "../../shared/services/shared.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnDestroy, OnInit{

  isMenuLoading = true;
  sub$ = new Subject<void>()

  menuTypes: MenuType[] = [
    { type: "Breakfast", link: "/breakfast" },
    { type: "Burger", link: "/burger" },
    { type: "Ice Cream", link: "/ice-cream" },
    { type: "Pizza", link: "/pizza" },
    { type: "Soupe", link: "/soupe" }
  ];

  menuItems: Menu[] = [];
  selectedMenuItems: Menu[] = [];
  currentMenuType: string = "Breakfast"

  constructor(private _menuService: MenuService, private _sharedService: SharedService) {}

  ngOnInit() {
    this.setMenuType(this.currentMenuType);
    this.dismissSelectedItems();
  }

  setMenuType(type: string) {
    this.currentMenuType = type;
    const menuType = this.menuTypes.find(mt => mt.type === type);
    const link = menuType && menuType.link;
    this._menuService.loadMenuItems(link).
      pipe(
        tap(_ => {
          setTimeout(() => {
            this.isMenuLoading = false;
          }, 1000)
        }),
        takeUntil(this.sub$)
    ).subscribe({
      next: menus => this.menuItems = menus?.data ,
      error: err => console.log(err)
    })
  }

  toggleSelectedItem(menuItem: Menu) {
    const index = this.selectedMenuItems.findIndex(item => item.id === menuItem.id);
    if(index > -1) {
      this.selectedMenuItems.splice(index, 1);
    } else {
      this.selectedMenuItems.push(menuItem);
    }
    this._sharedService.updateSelectedItems(this.selectedMenuItems);
  }

  isSelected(menuItem: Menu): boolean {
    const result = this.selectedMenuItems.some(item => item.id === menuItem.id);
    return result;
  }

  dismissSelectedItems() {
    this._sharedService.selectedItems$
      .pipe(
        tap(sm => console.log(sm)),
        takeUntil(this.sub$),
      )
      .subscribe({
      next: selectedItems => this.selectedMenuItems = selectedItems,
      error: err => console.log(err)
    })
  }

  ngOnDestroy() {
    this.sub$.next();
  }
}
