import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsContainerComponent } from './components/news-container/news-container.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { ViewNewsComponent } from './components/view-news/view-news.component';
import { LoginComponent } from './components/login/login.component';
import { ComponentComponent } from './components/lifecycle/component/component.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'news', component: NewsContainerComponent },
  { path: 'news/:id', component: ViewNewsComponent },
  { path: 'add-news', component: AddNewsComponent },
  { path: 'lifecycle', component: ComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,NewsContainerComponent,ViewNewsComponent,AddNewsComponent,ComponentComponent]