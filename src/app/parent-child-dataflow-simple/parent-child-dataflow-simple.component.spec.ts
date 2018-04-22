import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildDataflowSimpleComponent } from './parent-child-dataflow-simple.component';

describe('ParentChildDataflowSimpleComponent', () => {
  let component: ParentChildDataflowSimpleComponent;
  let fixture: ComponentFixture<ParentChildDataflowSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentChildDataflowSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildDataflowSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
