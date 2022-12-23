import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Blog} from "../../models/blog";
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent {
  public blogPosts!: Observable<Blog[]>

  constructor(private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogPosts = this.blogService.getBlogPosts();
  }
}
