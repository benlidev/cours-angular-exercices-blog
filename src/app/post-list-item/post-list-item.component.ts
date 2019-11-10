import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  isLoved(): boolean {
    return this.post.lovesIt > 0;
  }

  isDontLoved(): boolean {
    return this.post.lovesIt < 0;
  }

  getColor() {
    if (this.isLoved()) {
      return 'green';
    } else if (this.isDontLoved()) {
        return 'red';
    }
  }

  onLove() {
    this.post.lovesIt++;
  }

  onDontLove() {
    this.post.lovesIt--;
  }

}
