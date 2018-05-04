import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data',
  templateUrl: './two-way-data.component.html',
  styleUrls: ['./two-way-data.component.scss']
})
export class TwoWayDataComponent implements OnInit {

  constructor() { }
  
  private txtValue:string;
  private pppValue: string;

  clickMe() {
    this.pppValue = this.txtValue;
  }

  ngOnInit() {
  }



}
