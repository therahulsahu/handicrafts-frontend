import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent {

  articleForm: FormGroup;

  productTypeList: any = ['shirt','pant'];

  constructor(private formBuilder: FormBuilder, private _articleService: ArticleService, 
    private _dialogRef: DialogRef<CreateArticleComponent>, private _router: Router) {
    this.articleForm = this.formBuilder.group({
      productType: ['', Validators.required],
      brandName: ['', Validators.required],
      mrp: ['', Validators.required],
      mfgDate: ['', Validators.required],
      articleNo: ['', Validators.required],
      specifications: this.formBuilder.group({
        color: ['',Validators.required],
        size: ['',Validators.required],
        quantity: [1,Validators.required]
      })
    });
  }

  onSubmit() {
    console.log(this.articleForm.value);
    this._articleService.addArticle(this.articleForm.value).subscribe({
      next: (val:any) => {
        alert('Article added successfully');
        this._dialogRef.close();
        this._router.navigate(['list']);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}
