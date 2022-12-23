import {Component} from '@angular/core';
import {Blog} from "../../models/blog";
import {Observable} from "rxjs";
import {BlogService} from "../../services/blog.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  public form!: FormGroup;
  public blogPost!: Observable<Blog>;
  private id!: string;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private _formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = <string>params.get('id');
      if (this.id) {
        this.blogService.getBlogPostById(this.id).subscribe((itemBlog: Blog) => {
          this.form = this.fb.group({
            'title': new FormControl(itemBlog.title, [Validators.required]),
            'content': new FormControl(itemBlog.content, [Validators.required]),
            'image': new FormControl(itemBlog.image),
          });
        })
      }
    });
  }

  onFormSubmit(){
    if (this.form.valid) {
      this.blogService.updateBlogPost(this.id, <Blog> this.form.getRawValue()).subscribe(
        () => {
          this.router.navigate(['edit', this.id]);
        },
        (error: Error) => {
          console.error(error);
        }
      );
    }
  }
}
