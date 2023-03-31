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

  dialogConfigCreate = new MatDialogConfig();
  dialogConfigUploadFile = new MatDialogConfig();

  constructor(private _dialog: MatDialog) {
    this.dialogConfigCreate.height = '500px';
    this.dialogConfigCreate.width = '400px';
    this.dialogConfigUploadFile.height = '250px';
    this.dialogConfigUploadFile.width = '500px'
  }

  onCreateArticleClick() {
    this._dialog.open(CreateArticleComponent, this.dialogConfigCreate);
  }

  onUploadFileClick() {
    this._dialog.open(FileUploadComponent, this.dialogConfigUploadFile);
  }

}
