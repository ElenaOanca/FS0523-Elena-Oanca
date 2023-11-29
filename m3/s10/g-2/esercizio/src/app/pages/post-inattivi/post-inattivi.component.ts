import { Component } from '@angular/core';

//importo i post dal post.service.ts
import { PostService } from '../../post.service';


@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent {
  posts: string[] = [];
  arePostsVisible = false;

  constructor(private postService: PostService) {
    this.posts = this.postService.getInactivePosts().map(post => post.titolo);
  }

  togglePosts() {
    this.arePostsVisible = !this.arePostsVisible;
  }



}
