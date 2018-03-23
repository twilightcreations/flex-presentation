import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-slide-page',
  templateUrl: './flex-slide-page.component.html',
  styleUrls: ['./flex-slide-page.component.scss']
})
export class FlexSlidePageComponent implements OnInit {

  public pageConstructs = [
    { id: 1, open: false, heading: 'Welcome to the site', image: '/assets/images/logo.png' },
    { id: 2, open: false, heading: 'Welcome to the site2', image: '/assets/images/logo.png' },
    { id: 3, open: false, heading: 'Welcome to the site3', image: '/assets/images/logo.png' },
    { id: 4, open: false, heading: 'Welcome to the site4', image: '/assets/images/logo.png' },
    { id: 5, open: false, heading: 'Welcome to the site5', image: '/assets/images/logo.png' },
  ];
  constructor() { }

  ngOnInit() {
  }

  toggleActive(id) {
    this.pageConstructs.forEach(pageCon => {
      if (pageCon.id === id) {
        pageCon.open = true;
      } else {
        pageCon.open = false;
      }
    });
  }
}
