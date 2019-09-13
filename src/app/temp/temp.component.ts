import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  vegetable: string;
  meat: string;
  order = false;
  start = true;

  constructor() { }

  ngOnInit() {
  }

  getVegetable() {
    return this.vegetable;
  }

  getMeat() {
    return this.meat;
  }

  setOrder() {
    this.start = false;
    if(this.meat == "pork" && this.vegetable == "pepper") {
      this.order = true;
    }
    else if(this.meat == "beef" && this.vegetable == "tomato") {
      this.order = true;
    }
  }

  clear() {
    this.start = true;
    this.order = false;
  }

}
