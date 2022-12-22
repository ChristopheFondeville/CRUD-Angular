import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Blog} from "../models/blog";
import {environment} from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {}

  public getBlogPosts(): Observable<Blog[]>{
    return this.http.get<Blog[]>(environment.urlAPI + 'blog');
  }
}
