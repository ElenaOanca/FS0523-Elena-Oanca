import { Component } from '@angular/core';

//importo i post dal post.service.ts
import { PostService } from '../../post.service';


@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent {
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
    return post.arePostVisible==false;
  }



}
