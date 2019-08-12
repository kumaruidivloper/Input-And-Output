import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
