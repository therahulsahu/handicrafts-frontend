import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateArticleComponent } from 'src/app/articleM/create-article/create-article.component';
import { FileUploadComponent } from 'src/app/articleM/file-upload/file-upload.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private _dialog: MatDialog) {}

  onCreateArticleClick() {
    const dialogConfigCreate = new MatDialogConfig();
    dialogConfigCreate.height = '500px';
    dialogConfigCreate.width = '400px';
    this._dialog.open(CreateArticleComponent, dialogConfigCreate);
  }

  onBulkBarCodeClick() {
    const dialogConfigUploadFile = new MatDialogConfig();
    dialogConfigUploadFile.height = '250px';
    dialogConfigUploadFile.width = '500px';
    this._dialog.open(FileUploadComponent, {
      ...dialogConfigUploadFile,
      data: { extraData: 'bulkBarCode' }
    });
  }

  onBulkArticleClick() {
    const dialogConfigUploadFile = new MatDialogConfig();
    dialogConfigUploadFile.height = '250px';
    dialogConfigUploadFile.width = '500px';
    this._dialog.open(FileUploadComponent, {
      ...dialogConfigUploadFile,
      data: { extraData: 'bulkArticleAdd' }
    });
  }

}
