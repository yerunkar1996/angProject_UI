import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthservService {

  constructor(private http: HttpClient) { }

  studentAPIurl="http://localhost:3000/studentData"
  adminAPIurl="http://localhost:3000/Admin"


  getStudentLogin(){
    return this.http.get(this.studentAPIurl)
  }

  getAdminLogin(){
    return this.http.get(this.adminAPIurl)
  }

}
