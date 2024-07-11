import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentServService } from '../service/student-serv.service';


@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private studentService: StudentServService
    ){}
  studentData:any
  ngOnInit(){
    this.studentData = this.data.sData
      console.log("Student data is",this.studentData)
      //Destructuring Method -- ES7
      const {id, name, mobileNo, emailId, place } = this.studentData
      console.log("id, name, mobileNo, emailId, place",id, name, mobileNo, emailId, place)

      // setPredefine value of form -- Patch method
      this.updateForm.patchValue({
        id: id,
        name: name,
        mobileNo: mobileNo,
        emailId: emailId,
        place: place
      })


  }


  updateForm = new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    mobileNo: new FormControl(""),
    emailId: new FormControl(""),
    place: new FormControl("")
  })

  submitForm(){
    console.log("Update FormData is",this.updateForm.value)

    // PUTAPI method
    this.studentService.updateDetails(this.studentData.id, this.updateForm.value).subscribe(()=>{
      alert(this.studentData.name+" details has been updated!")
    })

    location.reload()
  }

}
