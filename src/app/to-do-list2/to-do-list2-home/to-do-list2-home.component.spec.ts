import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoList2HomeComponent } from './to-do-list2-home.component';

describe('ToDoList2HomeComponent', () => {
  let component: ToDoList2HomeComponent;
  let fixture: ComponentFixture<ToDoList2HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoList2HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoList2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
