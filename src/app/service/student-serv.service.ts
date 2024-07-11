import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServService {

  // dependancy Injectable
  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:3000/studentData"
  adminApiUrl = "http://localhost:3000/Admin"
  //GET API Method
  getData(){
    return this.http.get(this.apiUrl)
  }

   //GET API Method -- profile
   getProfileData(id:any){
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  //Delete API Method
  deleteData(id:any){
    return this.http.delete(`${this.apiUrl}/${id}`)
  };

  //POST API Method
  addDetails(formData:any){
    return this.http.post(this.apiUrl, formData)
  }

  //PUT API Method
  updateDetails(id:any,formData:any){
    return this.http.put(`${this.apiUrl}/${id}`,formData)
  }


}
