import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  selectedImage: File | undefined;

  menuTypes: string[] = ["breakfast", "burger", "ice cream", "pizza", "soupe"];

  menuFormGroup: FormGroup = this._formBuilder.group({
    name: [''],
    type: [''],
    price: [0],
  })

  constructor(private _formBuilder: FormBuilder, private _menuService: MenuService) {}

  onImageSelected(e: Event) : void {
    const element = e.target as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.selectedImage = fileList[0];
    }
  }

  onSubmit() : void {
    if(this.menuFormGroup.valid && this.selectedImage) {
      this._menuService.createMenu(this.menuFormGroup.value, this.selectedImage).subscribe({
        next: menu => console.log(menu),
        error: err => console.log(err)
      })
    }
  }

}
