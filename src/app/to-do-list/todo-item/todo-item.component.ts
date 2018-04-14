import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() toDoItem;
  @Output() deleteItem = new EventEmitter();
  @Output() editItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  editTodo(item) {
    this.editItem.emit(item);
    item.editing = false;
  }

  //this function is called when delete is clicked
  removeItem(id) {
    this.deleteItem.emit(id);
  }
}
