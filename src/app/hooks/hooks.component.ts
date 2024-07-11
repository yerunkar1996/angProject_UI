import { Component, DoCheck, ViewChild, ElementRef, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements  DoCheck, AfterViewInit,AfterViewChecked , AfterContentInit, AfterContentChecked, OnDestroy{
  Name:any;
  constructor(){
    // this.Name = "Kaif"
    console.log("constructor of class HooksComponent",this.Name)
  }

 

  ngOnInit(){
    this.Name ="Kaif"
    console.log("OnInit hook of a class hook component", this.Name)
  }

  check:any=true
  getName(){
    this.Name = "Yash"
    // this.check = !this.check
    this.Elepara.nativeElement.innerText = "change content"
    this.Elepara.nativeElement.style.backgroundColor = "black"
  }

  //DoCheck
  ngDoCheck(){
    console.log("DoCheck HookComponent")
  }


  //afterviewInit
  @ViewChild("para") Elepara:ElementRef |any;

  ngAfterViewInit(){
    console.log("ngAfterViewInit hook load after templete get load")
    console.log(this.Elepara)
    this.Elepara.nativeElement.style.color="red"
    this.Elepara.nativeElement.style.backgroundColor = "green"
  }


  ngAfterViewChecked(){
    console.log("ngAfterviewChecked hookcomponent")
  }

  ngAfterContentInit(){
      console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }


  ngOnDestroy(): void {
      console.log("child component OnDestroy")
  }


  

   

  
}
