import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "../sharedM/shared.module";
import { ArticleComponent } from './article/article.component';

@NgModule({
    declarations:[
    ArticleComponent
  ],
    imports:[SharedModule,CoreModule],
    exports:[ArticleComponent],
    providers:[]
})
export class ArticleModule{

}