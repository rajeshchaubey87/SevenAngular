import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent {


  onSubmit(form:NgForm){
    console.log(form);
    alert(form.control.value.fName);
    alert(form.control.value.feedback);
  }

  
}
