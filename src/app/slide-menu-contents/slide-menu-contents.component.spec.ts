import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMenuContentsComponent } from './slide-menu-contents.component';

describe('SlideMenuContentsComponent', () => {
  let component: SlideMenuContentsComponent;
  let fixture: ComponentFixture<SlideMenuContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideMenuContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideMenuContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
