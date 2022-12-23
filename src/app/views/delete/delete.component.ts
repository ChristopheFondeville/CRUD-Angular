import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Blog} from "../../models/blog";
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public blogPosts!: Observable<Blog[]>

  constructor(private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogPosts = this.blogService.getBlogPosts();
  }

  onDeletePost(id: number): void {
    this.blogService.deleteBlogPost(id).subscribe((result) => {
      this.blogPosts = this.blogService.getBlogPosts();
    });
  }
}
