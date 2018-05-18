import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssGridLionComponent } from './css-grid-lion.component';

describe('CssGridLionComponent', () => {
  let component: CssGridLionComponent;
  let fixture: ComponentFixture<CssGridLionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssGridLionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssGridLionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
