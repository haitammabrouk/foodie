import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCardSkeletonComponent } from './menu-card-skeleton.component';

describe('MenuCardSkeletonComponent', () => {
  let component: MenuCardSkeletonComponent;
  let fixture: ComponentFixture<MenuCardSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCardSkeletonComponent]
    });
    fixture = TestBed.createComponent(MenuCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
