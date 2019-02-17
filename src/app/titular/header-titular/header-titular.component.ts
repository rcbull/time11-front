import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material'
import {DependenteModalComponent} from '../dependente-modal/dependente-modal.component';

@Component({
  selector: 'app-header-titular',
  templateUrl: './header-titular.component.html',
  styleUrls: ['./header-titular.component.css']
})
export class HeaderTitularComponent implements OnInit {

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
