import { Component, inject, signal } from '@angular/core';
import { TarefaService } from './core/services/tarefa';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  //Atributos
  private tarefaService = inject(TarefaService);


  //Função executada ao abrir o componente
  ngOnInit() {
    //Executando a consulta da API
    this.tarefaService.getAll().subscribe({
      next: (data) => { //função executada caso a resposta seja sucesso


        //percorrendo a lista de tarefas (foreach)
        for(const tarefa of data) {


          //imprimindo os dados de cada tarefa
          console.log(`Id da tarefa........: ${tarefa.id}`);
          console.log(`Nome................: ${tarefa.nome}`);
          console.log(`Data................: ${tarefa.data}`);
          console.log(`Hora de início......: ${tarefa.hora_inicio}`);
          console.log(`Hora de fim.........: ${tarefa.hora_fim}`);
          console.log(`Prioridade..........: ${tarefa.prioridade}`);
          console.log(`Finalizado..........: ${tarefa.finalizado}`);
          console.log(`...`);
        }
      },
      error: (e) => { //função executada caso a resposta seja erro
        console.log(e.error);
      }
    });
  }


}


