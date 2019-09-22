import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnChanges, OnInit  {
  name = 'Angular';
  constructor(){
    console.log("Parent : App - constructor");
  }
  ngOnChanges(){
     console.log("Parent : App - ngOnChanges");
  }
  ngOnInit(){
     console.log("Parent : App - ngOnInit");
  }
}
