import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServService } from '../service/student-serv.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  // Dynamic Routing
  constructor(private actv: ActivatedRoute, private serv : StudentServService){}

  profileId:any
  student:any
  ngOnInit(){
    this.actv.params.subscribe((urlid)=>{
      console.log(urlid)
      this.profileId = urlid['id']
    })
    this.getProfile()
  }

  getProfile(){
    this.serv.getProfileData(this.profileId).subscribe((data)=>{
      console.log(data)
      this.student = data
    })
  }

}
