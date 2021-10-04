import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

 public num1!: number;
 public num2!: number;
 public result!: number;

add(){
  this.result=this.num1+this.num2;
}
sub(){
  this.result=this.num1-this.num2;
}
multi(){
  this.result=this.num1*this.num2;
}
div(){
  this.result=this.num1/this.num2;
}

}