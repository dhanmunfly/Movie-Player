import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPlaylistFromApiService {

  configUrl = 'https://api-uat.greatmanagerinstitute.com/task/getTrailerList';


  constructor(private http: HttpClient) { }

  getTrailerListFromApi() {
    const headers = new HttpHeaders({source: 'Dhananjay'});
    return this.http.get(this.configUrl, {headers : headers});
  }

}
