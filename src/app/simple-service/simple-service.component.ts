import { Component, OnInit } from '@angular/core';
import { SimpleService } from './simple.service';

@Component({
  selector: 'app-simple-service',
  templateUrl: './simple-service.component.html',
  styleUrls: ['./simple-service.component.scss']
})
export class SimpleServiceComponent implements OnInit {
  
  constructor(public simpleService: SimpleService) {
      
   }

   colourCollection = this.simpleService.colours;
   movieCollection = this.simpleService.colours;

  ngOnInit() {
  }

}
