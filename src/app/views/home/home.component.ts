import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Blog} from "../../models/blog";
import {BlogService} from "../../services/blog.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public blogPosts!: Observable<Blog[]>

  constructor(private blogService: BlogService) {
  }
  ngOnInit(): void {
    this.blogPosts = this.blogService.getBlogPosts();
  }

}
