import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string = 'testando hackaton';
}
