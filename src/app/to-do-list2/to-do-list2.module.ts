import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ToDoList2HomeComponent } from './to-do-list2-home/to-do-list2-home.component';
import { ToDoList2Component } from './to-do-list2/to-do-list2.component';
import { ToDoItem2Component } from './to-do-item2/to-do-item2.component';
import { ToDoList2Service } from './to-do-list2.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        // This is a way to create a sub feature in our application
        // Sub feature can have mulitple pages each belong to same shell/home page
        // The way we define these is my defining the children of that shell page
        path: '', component: ToDoList2HomeComponent, children: [
          { path: '', component: ToDoList2Component },
          { path: ':id', component: ToDoItem2Component }
        ]
      },
    ])
  ],
  declarations: [
    ToDoList2HomeComponent,
    ToDoList2Component,
    ToDoItem2Component,
  ],
  entryComponents: [
    ToDoList2HomeComponent
  ],
  providers: [
    ToDoList2Service
  ]
})
export class ToDoList2Module { }
