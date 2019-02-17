import {Component, OnInit} from '@angular/core';
import {TitularService} from '../services/titular.service';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-titular',
  templateUrl: './titular.component.html',
  styleUrls: ['./titular.component.css']
})
export class TitularComponent implements OnInit {

  email: string;
  mostrarDetalhes = false;
  titularDados: any;
  sucess = false

  constructor(private titularService: TitularService,
              private storageService: StorageService) {
  }

  ngOnInit() {

    this.mostrarDetalhes = true;

    this.titularService.consultarTitular(this.storageService.getItem('email'))
      .subscribe(response => {
        console.log(response);
        this.titularDados = response;
      });
  }

  fecharNotificacao() {
    setTimeout(() => {
      this.sucess = false;
    }, 3000);
  }
}
