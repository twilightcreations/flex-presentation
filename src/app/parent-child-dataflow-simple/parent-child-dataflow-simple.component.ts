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
  
  updateMovie() {
    var textbox1ParentValue = document.getElementById('textBox1Parent').value;
    this.childMessage = textbox1ParentValue;
  }

  dataFromParent;

  handleEventClicked(data) {
    this.dataFromParent = data;
  }

}
