import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private blogService: BlogService) { }

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
    this.blogService.loveIt(this.post);
  }

  onDontLove() {
    this.blogService.dontLoveIt(this.post);
  }

  onRemove(uuid: string) {
    this.blogService.removePost(uuid);
  }

}
