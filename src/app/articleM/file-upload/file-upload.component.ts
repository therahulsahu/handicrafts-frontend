import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  constructor(private _articleService: ArticleService, private _coreService: CoreService, private _dialogRef: DialogRef<FileUploadComponent>, private _router: Router) {}

  uploadFile(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    this._articleService.uploadFile(formData).subscribe({
      next: (val:any) => {
        this._coreService.openSnackBar('Article added successfully');
        this._dialogRef.close();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

}
