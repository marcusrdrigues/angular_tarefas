import { Component, inject, signal } from '@angular/core';
import { TarefaService } from '../../../core/services/tarefa';
import { Tarefa } from '../../../core/models/tarefa';

@Component({
  selector: 'app-consultar-tarefas',
  standalone: false,
  templateUrl: './consultar-tarefas.html',
  styleUrl: './consultar-tarefas.css'
})
export class ConsultarTarefas {

  //signals
  tarefas = signal<Tarefa[]>([]);

  //Atributos
  private tarefaService = inject(TarefaService);


  //Função executada ao abrir o componente
  ngOnInit() {
    //Executando a consulta da API
    this.tarefaService.getAll().subscribe({
      next: (data) => { //função executada caso a resposta seja sucesso
        this.tarefas.set(data); //setando o valor do signal

      },
      error: (e) => { //função executada caso a resposta seja erro
        console.log(e.error);
      }
    });
  }
}
