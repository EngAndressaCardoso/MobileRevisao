import { Component } from '@angular/core';
import { CepService } from '../services/cep.services';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  cep: string = '';
  endereco: any = null;
  erro: string = '';
  carregando: boolean = false; // <-- Nova variável para controlar o loading

  constructor(private cepService: CepService) {}

  consultarCep() {
    this.erro = '';
    this.endereco = null;

    if (!this.cep || this.cep.length !== 8) {
      this.erro = 'Por favor, digite um CEP válido com 8 dígitos.';
      return;
    }

    this.carregando = true; // Ativa o carregamento

    this.cepService.buscarCep(this.cep).subscribe({
      next: (dados: any) => {
        this.carregando = false; // Desativa o carregamento
        if (dados.erro) {
          this.erro = 'CEP não encontrado.';
        } else {
          this.endereco = dados;
        }
      },
      error: (err) => {
        this.carregando = false; // Desativa o carregamento mesmo se der erro
        console.error(err);
        this.erro = 'Erro ao consultar a API ou ausência de internet.';
      }
    });
  }
}