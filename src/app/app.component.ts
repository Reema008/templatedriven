import { Component } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  data:any={};
  array:any=[];
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
}; 

  onSubmit(f) {
    // alert(JSON.stringify(this.data));
    this.array.push((this.data))
    console.log(this.data);
    this.data={}
   f.reset()
  }}
  


