import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './main/slider/slider.component';
import { CategoryComponent } from './main/category/category.component';
import { ListComponent } from './main/list/list.component';
import { CategoryFilterPipe } from './category-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SliderComponent,
    CategoryComponent,
    ListComponent,
    CategoryFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
