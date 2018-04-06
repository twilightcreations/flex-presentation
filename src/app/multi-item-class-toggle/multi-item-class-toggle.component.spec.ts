import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiItemClassToggleComponent } from './multi-item-class-toggle.component';

describe('MultiItemClassToggleComponent', () => {
  let component: MultiItemClassToggleComponent;
  let fixture: ComponentFixture<MultiItemClassToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiItemClassToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiItemClassToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
