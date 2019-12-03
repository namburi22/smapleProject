import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';

import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    TableModule,
    ButtonModule
  ],
  providers: [],
  exports: [MenubarModule,ButtonModule,TableModule]
})
export class PrkPrimeNgModule { 
    static forRoot(){
        return{
            ngModule:PrkPrimeNgModule,
            providers:[]
        }
    }
}
