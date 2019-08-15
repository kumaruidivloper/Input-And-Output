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
    // Make different validator in Array- (Array of validation) 
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace,
      UsernameValidators.shouldBeUnique
    ]),
    password: new FormControl('', Validators.required)
  });

  login () {
    this.form.setErrors({
      invalidLogin: true
    });
    // let isValid = authService.login(this.form.value);
    // if (!isValid) {
        
    // }
  }

  get username() {
    return this.form.get('username');
  }

  constructor() { }

  ngOnInit() {
  }

}
