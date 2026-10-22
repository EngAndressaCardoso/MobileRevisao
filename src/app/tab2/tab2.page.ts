import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  novaTarefa: string = '';
  tarefas: { nome: string; concluida: boolean }[] = [];

  constructor() {}

  // Carrega as tarefas automaticamente ao iniciar a página
  ngOnInit() {
    this.carregarTarefas();
  }

  adicionarTarefa() {
    if (this.novaTarefa.trim() === '') {
      return;
    }

    this.tarefas.push({
      nome: this.novaTarefa,
      concluida: false
    });

    this.novaTarefa = '';
    this.salvarTarefas(); // Salva no LocalStorage após adicionar
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
    this.salvarTarefas(); // Salva no LocalStorage após remover
  }

  alternarConcluida(tarefa: { nome: string; concluida: boolean }) {
    tarefa.concluida = !tarefa.concluida;
    this.salvarTarefas(); // Salva no LocalStorage após alterar o estado
  }

  // --- Métodos de Persistência com LocalStorage ---

  salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }

  carregarTarefas() {
    const dados = localStorage.getItem('tarefas');
    if (dados) {
      this.tarefas = JSON.parse(dados);
    }
  }

  // Desafio: Limpar todas as tarefas
  limparTodasTarefas() {
    this.tarefas = [];
    localStorage.removeItem('tarefas');
  }
}