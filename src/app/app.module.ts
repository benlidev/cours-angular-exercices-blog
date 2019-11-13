import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { BlogService } from './services/blog.service';
import { HeaderComponent } from './header/header.component';
import { PostNewComponent } from './post-new/post-new.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'new', component: PostNewComponent },
  { path : '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    HeaderComponent,
    PostNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BlogService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
