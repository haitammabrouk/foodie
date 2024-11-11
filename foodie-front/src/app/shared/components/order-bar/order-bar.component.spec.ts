import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBarComponent } from './order-bar.component';

describe('OrderBarComponent', () => {
  let component: OrderBarComponent;
  let fixture: ComponentFixture<OrderBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderBarComponent]
    });
    fixture = TestBed.createComponent(OrderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
