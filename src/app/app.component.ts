import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nameNumber: number = 3;
   courses = [
     { id: 1, name: 'course1' },
     { id: 2, name: 'course2' },
     { id: 3, name: 'course3' }
   ];

   onAdd() {
     this.nameNumber++;
     console.log(this.nameNumber);
     this.courses.push({ id: + this.nameNumber, name: 'course'+this.nameNumber  })
   }

   onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1)
   }
}
