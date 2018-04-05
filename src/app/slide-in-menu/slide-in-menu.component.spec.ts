import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideInMenuComponent } from './slide-in-menu.component';

describe('SlideInMenuComponent', () => {
  let component: SlideInMenuComponent;
  let fixture: ComponentFixture<SlideInMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideInMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideInMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
