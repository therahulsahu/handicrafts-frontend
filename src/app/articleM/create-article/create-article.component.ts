import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
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
    private _coreService: CoreService, private _dialogRef: DialogRef<CreateArticleComponent>, private _router: Router) {
    this.articleForm = this.formBuilder.group({
      productType: ['', Validators.required],
      brand: ['', Validators.required],
      mrp: ['', Validators.required],
      mfg: ['', Validators.required],
      articleNo: ['', Validators.required],
      specification: this.formBuilder.group({
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
        this._coreService.openSnackBar('Employee added successfully');
        console.log(val);
        this._dialogRef.close();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}
