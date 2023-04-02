import { NgModule } from "@angular/core";
import { SharedModule } from "../sharedM/shared.module";
import { CreateArticleComponent } from './create-article/create-article.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ImageComponent } from './image/image.component';
import { DatePipe } from "@angular/common";

@NgModule({
    declarations:[
    CreateArticleComponent,
    ListArticlesComponent,
    FileUploadComponent,
    ImageComponent
  ],
    imports:[SharedModule],
    providers:[DatePipe]
})
export class ArticleModule{

}