import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angProject';
  inputData:any="Pinal"

  loginFun(user:any,pass:String){
    alert(user+" "+"it's password is "+pass)
  }

  reg(tempForm:NgForm){
    console.log(tempForm)
  }

  changeData(){
    this.inputData="Kaif"
  }

  load:boolean = true
  childComp(){
    this.load = !this.load
  }
}
