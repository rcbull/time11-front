import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dados-titular',
  templateUrl: './dados-titular.component.html',
  styleUrls: ['./dados-titular.component.css']
})
export class DadosTitularComponent implements OnInit {

  animal: string;
  name: string;

  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() {
  }

  onResize() {
    
  }

}
