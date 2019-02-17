import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(private http: HttpClient) {
  }

  salvar(dados: any) {
    return this.http.post<any>(`${environment.api}/estabelecimento`, dados)
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

  getEstabelecimentos(): Observable<any> {
    return this.http.get<any>(`${environment.api}/estabelecimentos`)
      .pipe(map(response => {
          console.log(response);
          return false;
        })
      );
  }
}
