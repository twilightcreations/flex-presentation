import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-service',
  templateUrl: './simple-service.component.html',
  styleUrls: ['./simple-service.component.scss']
})
export class SimpleServiceComponent implements OnInit {

 public colours = ([
  {
    "color": "black",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [255,255,255,1],
      "hex": "#000"
    }
  },
  {
    "color": "white",
    "category": "value",
    "code": {
      "rgba": [0,0,0,1],
      "hex": "#FFF"
    }
  },
  {
    "color": "red",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [255,0,0,1],
      "hex": "#FF0"
    }
  },
  {
    "color": "blue",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [0,0,255,1],
      "hex": "#00F"
    }
  },
  {
    "color": "yellow",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [255,255,0,1],
      "hex": "#FF0"
    }
  },
  {
    "color": "green",
    "category": "hue",
    "type": "secondary",
    "code": {
      "rgba": [0,255,0,1],
      "hex": "#0F0"
    }
  }
 ])
  constructor() { }

  ngOnInit() {
  }

}
