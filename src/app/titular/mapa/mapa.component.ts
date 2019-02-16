import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

declare const google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  estabelecimentos: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

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
