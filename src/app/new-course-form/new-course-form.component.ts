import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent implements OnInit {

  form = new FormGroup({
       topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value))
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  constructor() { }

  ngOnInit() {
  }

}
