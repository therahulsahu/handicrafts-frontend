import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticleComponent } from './articleM/create-article/create-article.component';
import { ListArticlesComponent } from './articleM/list-articles/list-articles.component';

const routes: Routes = [
  { path : 'list', component: ListArticlesComponent},
  { path : 'create', component: CreateArticleComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
