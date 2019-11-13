import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})
export class PostNewComponent implements OnInit {

  postForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group(
      {
        title: ['', Validators.required ],
        content: ['', Validators.required ]
      }
    );
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Post(title, content);
    this.blogService.addPost(newPost);
    this.router.navigate(['books']);
  }
}
