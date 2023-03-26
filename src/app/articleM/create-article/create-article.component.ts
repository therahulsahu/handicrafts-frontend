import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent {

  articleForm: FormGroup;

  productTypeList: any = ['shirt','pant'];

  constructor(private formBuilder: FormBuilder) {
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
  }
}
