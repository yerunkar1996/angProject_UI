import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  logIn:any
  ngOnInit(){
    this.getLogedIn()
  }

  getLogedIn(){
      if(localStorage.getItem("Admin") == "" || localStorage.getItem("Student") == ""){
        this.logIn =false
      }
      else{
        this.logIn = true
      }
  }

  logout(){
    this.logIn = true
    localStorage.setItem("Admin", "")
    localStorage.setItem("Student", "")
    // location.reload()
  }
}
