import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public posts: any;
  constructor(http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(res => {
        this.posts = res;
      })
   }

  ngOnInit() {
  }

}
