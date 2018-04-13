import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  // We want to initialise to null so that we can display loading spinner on ui, setting it to empty array will not work 
  // second option is to initialise to empty array bu then we'll have to check thingsToDo.length > 0 in ui to display loading div.
  public thingsToDo = null;

  ngOnInit() {
    // All data calls need to happen in ngOnInit lifecycle hook, because dom is loaded at this point.
    Observable.of([
      { id: 1, thing: "Get the milk" },
      { id: 2, thing: "Do the shopping" },
      { id: 3, thing: "Cancel Sky membership" },
      { id: 4, thing: "Book tickets for Black Panther" },
      { id: 5, thing: "Watch all the other Marvel movies" },
      { id: 6, thing: "Order the new speaker" },
      { id: 7, thing: "Look for the new car" },
      { id: 8, thing: "Make some time on Sunday mornings" }
    ]).delay(1000).subscribe(items => this.thingsToDo = items);
  }

  itemClicked() {

    var theData = ((document.getElementById("item-to-add") as HTMLInputElement).value);
    //i need to understand how to add a unique id or increment it by 
    this.thingsToDo.push({ id: 9, thing: theData });
    (document.getElementById("item-to-add") as HTMLInputElement).value = "";
    document.getElementById("item-to-add").focus();
  }

  deleteItem(id) {
    this.thingsToDo = this.thingsToDo.filter(x => x.id !== id);
  }

  editItem(item) {
    var index = this.thingsToDo.findIndex(x => x.id === item.id);
    this.thingsToDo.splice(index, 1, item);
  }


}
