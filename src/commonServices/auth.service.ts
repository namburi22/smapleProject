import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, ObservableInput } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { RestServiceCallService } from './rest.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class AuthService {
    public userDetails = new BehaviorSubject<any>([]);

    constructor(private restService: RestServiceCallService) { }
    getUserDetails() {
        //tmp mock data
        this.userDetails.next('tmp');
        var url = '/authDetails/User';
        return this.restService.getObservable(url).map(res => {
            this.userDetails.next(res);
        })
    }
    private errorHandler(error: Response) {

    }
}