import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateArticleComponent } from 'src/app/articleM/create-article/create-article.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  dialogConfig = new MatDialogConfig();


  constructor(private _dialog: MatDialog) {
    this.dialogConfig.height = '500px';
    this.dialogConfig.width = '400px';
  }

  onCreateArticleClick() {
    this._dialog.open(CreateArticleComponent, this.dialogConfig);
  }

}
