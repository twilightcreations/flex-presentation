import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-element',
  templateUrl: './child-element.component.html',
  styleUrls: ['./child-element.component.scss']
})
export class ChildElementComponent implements OnInit {

  constructor() { }
  
  @Input() hey;
  @Output() eventClick = new EventEmitter();
  

  ngOnInit() {
  }

  messageForParent;

  childClicked() {
    var p = document.getElementById('childInput1').value;
    this.eventClick.emit(p);
    
    //console.log(this.messageForParent);
  }

}
