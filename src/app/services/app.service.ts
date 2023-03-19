import {Injectable, forwardRef} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Router} from '@angular/router';
import {constant} from "../constant.local";


@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {
  }

  downLoad() {
    const encodedAuth = window.localStorage.getItem('encodedAuth');

    return this.http.get('http://' + constant.PATH + '/download', {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + encodedAuth,
        'Content-Type': 'application/octet-stream',
      }), responseType: 'blob'
    });
  }
}
