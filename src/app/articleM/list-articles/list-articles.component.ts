import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/core/core.service';
import { ArticleService } from 'src/app/services/article.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _articleService: ArticleService, private _coreService: CoreService, private _dialog: MatDialog) { }

  displayedColumns: string[] = [
    'eanNo',
    'productType',
    'brandName',
    'mrp',
    'mfgDate',
    'articleNo',
    'color',
    'size',
    'quantity',
    'actions'
  ];

  ngOnInit(): void {
      this._articleService.refreshNeeded.subscribe(
        () => {
          console.log('refreshing');
          // put a 200 millisecond delay to allow the server to update the data
          setTimeout(() => {
            this.getArticles();
          }, 200);
        }
      );
      this.getArticles();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getArticles() {
    this._articleService.getArticle().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  deleteArticle(id: number) {
    this._articleService.deleteArticle(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Article deleted successfully');
        this.getArticles();
      },
      error: console.log,
    });
  }

  createIndividualBarCode(id : any) {
   const dialogConfig = new MatDialogConfig();
   dialogConfig.height = '250px';
   dialogConfig.width = '500px';
   this._dialog.open(ImageComponent, {
    ...dialogConfig,
    data: { extraData: id }
  }); 
  }
}
