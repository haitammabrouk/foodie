import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Menu} from "../../../models/menu-item-model/menu-item.model";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-menu-order-details',
  templateUrl: './menu-order-details.component.html',
  styleUrls: ['./menu-order-details.component.css'],
  animations: [
    trigger('slideInOut', [
      state('hidden', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*',
        opacity: 1
      })),
      transition('hidden <=> visible', animate('200ms ease-in-out'))
    ]),
    trigger('rotateArrow', [
      state('right', style({transform: 'rotate(0deg)'})),
      state('down', style({transform: 'rotate(90deg)'})),
      transition('right<=>down', animate('200ms ease-in-out'))
    ])
  ]
})
export class MenuOrderDetailsComponent implements AfterViewInit{

  @Input() item!: Menu;
  @Input() index!: number;
  @ViewChild('MenuOrder') menuOrder!: ElementRef;
  isMenuDetailsVisible = false;
  @Output() quantityEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() discountEmitter: EventEmitter<number> = new EventEmitter<number>();

  handleQuantityChange(e : Event) {
    const inputElt = e.target as HTMLInputElement;
    this.quantityEmitter.emit(parseFloat(inputElt.value));
  }

  handleDiscountChange(e : Event) {
    const inputElt = e.target as HTMLInputElement;
    this.discountEmitter.emit(parseFloat(inputElt.value));
  }

  constructor(private _sharedService: SharedService) {
  }

  listDetails() {
    this.isMenuDetailsVisible = !this.isMenuDetailsVisible;
  }

  ngAfterViewInit() {
    const menuOrderElt = this.menuOrder.nativeElement;
    if (this.index % 2 == 0) {
      menuOrderElt.style.backgroundColor = 'var(--white-color)'
    }
  }

  onDelete(item: Menu) {
    this._sharedService.dismissSelectedItem(item);
  }
}
