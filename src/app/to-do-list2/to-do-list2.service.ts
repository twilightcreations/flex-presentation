import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ToDoList2Service {
  private thingsToDo = [
    { id: 1, thing: "Get the milk" },
    { id: 2, thing: "Do the shopping" },
    { id: 3, thing: "Cancel Sky membership" },
    { id: 4, thing: "Book tickets for Black Panther" },
    { id: 5, thing: "Watch all the other Marvel movies" },
    { id: 6, thing: "Order the new speaker" },
    { id: 7, thing: "Look for the new car" },
    { id: 8, thing: "Make some time on Sunday mornings" }
  ];
  constructor() { }

  todoListData() {
    return Observable.of(this.thingsToDo);
  }

  todoItemData(id) {
    var matchedItem = this.thingsToDo.filter(item => item.id === id)[0];
    return Observable.of(matchedItem);
  }

  updateItem(item){
    var index = this.thingsToDo.findIndex(x => x.id === item.id);
    this.thingsToDo.splice(index, 1, item);
  }
}
