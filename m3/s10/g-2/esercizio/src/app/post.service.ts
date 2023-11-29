import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  private posts: string[] = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5', 'Post 6', 'Post 7', 'Post 8', 'Post 9', 'Post 10'];

  getPosts(): string[] {
    return this.posts;
  }



post =[
  {
    id: 1,
    titolo: 'Post 1',
    arePostVisible : false,
    testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    id: 2,
    titolo: 'Post 2',
    arePostVisible : true,
    testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    id: 3,
    titolo: 'Post 3',
    arePostVisible : false,
    testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    id: 4,
    titolo: 'Post 4',
    arePostVisible : true,
    testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    id: 5,
    titolo: 'Post 5',
    arePostVisible : false,
    testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    id: 6,
    titolo: 'Post 6',
    arePostVisible : true,
    testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    id: 7,
    titolo: 'Post 7',
    arePostVisible : false,
    testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    id: 8,
    titolo: 'Post 8',
    arePostVisible : true,
    testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    id: 9,
    titolo: 'Post 9',
    arePostVisible : false,
    testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    id: 10,
    titolo: 'Post 10',
    arePostVisible : true,
    testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  }

]

getActivePosts(){
  return this.post.filter(post => post.arePostVisible);

}
getInactivePosts(){
  return this.post.filter(post => !post.arePostVisible);

}
}
