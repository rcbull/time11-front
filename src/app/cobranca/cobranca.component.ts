import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {interval, Observable, timer} from 'rxjs';
import {takeWhile, filter, take, flatMap} from 'rxjs/operators';
import {CobrancaService} from '../services/cobranca.service';
import {environment} from '../../environments/environment';

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
  descricao = 'Paçocas';
  valor = 1000;

  constructor(private formBuilder: FormBuilder,
              public cobrancaService: CobrancaService) {
  }

  ngOnInit() {
    this.formCobranca = this.formBuilder.group(
      {
        valor: ['', [Validators.required]],
        descricao: ['', [Validators.required]]
      }
    );
  }

  saveCobranca() {
    // consultar valores da api para o pai idzoop e cliança
    let idbuyer = '983dd438a7b14a67871bad02e745ba68';
    let iddependente = 'd823abc92bea4816a5f4787a068ae4d0';

    // this.cobrancaService.enviarCobranca({}).subscribe(response => {
    //
    // });

    this.qrCodeGenerated = true;
    this.value = `${environment.api}/movimentacoes/tokenTitular/${idbuyer}/tokenDependente/${iddependente}/valor/${this.formCobranca.value.valor * 100}/descricao/combo3`;

    this.updateCobranca();
  }

  updateCobranca() {
    setTimeout(() => {
      this.qrCodeConfirmed = true;
    }, 25000);

    setTimeout(() => {
      this.reset();
    }, 30000);

  }

  reset() {
    this.qrCodeGenerated = false;
    this.qrCodeConfirmed = false;
  }
}
