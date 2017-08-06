import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OpencvService {

  private baseUrl: string = "http://localhost:8080";

  constructor(private http: Http) { }

  public processImage(method, image) {
    let url = `${this.baseUrl}/process`;
    let data = {
      image: image.replace("data:image/jpeg;base64,", ""),
      method: method,
      params : []
    }
    return this.http.post(url, data);
  }
}
