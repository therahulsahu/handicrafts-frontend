import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateArticleComponent } from 'src/app/articleM/create-article/create-article.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private _dialog: MatDialog) {}

  onCreateArticleClick() {
    this._dialog.open(CreateArticleComponent);
  }

}
