import { Injectable } from '@angular/core';
import { RestServiceCallService } from 'src/commonServices/rest.service';
import { Details } from '../resultComponent/search.result.model';

@Injectable()
export class SearchService{
    constructor(private restService: RestServiceCallService) { }
    getSearchDetails(name,type) {
    var url = '/details/name/'+name+'/type/'+type;
    return this.restService.getObservable(url).map((res:Details) => {
        return res;
    })
}
}