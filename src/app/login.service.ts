import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(dados: any) {
    return this.http.post<any>(`${environment.api}/auth`, dados)
      .pipe(map(response => {
          if (response.status == 401 || response.status == 500 || response.status == 403) {
            //deu ruim
            return false;
          } else if (response.status == 200) {
            //deu bom
          }
        })
      );
  }
}
