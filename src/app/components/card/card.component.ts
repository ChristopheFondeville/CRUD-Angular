import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Blog} from "../../models/blog";



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public blogPosts!: Observable<Blog[]>

  @Input() titre = '';

  @Input() content = '';

  @Input() image = '';

  @Input() id = '';

  constructor() {
  }
}
