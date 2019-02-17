import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

import {AgmCoreModule} from '@agm/core';
import {GeolocationService} from '../../services/geolocation.service';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  texto: string = 'OnovoLab';
  lat: number = -22.0220506;
  lng: number = -47.8971017;
  zoom: number = 15;
  estabelecimentos = [];

  constructor(private http: HttpClient,
              private geolocationService: GeolocationService,
              private storageService: StorageService) {
  }

  ngOnInit() {
    // this.getEstabelecimentos().subscribe(
    //   response => {
    //     console.log(response);
    //   }
    // );

    this.estabelecimentos.push({lat: this.lat, lng: this.lng, label: this.texto});

    this.geolocationService.getGeolocation().then(pos => {
      this.storageService.setItem('position', JSON.stringify(pos));
      console.log(pos);
    });
  }

}

