import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  // Propriedades ligadas aos inputs do formulário
  nome: string = '';
  email: string = '';
  senha: string = '';

  constructor() {}

  // Método exigido pelo exercício para exibir os valores na consola
  salvar() {
    console.log('--- Dados do Utilizador ---');
    console.log('Nome:', this.nome);
    console.log('E-mail:', this.email);
    console.log('Senha:', this.senha);
  }

  // Desafio: Adicionar um botão Limpar
  limpar() {
    this.nome = '';
    this.email = '';
    this.senha = '';
  }
}