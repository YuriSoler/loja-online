import { Component } from '@angular/core';

@Component({
  selector: 'app-suporte',
  imports: [],
  templateUrl: './suporte.html',
  styleUrl: './suporte.css',
})
export class Suporte {
  contatos = [
    {
      tipo: 'Suporte técnico',
      descricao: 'Problemas com login, bugs no site ou acesso a recursos.',
      icone: '🛠️',
    },
    {
      tipo: 'Parcerias e mídia',
      descricao: 'Entre em contato para colaborações, divulgação e eventos.',
      icone: '🤝',
    },
    {
      tipo: 'Comunicação geral',
      descricao: 'Dúvidas, sugestões ou críticas construtivas são bem-vindas.',
      icone: '💬',
    },
  ];

  email = 'suportecontinental.dev';
  discord = 'https://discord.gg/seu-servidor'; // substitua pelo seu invite real
}
