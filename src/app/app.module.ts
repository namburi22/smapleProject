import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './base/header-module';
import { SearchModule } from './search/search-module';
import { PrkPrimeNgModule } from './primeng/primeng.module';
import { AuthService } from 'src/commonServices/auth.service';
import { RestServiceCallService } from 'src/commonServices/rest.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    SearchModule
  ],
  providers: [RestServiceCallService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
