import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  // url passada através do environment
  public marvelUrl = environment.marvelUrl;

  constructor(public httpClient: HttpClient) { }

  callHqMarvel() {
    //debugger;
    const timestamp = new Date().getTime().toString();
    const publicKey = "b63e144e5af75a05920e45fa07fb97cd";
    const privateKey = "01800b949ba04a2c4215e23e69f51374641719d7";
    const md5 = new Md5();

    const hash = md5.appendStr(timestamp + privateKey + publicKey).end();
    return this.httpClient.get<any>(`${this.marvelUrl}/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,  {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    })
  }
}
