import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageProductsModule } from './pages/page-products/page-products.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PageProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
