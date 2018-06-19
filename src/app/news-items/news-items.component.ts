import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-items',
  templateUrl: './news-items.component.html',
  styleUrls: ['./news-items.component.scss']
})
export class NewsItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  newsFeed = [
    {
      newsImageBlockClass: "block1",
      newsLink: "theLink",
      name: "Mars Rover",
      subText: "NASA Finds Ancient Organic Material",
      mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam nesciunt sapiente iure ad reprehenderit, est nulla veritatis neque laborum."
    },
    {
      newsImageBlockClass: "block2",
      newsLink: "theLink",
      name: "Jupiter",
      subText: "Jupiter's Great Red Spot Is Spectacular",
      mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam nesciunt sapiente iure ad reprehenderit, est nulla veritatis neque laborum."
    },
    {
      newsImageBlockClass: "block3",
      newsLink: "theLink",
      name: "Saturn Rings",
      subText: "Saturn Rings look amazing",
      mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam nesciunt sapiente iure ad reprehenderit, est nulla veritatis neque laborum."
    },
    {
      newsImageBlockClass: "block4",
      newsLink: "theLink",
      name: "Mars Rover",
      subText: "NASA Finds Ancient Organic Material",
      mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam nesciunt sapiente iure ad reprehenderit, est nulla veritatis neque laborum."
    },
    {
      newsImageBlockClass: "block5",
      newsLink: "theLink",
      name: "Jupiter",
      subText: "Jupiter's Great Red Spot Is Spectacular",
      mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam nesciunt sapiente iure ad reprehenderit, est nulla veritatis neque laborum."
    },
    {
      newsImageBlockClass: "block6",
      newsLink: "theLink",
      name: "Saturn Rings",
      subText: "Saturn Rings look amazing",
      mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam nesciunt sapiente iure ad reprehenderit, est nulla veritatis neque laborum."
    }
  ]

}
