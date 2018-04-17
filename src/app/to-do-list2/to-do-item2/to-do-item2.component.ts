import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoList2Service } from '../to-do-list2.service';

@Component({
  selector: 'app-to-do-item2',
  templateUrl: './to-do-item2.component.html',
  styleUrls: ['./to-do-item2.component.scss']
})
export class ToDoItem2Component implements OnInit {
  todoItem;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private todoListService: ToDoList2Service,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.todoListService.todoItemData(+params.id)
        .subscribe(item => this.todoItem = item);
    });

  }

  save(item) {
    this.todoListService.updateItem(item);
    this.router.navigate(['/to-do-list2']);
  }

  back() {
    window.history.back();
  }

}
