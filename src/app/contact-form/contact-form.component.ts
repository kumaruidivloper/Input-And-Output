import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' }
  ];

  constructor() { }

  log(x) {
    console.log(x);
  }
  
  submit(f) {
    console.log(f);
    console.log(f.valid);
    console.log(f.value)
  }

  ngOnInit() {
  }

}
