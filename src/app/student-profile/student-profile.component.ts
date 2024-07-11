
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { StudentServService } from '../service/student-serv.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditDataComponent } from '../edit-data/edit-data.component';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {

  students:any=""
  constructor(private serv: StudentServService, private router: Router, private dialog: MatDialog){
    // console.log("Constructor of class ")
  }

  ngOnInit(){
    // console.log("ngOnInit")
    this.getDetails()
  }

  

  name:any=""
  // students = [
  //   {
  //     id:1,
  //     Name:"Soham",
  //     UserName:"Soham@23",
  //     Password:"pass@1234",
  //     MobileNo: 7845986578,
  //     EmailId: "soham@gmail.com",
  //     Attendance:60,
  //     Test:"Pass",
  //     Assginment:2,
  //     Place:"Mumbai"
  //   },
  //   {
  //     id:2,
  //     Name:"Shubham",
  //     UserName:"Shubham25#",
  //     Password:"pass@34",
  //     MobileNo: 7845986578,
  //     EmailId: "Shubham@gmail.com",
  //     Attendance:80,
  //     Test:"Pass",
  //     Assginment:5,
  //     Place: "Ghatkopar"
  //   },
  //   {
  //     id:3,
  //     Name:"Sahil",
  //     UserName:"Sahil*258",
  //     Password:"pass@43",
  //     MobileNo: 7845986578,
  //     EmailId: "Sahil@gmail.com",
  //     Attendance:50,
  //     Test:"Pass",
  //     Assginment:3,
  //     Place: "Sion"
  //   },
  //   {
  //     id:4,
  //     Name:"Sagar",
  //     UserName:"SagarPatil",
  //     Password:"pass#4",
  //     MobileNo: 7845986578,
  //     EmailId: "Sagar@gmail.com",
  //     Attendance:90,
  //     Test:"Pass",
  //     Assginment:2 ,
  //     Place:"Virar"
  //   },
  //   {
  //     id:5,
  //     Name:"Siddhi",
  //     UserName:"Siddhi#20",
  //     Password:"pass@233",
  //     MobileNo: 7845986578,
  //     EmailId: "Siddhi@gmail.com",
  //     Attendance:95,
  //     Test:"Pass",
  //     Assginment:5,
  //     Place:"Rabale"
  //   }
  // ]

  // studentList:any
  // getName(name:any){
  //   console.log(name)
  //   if(name==""){
  //     this.dataSource = new MatTableDataSource(this.students);
  //   }
  //   else{
  //     this.students = []
  //     this.students.forEach((data)=>{
  //       if(data.Name.includes(name)){
  //         this.studentList.push(data)
  //       }
  //     })
  //   }
   // }
   getDetails(){
    this.serv.getData().subscribe((studentData)=>{
      this.students = studentData
      console.log(this.students)
     })
   }

   deleteData(id:any){
      this.serv.deleteData(id).subscribe(()=>{
        alert(`student id ${id} data has been deleted`)
      })
   }

   profileData(id:any){
    console.log(id)
    this.router.navigate(['/profile', id])
   }

   openDialog(studentData:any) {
    const dialogRef = this.dialog.open(EditDataComponent, {
      data:{
        sData: studentData
      }
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

   

  // displayedColumns: string[] = ['id', 'Name',  "MobileNo", "EmailId","Place", "Test"];

  // dataSource12 = new MatTableDataSource(this.students);
  // @ViewChild(MatPaginator) paginator: MatPaginator  |any;

  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit of class ")
  //   this.dataSource12.paginator = this.paginator;
  // }

