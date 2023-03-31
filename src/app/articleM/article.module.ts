import { NgModule } from "@angular/core";
import { SharedModule } from "../sharedM/shared.module";
import { CreateArticleComponent } from './create-article/create-article.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
    declarations:[
    CreateArticleComponent,
    ListArticlesComponent,
    FileUploadComponent
  ],
    imports:[SharedModule],
    providers:[]
})
export class ArticleModule{

}