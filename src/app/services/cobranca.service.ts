import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CobrancaService {

  constructor(private http: HttpClient) {
  }

  enviarCobranca(dados: any) {
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
