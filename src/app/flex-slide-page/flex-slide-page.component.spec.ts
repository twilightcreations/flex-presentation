import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexSlidePageComponent } from './flex-slide-page.component';

describe('FlexSlidePageComponent', () => {
  let component: FlexSlidePageComponent;
  let fixture: ComponentFixture<FlexSlidePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexSlidePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexSlidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
