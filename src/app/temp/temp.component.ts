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
    if(this.meat == "pork" && this.vegetable == "pepper") {
      this.order = true;
    }
    else if(this.meat == "beef" && this.vegetable == "tomato") {
      this.order = true;
    }
  }

}
