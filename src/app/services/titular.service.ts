import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TitularService {

  constructor(private http: HttpClient) {
  }

  consultarTitular(email: string) {
    return this.http.get<any>(`${environment.api}/titulares/email/${email}`)
      .pipe(map(response => {
          return response;
        })
      );
  }
}
