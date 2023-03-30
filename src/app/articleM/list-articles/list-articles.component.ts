import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit{

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _articleService: ArticleService){}

  displayedColumns: string[] = [
    'id',
    'productType',
    'brandName',
    'mrp',
    'mfgDate',
    'articleNo',
    'color',
    'size',
    'quantity'
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

  getArticles() {
    this._articleService.getArticle().subscribe({
      next : (res :any) =>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err : any) => {
        console.log(err);
      }
    })
  }
}
