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

  childMessage = "Donkeys";

}
