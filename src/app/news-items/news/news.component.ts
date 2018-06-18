import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hovered = false;

  handleover() {
    this.hovered = true;
  }
  handleoff() {
    this.hovered = false;
  }
}
