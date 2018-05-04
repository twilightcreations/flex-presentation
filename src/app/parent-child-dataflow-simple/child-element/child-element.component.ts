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
  
  private childInput: string;

  ngOnInit() {
  }

  messageForParent;

  childClicked() {
    this.eventClick.emit(this.childInput);
  }

}
