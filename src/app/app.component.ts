import { Component } from '@angular/core';
import { from } from 'rxjs';
import { format } from 'path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  data:any={};
  array:any=[];
 

  onSubmit(f) {
    // alert(JSON.stringify(this.data));
    this.array.push((this.data))
    
    this.data={}
   f.reset()
  }
 
}

