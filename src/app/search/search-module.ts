import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchComponent } from './component/search-component';
import { SearchResultComponent } from './resultComponent/search.result.component';
import { SearchRoutingModule } from './search-routing';
import { SearchService } from './service/search.service';
import { PrkPrimeNgModule } from '../primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/commonServices/auth-guard.service';
@NgModule({
    declarations: [
        SearchComponent,
        SearchResultComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        PrkPrimeNgModule.forRoot(),
        SearchRoutingModule
    ],
    exports: [],
})
export class SearchModule {
    static forRoot() {
        return {
            ngModule: SearchModule,
            providers: [SearchService,AuthGuard],
        }
    }
}
