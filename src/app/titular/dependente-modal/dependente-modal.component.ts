import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material'

@Component({
  selector: 'app-dependente-modal',
  templateUrl: './dependente-modal.component.html',
  styleUrls: ['./dependente-modal.component.css']
})
export class DependenteModalComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialogRef: MatDialogRef<ConfirmarSharedComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {
  }

  onResize() {
    if (window.innerWidth < 580) this.divLista.height = '150px'
    else this.divLista.height = '190px'
  }

}
