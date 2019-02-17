import {Component, OnInit} from '@angular/core';
import {TitularService} from '../services/titular.service';

@Component({
  selector: 'app-titular',
  templateUrl: './titular.component.html',
  styleUrls: ['./titular.component.css']
})
export class TitularComponent implements OnInit {

  mostrarDetalhes = false;

  constructor(private titularService: TitularService) {
  }

  ngOnInit() {

    this.mostrarDetalhes = true;

    this.titularService.consultarTitular("thianolima@hotmail.com")
      .subscribe(response => console.log(response));


  }

}
