import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {interval, Observable, timer} from 'rxjs';
import {takeWhile, filter, take, flatMap} from 'rxjs/operators';
import {CobrancaService} from '../services/cobranca.service';

@Component({
  selector: 'app-cobranca',
  templateUrl: './cobranca.component.html',
  styleUrls: ['./cobranca.component.css']
})
export class CobrancaComponent implements OnInit {

  elementType: 'url' | 'canvas' | 'img' = 'url';
  value = 'VALOR';
  qrCodeGenerated = false;
  qrCodeConfirmed = false;
  mensagem: string;
  formCobranca: FormGroup;
  submitted = false;
  success = false;
  stopCondition = false;

  constructor(private formBuilder: FormBuilder,
              public cobrancaService: CobrancaService) {
  }

  ngOnInit() {
    this.formCobranca = this.formBuilder.group(
      {valor: ['', [Validators.required]]}
    );
  }

  saveCobranca() {
    console.log(this.formCobranca.value.valor);

    this.qrCodeGenerated = true;
    value: this.formCobranca.value.valor;

    this.updateCobranca();
  }

  updateCobranca() {
    setTimeout(() => {
      this.qrCodeConfirmed = true;
    }, 2000);

    setTimeout(() => {
      this.reset();
    }, 3500); // RESETA FORMULÁRIO DEPOIS DE 1,5 SEGUNDO DA CONFIRMAÇÃO

  }

  reset() {
    this.qrCodeGenerated = false;
    this.qrCodeConfirmed = false;
  }
}
