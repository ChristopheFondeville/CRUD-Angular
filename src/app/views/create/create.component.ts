import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BlogService} from "../../services/blog.service";
import {Blog} from "../../models/blog";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private blogService: BlogService
  ) {

    this.form = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', Validators.required],
      image: [''],
    });
  }

  onFormSubmit() {
    if (this.form.valid) {
      const resultForm = {
        ...this.form.getRawValue()
      };
      this.blogService.postBlogPost(resultForm).subscribe(
        (blog: Blog) => {
          this.router.navigate(['home']);
        },
        (error: Error) => {
          console.error(error);
        }
      );
    }
    ;
  }
}
