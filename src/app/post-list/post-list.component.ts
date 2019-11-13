import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../models/post.model';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  postSubscription: Subscription;

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.postSubscription = this.blogService.postsSubject.subscribe(
      ( postsByService: Post[] ) => {
        this.posts = postsByService;
      }
    );
    this.blogService.emitPosts();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

  onNewPost() {
    this.router.navigate(['new']);
  }

}
