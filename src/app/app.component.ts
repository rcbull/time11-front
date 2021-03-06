import {Component, OnInit} from '@angular/core';
import {LoginService} from './services/login.service';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  logado = true;
  currentRoute = '';
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string = 'testando hackaton';

  constructor(private loginService: LoginService) {

  }

  ngOnInit() {

  }
}
