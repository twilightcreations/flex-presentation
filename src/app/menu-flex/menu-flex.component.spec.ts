import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFlexComponent } from './menu-flex.component';

describe('MenuFlexComponent', () => {
  let component: MenuFlexComponent;
  let fixture: ComponentFixture<MenuFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
