import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  info = "Date and time of this Component";
  constructor(private _http: HttpClient) { }

  showDate() {
    let date = new Date();
    return date;
  }

  getMethod() {
    return this._http.get("http://www.json-generator.com/api/json/get/bVetNNuNNK")
  }
}
