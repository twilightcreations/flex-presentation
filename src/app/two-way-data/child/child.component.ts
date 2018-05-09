import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() {
   }

  childTxtData:string;
  
  @Output() ccc = new EventEmitter();
  @Input() ppp;
  
   handleClickMe() {
     this.ccc.emit(this.childTxtData);
   }

  ngOnInit() {
  }

}
