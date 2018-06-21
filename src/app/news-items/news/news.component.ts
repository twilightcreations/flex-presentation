import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-news]',
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

  @Input() newsImgUrl:string;
  @Input() newsImageBlockClass:string;
  @Input() newsLink:string;
  @Input() newsTitle:string;
  @Input() newsSubText:string;
  @Input() newsMainText:string;
  
}
