import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent {

  logR(field){
      console.log("Not touched in forms");
  }

  onSubmit(form:NgForm){
    console.log(form);
   
  }

  
}
