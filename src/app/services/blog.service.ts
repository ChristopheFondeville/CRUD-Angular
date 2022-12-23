import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Blog} from "../models/blog";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {
  }

  public getBlogPosts(): Observable<Blog[]> {
    return this.http.get<Blog[]>(environment.urlAPI + 'blog');
  }

  public getBlogPostById(id: string): Observable<Blog> {
    return this.http.get<Blog>(environment.urlAPI + "blog/" + id)
  }

  public postBlogPost(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(environment.urlAPI + "blog", blog)
  }

  public updateBlogPost(id: string, blog: Blog): Observable<Blog>{
    return this.http.put<Blog>(environment.urlAPI + "blog/" + id, blog);
  }

  deleteBlogPost(id: number): Observable<Blog> {
    return this.http.delete<Blog>(environment.urlAPI + 'blog/' + id);
  }
}
