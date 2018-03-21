import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holding-page',
  templateUrl: './holding-page.component.html',
  styleUrls: ['./holding-page.component.scss']
})
export class HoldingPageComponent implements OnInit {

  jsfloat: boolean;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.jsfloat = true;
    }, 2000);
  }

}
