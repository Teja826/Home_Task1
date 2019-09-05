import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsElementsContainerComponent } from './components/news-container/news-elements-container/news-elements-container.component';
import { NewsFilterComponent } from './components/news-container/news-filter/news-filter.component';
import { NewsElementComponent } from './components/news-container/news-elements-container/news-element/news-element.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoaderComponent } from './components/loader/loader.component';
import { NewsService } from './services/news.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsElementsContainerComponent,
    NewsFilterComponent,
    NewsElementComponent,
    routingComponents,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }