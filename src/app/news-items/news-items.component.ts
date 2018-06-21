import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-items',
  templateUrl: './news-items.component.html',
  styleUrls: ['./news-items.component.scss']
})
export class NewsItemsComponent implements OnInit {

  constructor() { }

  public popUpText: string;

  ngOnInit() {
  }

  
  hoverLink:string;
  hoverName:string;
  hoverSubText:string;
  hoverMainText:string;
  imgUrl:string;
  
  
  selectNewsItem(data) {
    this.hoverLink=data.newsLink;
    this.hoverName=data.name;
    this.hoverSubText=data.subText;
    this.hoverMainText=data.mainText;
    this.imgUrl=data.imageUrl;
  }

  newsFeed = [
    {
      imageUrl: "/assets/news-items/news1.jpg",
      newsImageBlockClass: "block1",
      newsLink: "theLink",
      name: "Mars Rover",
      subText: "NASA Finds Ancient Organic Material",
      mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam nesciunt sapiente iure ad reprehenderit, est nulla veritatis neque laborum."
    },
    {
      imageUrl: "/assets/news-items/news2.jpg",
      newsImageBlockClass: "block2",
      newsLink: "theLink",
      name: "Jupiter",
      subText: "Jupiter's Great Red Spot Is Spectacular",
      mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam nesciunt sapiente iure ad reprehenderit, est nulla veritatis neque laborum."
    },
    {
      imageUrl: "/assets/news-items/news3.jpg",
      newsImageBlockClass: "block3",
      newsLink: "theLink",
      name: "Saturn Rings",
      subText: "Saturn Rings look amazing",
      mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam nesciunt sapiente iure ad reprehenderit, est nulla veritatis neque laborum."
    },
    {
      imageUrl: "/assets/news-items/news4.jpg",
      newsImageBlockClass: "block4",
      newsLink: "theLink",
      name: "Mars Rover",
      subText: "NASA Finds Ancient Organic Material",
      mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam nesciunt sapiente iure ad reprehenderit, est nulla veritatis neque laborum."
    },
    {
      imageUrl: "/assets/news-items/news4.jpg",
      newsImageBlockClass: "block5",
      newsLink: "theLink",
      name: "Jupiter",
      subText: "Jupiter's Great Red Spot Is Spectacular",
      mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam nesciunt sapiente iure ad reprehenderit, est nulla veritatis neque laborum."
    },
    {
      imageUrl: "/assets/news-items/news3.jpg",
      newsImageBlockClass: "block6",
      newsLink: "theLink",
      name: "Saturn Rings",
      subText: "Saturn Rings look amazing",
      mainText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam nesciunt sapiente iure ad reprehenderit, est nulla veritatis neque laborum."
    }
  ]

}
