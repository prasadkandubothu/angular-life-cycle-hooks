import { Component, Input ,
OnChanges , OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnChanges, OnInit {
  @Input() name: string;

   constructor(){
    console.log("Children : Hello - constructor");
  }

  ngOnChanges(){
     console.log("Children : Hello - ngConChanges : " +this.name);
  }
  ngOnInit(){
     console.log("Parent : App - ngOnInit");
  }
}
