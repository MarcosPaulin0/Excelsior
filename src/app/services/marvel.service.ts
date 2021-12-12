import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  // url passada através do environment
  public marvelUrl = environment.marvelUrl;
    timestamp = new Date().getTime().toString();
    publicKey = "b63e144e5af75a05920e45fa07fb97cd";
    privateKey = "01800b949ba04a2c4215e23e69f51374641719d7";
    md5 = new Md5();
    hash = this.md5.appendStr(this.timestamp + this.privateKey + this.publicKey).end();
    headers= {
      headers: new HttpHeaders({
      "Content-Type": "application/json",
      })
    }


  constructor(public httpClient: HttpClient) { }

  callHqMarvel(): Observable<any> {
    //debugger;
    return this.httpClient.get<any>(`${this.marvelUrl}/v1/public/comics?ts=${this.timestamp}&apikey=${this.publicKey}&hash=${this.hash}`,
     this.headers);

  }

  getMarvelComicsById(id: string): Observable<any> {

    return this.httpClient.get<any>(`${this.marvelUrl}/v1/public/comics/${id}?ts=${this.timestamp}&apikey=${this.publicKey}&hash=${this.hash}`,
    this.headers);
  }
}
