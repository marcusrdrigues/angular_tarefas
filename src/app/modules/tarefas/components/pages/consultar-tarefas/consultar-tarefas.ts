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
  pagina: number = 1;

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

  onDelete(id: number) {
    if(confirm('Deseja realmente excluir esta tarefa?')) {
      //Chamando o serviço para excluir a tarefa
      this.tarefaService.delete(id).subscribe({
        next: (response) => {
          alert(`Tarefa '${response.nome}', excluída com sucesso!`);
          //Atualizando a lista de tarefas
          this.ngOnInit();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  //Função para alterar o valor da paginação
  pageChange(event: any) {
    this.pagina = event; //alterando o valor da página atual
  }
}
