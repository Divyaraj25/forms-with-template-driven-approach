import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answer='';
  defaultQues = 'teacher';
  genders = ['male', 'female'];
  @ViewChild('f') formdata:NgForm;
  formSubmitted = false;
  user = {
    username: '',
    email:'',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  suggestUserName() {
    const suggestedName = 'Superuser';

    // setValue is used to update whole form with or without values entered, if entered value is there then it will update the whole form
    // this.formdata.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
    this.formdata.form.patchValue({
      userData:{
        username: suggestedName
      }
    })
  }
  onSubmit(){
    this.formSubmitted = true;
    // console.log(this.formdata);
    this.user.username = this.formdata.value.userData.username;
    this.user.email = this.formdata.value.userData.email;
    this.user.secretQuestion = this.formdata.value.secret;
    this.user.answer = this.formdata.value.questionanswer;
    this.user.gender = this.formdata.value.gender;

    this.formdata.reset()
  }
}
