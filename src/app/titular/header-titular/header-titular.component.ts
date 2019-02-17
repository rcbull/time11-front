import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material'
import {DependenteModalComponent} from '../dependente-modal/dependente-modal.component';

import * as moment from 'moment';

@Component({
  selector: 'app-header-titular',
  templateUrl: './header-titular.component.html',
  styleUrls: ['./header-titular.component.css']
})
export class HeaderTitularComponent implements OnInit {

  dataInicial = moment().add('days', -30).format("YYYY-MM-DD");
  dataFinal = moment().format("YYYY-MM-DD");

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const self = this
    const dialogRef = this.dialog.open(DependenteModalComponent, {
      width: '600px',
      height: '400px',
      disableClose: false,
      data: {}
    });

    dialogRef.afterClosed().subscribe(dados => {
      if (dados != undefined) {
        console.log(dados)
      }
    });

    dialogRef.keydownEvents().subscribe(ev => {
      if (ev.keyCode == 27) dialogRef.close()
    })
  }
}
