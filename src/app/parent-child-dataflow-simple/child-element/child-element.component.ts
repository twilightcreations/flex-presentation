import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-element',
  templateUrl: './child-element.component.html',
  styleUrls: ['./child-element.component.scss']
})
export class ChildElementComponent implements OnInit {

  constructor() { }
  
  @Input() hey;

  ngOnInit() {
  }

}
