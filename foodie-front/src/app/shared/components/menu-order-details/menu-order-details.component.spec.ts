import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrderDetailsComponent } from './menu-order-details.component';

describe('MenuOrderDetailsComponent', () => {
  let component: MenuOrderDetailsComponent;
  let fixture: ComponentFixture<MenuOrderDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuOrderDetailsComponent]
    });
    fixture = TestBed.createComponent(MenuOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
