import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "../sharedM/shared.module";
import { CreateArticleComponent } from './create-article/create-article.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';

@NgModule({
    declarations:[
    CreateArticleComponent,
    ListArticlesComponent
  ],
    imports:[SharedModule,CoreModule],
    exports:[ListArticlesComponent],
    providers:[]
})
export class ArticleModule{

}