import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuItemsComponent } from './left-menu-items.component';

describe('LeftMenuItemsComponent', () => {
  let component: LeftMenuItemsComponent;
  let fixture: ComponentFixture<LeftMenuItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftMenuItemsComponent]
    });
    fixture = TestBed.createComponent(LeftMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
