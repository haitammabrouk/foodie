import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrderDetailsSkeletonComponent } from './menu-order-details-skeleton.component';

describe('MenuOrderDetailsSkeletonComponent', () => {
  let component: MenuOrderDetailsSkeletonComponent;
  let fixture: ComponentFixture<MenuOrderDetailsSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuOrderDetailsSkeletonComponent]
    });
    fixture = TestBed.createComponent(MenuOrderDetailsSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
