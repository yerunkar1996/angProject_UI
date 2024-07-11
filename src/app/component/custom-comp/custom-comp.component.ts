import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-comp',
  templateUrl: './custom-comp.component.html',
  styleUrls: ['./custom-comp.component.css']
})
export class CustomCompComponent {
  Name ="Roshan Gawade"
  num=25.3695
  date = new Date()
  val= 246
}
