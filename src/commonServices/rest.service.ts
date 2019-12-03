import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from'@angular/common/http'
import { Observable, ObservableInput } from 'rxjs';
import{map, catchError} from 'rxjs/operators'


@Injectable()

export class RestServiceCallService{
 
    options ={headers: new HttpHeaders({'content-type':'application/json'})};

    constructor(private http:HttpClient){}

    getObservable(urlString:string){
        return this.http
           .get(urlString,this.options).pipe(
            map(r => {var res = r as any;
                return res}),
            catchError(err => this.errorHandler)
            );
    }
   private errorHandler(error:Response){

    }
}