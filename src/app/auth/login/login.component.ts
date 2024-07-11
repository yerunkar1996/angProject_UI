import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthservService } from 'src/app/service/authserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private serv: AuthservService, private router : Router){}
  
  userError:any=false
  passError:any=false
  accessError:any=false

  // loginFun(loginData:any){
  //   let Password = localStorage.getItem(loginData.Username)
  //   let type = typeof(Password) 
  //   console.log(Password,type)
    
  //   if(loginData.Username =="" && loginData.Password == ""){
  //     this.userError=true
  //     this.passError=true
  //   }
  //   else{
  //     this.userError=false
  //     this.passError=false
  //     if(type == 'object'){
  //       this.userError=true
  //     }
  //     else{
  //       if(Password == loginData.Password){
  //            this.userError=false
  //             this.passError=false
  //             console.log(loginData)
  //             alert("login successfull!")
  //       }
  //       else{
  //         this.passError=true
  //       }
  //     }
     
  //   }
  // }
   Data:any=[]
    loginFun(loginData:any){
      if(loginData.User == ""){
        this.accessError = true
        this.userError = true
        this.passError = true
      }
      else if(loginData.User == "Admin"){
        this.accessError = false
        this.userError = false
        this.passError = false
        this.serv.getAdminLogin().subscribe((jsonData)=>{
          this.Data = jsonData
          // console.log(this.Data)
          for(let i of this.Data){
            if(i.userName == loginData.Username){
              this.userError = false
              this.loginAuth(i, loginData)
              break
              // console.log(i)
            }
            else{
              this.userError = true
              continue
            }
          }
      })
      }
      else if(loginData.User == "Student"){
        this.accessError = false
        this.userError = false
        this.passError = false
        this.serv.getStudentLogin().subscribe((jsonData)=>{
          this.Data = jsonData
          // console.log(this.Data)
          for(let i of this.Data){
            if(i.userName == loginData.Username){
              this.userError = false
              this.loginAuth(i, loginData)
              break
              // console.log(i)
            }
            else{
              this.userError = true
              continue
            }
          }
        })
      }
    }



    loginAuth(data:any, loginData:any){ 
      console.log(data,loginData)
      if(data.password == loginData.Password){
        this.userError = false
        this.passError = false
        alert("Login")
        if(loginData.User == "Admin"){
          localStorage.setItem(loginData.User, data.name)
          localStorage.setItem("Student", "")
        }
        else{
          localStorage.setItem(loginData.User, data.name)
          localStorage.setItem("Admin", "")
        }
        this.router.navigate(['/'])
      }
      else{
        this.passError = true
      }
    }



}
