import { Component } from '@angular/core';

//importo i post dal post.service.ts
import { PostService } from '../../post.service';


@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent {
  posts: string[] = [];
  arePostsVisible = true;

  constructor(private postService: PostService) {
    this.posts = this.postService.getActivePosts().map(post => post.titolo);
  }

  togglePosts() {
    this.arePostsVisible = !this.arePostsVisible;
  }




}
