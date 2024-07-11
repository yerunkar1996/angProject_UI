import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactMe(Name:any, Email:String, msg:String){
    let contactData:any = new Array();
    let obj:any = new Object();

    obj["Name"] = Name
    obj["Email"] = Email
    obj["Message"] = msg

    contactData.push(obj)
    console.log(contactData)
  }
}
