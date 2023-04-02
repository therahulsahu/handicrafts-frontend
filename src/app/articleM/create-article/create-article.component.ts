import { DialogRef } from '@angular/cdk/dialog';
import { DatePipe } from '@angular/common';
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

  constructor(private formBuilder: FormBuilder, private _articleService: ArticleService,
    private _coreService: CoreService, private _dialogRef: DialogRef<CreateArticleComponent>, private datePipe: DatePipe) {
    this.articleForm = this.formBuilder.group({
      eanNo: ['', [Validators.required, Validators.pattern(/\S/)]],
      productType: ['', [Validators.required, Validators.pattern(/\S/)]],
      brand: ['', [Validators.required, Validators.pattern(/\S/)]],
      mrp: ['', [Validators.required, Validators.pattern(/\S/)]],
      mfg: ['', [Validators.required, Validators.pattern(/\S/)]],
      articleNo: ['', [Validators.required, Validators.pattern(/\S/)]],
      specification: this.formBuilder.group({
        color: ['', [Validators.required, Validators.pattern(/\S/)]],
        size: ['', [Validators.required, Validators.pattern(/\S/)]],
        quantity: [1, [Validators.required, Validators.pattern(/\S/)]]
      })
    });
  }

  // This method checks if the FormGroup itself has any errors using the invalid, touched, and dirty properties.
  // Then, it checks each child form control recursively, and returns true if any of them have errors and are either touched or dirty. 
  //  If no errors are found, it returns false.

  isFormInvalid(): boolean {
  const formGroup = this.articleForm;
  if (!formGroup) {
    return true;
  }

  if (formGroup.invalid && (formGroup.touched || formGroup.dirty)) {
    return true;
  }

  // Check each form control for errors
  for (const control of Object.values(formGroup.controls)) {
    if (control instanceof FormGroup) {
      if (this.isFormGroupInvalid(control)) {
        return true;
      }
    } else if (control.invalid && (control.touched || control.dirty)) {
      return true;
    }
  }

  return false;
}

isFormGroupInvalid(formGroup: FormGroup): boolean {
  if (formGroup.invalid && (formGroup.touched || formGroup.dirty)) {
    return true;
  }

  // Check each form control for errors
  for (const control of Object.values(formGroup.controls)) {
    if (control instanceof FormGroup) {
      if (this.isFormGroupInvalid(control)) {
        return true;
      }
    } else if (control.invalid && (control.touched || control.dirty)) {
      return true;
    }
  }

  return false;
}

onSubmit() {
  const mfgValue = this.articleForm.get('mfg')?.value;
  if (mfgValue) {
    const formattedMfgValue = this.datePipe.transform(mfgValue, 'yyyy-MM-dd');
    this.articleForm.get('mfg')?.setValue(formattedMfgValue);
  }
  this._articleService.addArticle(this.articleForm.value).subscribe({
    next: (val: any) => {
      console.log(val);
      this._coreService.openSnackBar('Article added successfully');
      this._dialogRef.close();
    },
    error: (error: any) => {
      console.error(error);
    }
  });
}
}
