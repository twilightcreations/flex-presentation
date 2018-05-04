import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child-dataflow-simple',
  templateUrl: './parent-child-dataflow-simple.component.html',
  styleUrls: ['./parent-child-dataflow-simple.component.scss']
})
export class ParentChildDataflowSimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  childMessage = "Avengers: Infinity War";
  
  private parentData1: string;

  updateMovie() {
    this.childMessage = this.parentData1;
  }

  dataFromParent;

  handleEventClicked(data) {
    this.dataFromParent = data;
  }

}
