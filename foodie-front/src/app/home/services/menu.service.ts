import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Menu} from "../../models/menu-item-model/menu-item.model";
import {FoodieResponse} from "../../models/foodie-response.model/foodie-response.model";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private baseUrl = "http://localhost:8087/menu";

  constructor(private _httpClient: HttpClient) { }

  createMenu(menu: Menu, image: File) : Observable<Menu> {
    const formData: FormData = new FormData();
    formData.append("menu", new Blob([JSON.stringify(menu)], {
      type: 'application/json'
    }));
    formData.append("image", image);
    return this._httpClient.post<Menu>(this.baseUrl, formData);
  }

  loadMenuItems(link: string | undefined) : Observable<FoodieResponse<Menu[]>> {
    return this._httpClient.get<FoodieResponse<Menu[]>>(this.baseUrl + link);
  }
}
