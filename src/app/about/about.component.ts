import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  public name = "Thúy Hứa nek";
  public traiCay = ['tao','nho','oi'];
  constructor(){

  }
  ngOnInit(): void{

  }
  public resetName(){
    console.log("resetname");
  }
}
