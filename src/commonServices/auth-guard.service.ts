import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, ObservableInput } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { RestServiceCallService } from './rest.service';
import { BehaviorSubject } from 'rxjs';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService) { }
  canActivate(){
   if(!this.authService.getUserDetails()){
       return false
   }
   return true
  }
    }