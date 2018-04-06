import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-item-class-toggle',
  templateUrl: './multi-item-class-toggle.component.html',
  styleUrls: ['./multi-item-class-toggle.component.scss']
})
export class MultiItemClassToggleComponent implements OnInit {

  constructor() { }

  public planets = [
    { id:1, name: "mercury", open:false },
    { id:2, name: "venus", open:false  },
    { id:3, name: "earth", open:false  },
    { id:4, name: "mars", open:false  },
    { id:5, name: "jupiter", open:false  },
    { id:6, name: "saturn", open:false  },
    { id:7, name: "unranus", open:false  },
    { id:8, name: "neptune", open:false  },
    { id:9, name: "pluto", open:false  },
  ];
  
  ngOnInit() {
  }

  togglePlanetClass(id){
    this.planets.forEach(planetId => {
      if (planetId.id === id) {
        planetId.open = true;
      }
      else 
      {
        planetId.open = false;
      }
    })
  }

}
