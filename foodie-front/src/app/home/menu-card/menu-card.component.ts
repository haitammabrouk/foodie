import {Component, Input} from '@angular/core';
import {Menu} from "../../models/menu-item-model/menu-item.model";

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent {
  @Input() item!: Menu;
  @Input() isSelected!: boolean;
}
