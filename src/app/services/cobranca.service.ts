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
    return this.http.get<any>(`${environment.api}/movimentacoes/tokenTitular/${dados.titular}/tokenDependente/${dados.dependente}/valor/${dados.valor}/descricao/combo3`, dados)
      .pipe(map(response => {
         return response;
        })
      );
  }
}
