import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-data',
  templateUrl: './simple-data.component.html',
  styleUrls: ['./simple-data.component.scss']
})
export class SimpleDataComponent implements OnInit {

  constructor() { }

  public peopleCards = [
    {name: "John Smith",  email: "john.smith@hubdesign.net",  phone: "02154 321654"},
    {name: "Jamie Doe",   email: "jamie.doe@hubdesign.net",   phone: "02154 321654"},
    {name: "Jane Doe",    email: "jane.doe@hubdesign.net",    phone: "02154 321654"}
  ]

  ngOnInit() {
  }

}
