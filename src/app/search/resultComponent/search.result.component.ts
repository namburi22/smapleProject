import { Component, Input, EventEmitter, Output, SimpleChange, SimpleChanges } from '@angular/core';
import{Details} from './search.result.model';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search.result.component.html'
})
export class SearchResultComponent {
    @Input('name') name: string;
    @Input('type') type: string;
    details:Details;
    @Output() response = new EventEmitter<Details>();
    constructor(private searchService:SearchService) {}
    ngOnInit() {
     
    }
    ngOnChanges(changes:SimpleChanges){
     if(this.name && this.type){
       this.searchService.getSearchDetails(this.name,this.type).map(res=>{
         this.details = res;
         this.response.emit(this.details);
       })
     }
    }
}
