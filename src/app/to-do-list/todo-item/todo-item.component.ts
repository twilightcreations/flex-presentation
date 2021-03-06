import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() toDoItem;
  @Output() onDeleteItem = new EventEmitter();
  @Output() onEditItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  editTodo(item) {
    this.onEditItem.emit(item);
    item.editing = false;
  }

  //this function is called when delete is clicked
  removeItem(id) {
    this.onDeleteItem.emit(id);
  }
}
