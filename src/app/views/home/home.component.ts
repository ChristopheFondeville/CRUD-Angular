import { Component } from '@angular/core';
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private itemService: BlogService) {
  }

}
