import { OnInit, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';

export class BlogService {
  posts: Post[] = [];
  postsSubject: Subject<Post[]> = new Subject();

  emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  constructor() {
    this.loadPostsFromServer();
   }

  loadPostsFromServer() {
    console.log('chargement...');
    firebase.database().ref('/posts')
      .on('value', (data: firebase.database.DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
    this.emitPosts();
  }

  savePostsFromServer() {
    firebase.database().ref('/posts').set(this.posts);
  }

  addPost(post: Post) {
    post.id = uuid();
    this.posts.push(post);
    this.savePostsFromServer();
    this.emitPosts();
  }

  removePost(newUuid: string) {
    const indexToRemovePost = this.posts.findIndex(
      (post) => {
        if (post.id === newUuid) {
          return true;
        }
      }
    );
    console.log('Suppresion du post ' + newUuid + '(index = ' + indexToRemovePost + ')');
    this.posts.splice(indexToRemovePost, 1);
    this.savePostsFromServer();
    this.emitPosts();
  }

  loveIt(postModified: Post) {
    const postInTableau = this.posts.find(post => {
      if (post.id === postModified.id) {
        return true;
      }
    });
    postInTableau.lovesIt++;
    this.savePostsFromServer();
    this.emitPosts();
  }

  dontLoveIt(postModified: Post) {
    const postInTableau = this.posts.find(post => {
      if (post.id === postModified.id) {
        return true;
      }
    });
    postInTableau.lovesIt--;
    this.savePostsFromServer();
    this.emitPosts();
  }
}
