import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() {
  }

  async getGeolocation() {
    return await new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve(position);
        });
      } else {
        reject();
      }
    });
  }
}
