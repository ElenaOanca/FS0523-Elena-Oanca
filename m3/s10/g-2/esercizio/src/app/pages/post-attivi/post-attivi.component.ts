import { Component } from '@angular/core';

//importo i post dal post.service.ts
import { PostService } from '../../post.service';


@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent {
  posts: string[];
  arePostsVisible = false;

  constructor(private postService: PostService) {
    this.posts = this.postService.getPosts();
  }

  togglePosts() {
    this.arePostsVisible = !this.arePostsVisible;
  }
//metodo che controlla se il post di tipo è attivo o meno in base al valore di arePostVisible
  isPostActive(post: any) {
    return post.arePostVisible;
  }



}
