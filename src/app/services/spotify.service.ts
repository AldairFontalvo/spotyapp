import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewReleases(){
      
      const headers = new HttpHeaders({
        'Authorization' : 'Bearer BQDncy4WDaaYipzCoNA6I1hqRfDdGw5MCGN0TQW1GNAyX8am-SF2uk1zPs4Cn-kdpB_5CIerTagyIZDywDE'
      });

      this.http.get('https://api.spotify.com/v1/browse/new-releases',{
        headers
      })
      .subscribe(data=>{
        console.log(data);
      })
  }
}
