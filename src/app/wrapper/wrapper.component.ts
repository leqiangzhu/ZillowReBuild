import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  link:number =0;
 
  

  buyLink(){
    this.link=0;
  }

  sellLink(){
    this.link=2;
  }
  rentLink(){
    this.link=1;
  }
  zestimateLink(){
    this.link=3;
  }
}
