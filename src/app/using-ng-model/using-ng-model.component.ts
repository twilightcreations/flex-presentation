import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-ng-model',
  templateUrl: './using-ng-model.component.html',
  styleUrls: ['./using-ng-model.component.scss']
})
export class UsingNgModelComponent implements OnInit {

  constructor() { }

  textFromOne: string;

  ngOnInit() {
  }
 
  makeUpperCase() {
    this.textFromOne = this.textFromOne.toUpperCase();
  }
  makeLowerCase() {
    this.textFromOne = this.textFromOne.toLowerCase();
  }

}
