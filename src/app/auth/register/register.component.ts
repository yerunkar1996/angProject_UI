import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentServService } from 'src/app/service/student-serv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private serv: StudentServService, private router :Router){}

  registerForm = new FormGroup({
      id: new FormControl("",[Validators.required]),
      name: new FormControl("",[Validators.required]),
      userName: new FormControl("",[Validators.required, Validators.minLength(5)]),
      password: new FormControl("",[Validators.required, Validators.pattern('[a-zA-Z0-9@]{6}')]),
      mobileNo: new FormControl("",[Validators.required, Validators.pattern("[0-9]{10}")]),
      emailId: new FormControl("",[Validators.required, Validators.email]),
      place: new FormControl("",[Validators.required])
  })
  checkAnnotation:any=false
  checkpass:any = false
  regFormSubmit(){
    let pass:any = this.registerForm.get('password')
    console.log(this.registerForm.get('password'),pass.value)

    if(pass.value == "" && pass.status == "INVALID"){
        this.checkAnnotation=false
      this.checkpass = true
    }
    else{
      if(!pass.value.includes('@') ){
        this.checkAnnotation=true
      }
      else{
        this.checkAnnotation = false
        this.checkpass = false
        console.log(this.registerForm.value)
        //call api method from service
        this.serv.addDetails(this.registerForm.value).subscribe(()=>{
          this.router.navigate(['/'])
          alert("form submitted!")
        })

        this.resetForm()
      }
    }
  } 

  resetForm(){
    this.registerForm.patchValue({
      id: "",
      name: "",
      userName: "",
      password: "",
      mobileNo: "",
      emailId: "",
      place: ""
    })
  }

  get id(){
    return this.registerForm.get('id')
  }
  get name(){
    return this.registerForm.get('name')
  }
  get userName(){
    return this.registerForm.get('userName')
  }
 
  get password(){
    return this.registerForm.get('password')
  }

  get mobileNo(){
    return this.registerForm.get('mobileNo')
  }


}
