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
  value = "VALOR"
  qrCodeGenerated = false;
  mensagem: string;
  formCobranca: FormGroup;
  submitted = false;
  success = false;
  stopCondition = false

  constructor(private formBuilder: FormBuilder,
              public cobrancaService: CobrancaService) {
  }

  ngOnInit() {
    this.formCobranca = this.formBuilder.group(
      {valor: ['', [Validators.required]]}
    );
  }

  saveCobranca(){
    console.log(this.formCobranca.value.valor);

    this.qrCodeGenerated = true;
    value: this.formCobranca.value.valor;

    // this.verifica().subscribe(t => {
    //   console.log(t)});
  }
}
