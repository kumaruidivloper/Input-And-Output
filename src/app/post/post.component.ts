import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
    http.get(this.url)
      .subscribe(res => {
        this.posts = res;
      })
   }

   createPost(input: HTMLInputElement) {
      let post = { title: input.value };
      input.value = '';

      this.http.post(this.url, JSON.stringify(post))
      .subscribe(res => {
         post['id'] = res['id']
         this.posts.splice(0, 0, post)
      })
        
   }

  ngOnInit() {
  }

}
