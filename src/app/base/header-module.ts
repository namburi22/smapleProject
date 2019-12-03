import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header-component';
import { HeaderService } from './service/header.service';
import { FooterComponent } from './footer/fotter-componet';
import { PrkPrimeNgModule } from '../primeng/primeng.module';
import { AuthService } from 'src/commonServices/auth.service';
import { RestServiceCallService } from 'src/commonServices/rest.service';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        PrkPrimeNgModule.forRoot()
    ],
    exports: [HeaderComponent,FooterComponent],
})
export class HeaderModule {
    static forRoot() {
        return {
            ngModule: HeaderModule,
            providers: [HeaderService,]
        }
    }
}
