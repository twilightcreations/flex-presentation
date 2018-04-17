import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToDoList2Module } from '../to-do-list2.module';
import { ToDoList2Service } from '../to-do-list2.service';

@Component({
  selector: 'app-to-do-list2',
  templateUrl: './to-do-list2.component.html',
  styleUrls: ['./to-do-list2.component.scss']
})
export class ToDoList2Component implements OnInit {

  constructor(private router: Router, private todoList2Service: ToDoList2Service) { }

  // We want to initialise to null so that we can display loading spinner on ui, setting it to empty array will not work 
  // second option is to initialise to empty array bu then we'll have to check thingsToDo.length > 0 in ui to display loading div.
  public thingsToDo = null;

  ngOnInit() {
    // All data calls need to happen in ngOnInit lifecycle hook, because dom is loaded at this point.
    this.todoList2Service.todoListData()
      .delay(3000)
      .subscribe(items => this.thingsToDo = items);
  }



  public errMessage = false;

  addItem() {
    if ((document.getElementById("item-to-add") as HTMLInputElement).value != "") {
      var theData = ((document.getElementById("item-to-add") as HTMLInputElement).value);
      //i need to understand how to add a unique id or increment it by 
      this.thingsToDo.push({ id: 9, thing: theData });
      (document.getElementById("item-to-add") as HTMLInputElement).value = "";
      document.getElementById("item-to-add").focus();
      this.errMessage = false;
    }
    else {
      this.errMessage = true;
    }
  }


  deleteItem2(id) {
    this.thingsToDo = this.thingsToDo.filter(x => x.id !== id);
  }


  editItem(item) {
    this.router.navigate(['/to-do-list2', item.id]);
  }


}
