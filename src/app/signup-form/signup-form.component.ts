import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    }),
    companyDetails: new FormGroup({
      companyName: new FormControl(''),
      companyAddress: new FormGroup({
          flatName: new FormControl(''),
          faltNumber: new FormControl(''),
          State: new FormControl(''),
          Country: new FormControl('')
      })
    }) 
  });

  login () {
    // this.form.setErrors({
    //   invalidLogin: true
    // });
    // let isValid = authService.login(this.form.value);
    // if (!isValid) {
        
    // }
    console.log(this.form.value);
  }

  get username() {
    return this.form.get('username');
  }

  constructor() { }

  ngOnInit() {
  }

}
