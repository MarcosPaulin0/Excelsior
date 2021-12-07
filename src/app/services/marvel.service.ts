import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  privateKey = '01800b949ba04a2c4215e23e69f51374641719d7';
  publicKey = 'b63e144e5af75a05920e45fa07fb97cd';

  getComics(characterId ?: string){

    var timestamp = new Date().getTime().toString()

    //const md5 = new MD5();
    //var hash = md5.appendSrt(timestamp + this.privateKey + this.publicKey).end();

    let params;

    if(characterId) {
      params = new HttpParams().set("characters", characterId);
    }

  }
  constructor(public httpClient: HttpClient) { }

  /*public getComics(offset: string, limit: string) {
    let url =
      'https://gateway.marvel.com/v1/public/comics?ts=1000&apikey=b63e144e5af75a05920e45fa07fb97cd&hash=f0de242ee98d75c3990f9ec4147faf73&title=Avengers' +
      '&offset=' +
      offset +
      '&limit=' +
      limit;

    return this.http.get(url).pipe(
      map((res: any) => {
        return res;
      }),
      retry(5)
    );
  }*/
}

