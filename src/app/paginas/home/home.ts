import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  tituloPagina: string = 'Bem vindo a minha loja On-Line';
  subTitulo: string = 'Maior variedade de produtos da america latina';

  constructor() {}

  ngOnInit(): void {
    console.log('home iniciada...');
  }
  verOfertas(): void {
    alert('botão clicado');
  }
}
