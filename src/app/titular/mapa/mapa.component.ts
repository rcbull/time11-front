import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  texto : string = 'OnovoLab';
  lat: number = -22.0220506;
  lng: number = -47.8971017;
  zoom: number = 15;
  estabelecimentos: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getEstabelecimentos().subscribe(
      response => {

        console.log(response);
      }
    );
  }

  getEstabelecimentos(): Observable<any> {
    console.log('getEstabelecimentos');
    return this.http.get<any>(`${environment.api}/`)
      .pipe(map(response => {
        if (response.status == 400) {

        } else if (response.status == 200) {
          this.estabelecimentos = response.estabelecimentos;
          console.log(response);
          return this.estabelecimentos;
        }
      }));
  }

}
