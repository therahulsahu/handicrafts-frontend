import { NgModule } from "@angular/core";
import { SharedModule } from "../sharedM/shared.module";
import { CreateArticleComponent } from './create-article/create-article.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';

@NgModule({
    declarations:[
    CreateArticleComponent,
    ListArticlesComponent
  ],
    imports:[SharedModule],
    providers:[]
})
export class ArticleModule{

}