import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  public thingsToDo = [
    { id: 1, thing:"Get the milk" },
    { id: 2, thing:"Do the shopping" },
    { id: 3, thing:"Cancel Sky membership" },
    { id: 4, thing:"Book tickets for Black Panther" },
    { id: 5, thing:"Watch all the other Marvel movies" },
    { id: 6, thing:"Order the new speaker" },
    { id: 7, thing:"Look for the new car" },
    { id: 8, thing:"Make some time on Sunday mornings" }
  ]

  ngOnInit() {
  }
  
  itemClicked(){
    var theData = ((document.getElementById("item-to-add") as HTMLInputElement).value);
    //this.thingsToDo.push(    { id: 7, thing:"parm just added this car" });
    this.thingsToDo.push(    { id: 7, thing:theData });
  }

}
