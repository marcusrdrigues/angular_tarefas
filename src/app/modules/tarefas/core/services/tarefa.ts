import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  //Atributos da classe
  private http = inject(HttpClient); //injeção de dependência do HttpClient
  private apiUrl = 'http://localhost:3000/tarefas';  //endereço da API

  //Função para criar uma nova tarefa na API
  post(tarefa: Tarefa){
    //Chamada HTTP POST no endpoint de tarefas com o objeto tarefa e retornar os dados
    return this.http.post<Tarefa>(this.apiUrl, tarefa);
  }

  //Função para atualizar uma tarefa na API
  put(tarefa: Tarefa) {
    //Chamada HTTP PUT no endpoint de tarefas com o ID da tarefa e o objeto tarefa, retornando os dados
    return this.http.put<Tarefa>(`${this.apiUrl}/${tarefa.id}`, tarefa);
  }

  //função para deletar uma tarefa na API
  delete(id: number) {
    //Chamada HTTP DELETE no endpoint de tarefas com o ID da tarefa e retornar os dados
    return this.http.delete<Tarefa>(`${this.apiUrl}/${id}`);
  }

  //Função para consultar as tarefas na API
  getAll() {
    //Chamada HTTP GET no endpoint de tarefas e retornar os dados
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  //Função para consultar uma tarefa específica na API pelo ID
  getById(id: number) {
    //Chamada HTTP GET no endpoint de tarefas com o ID da tarefa e retornar os dados
    return this.http.get<Tarefa>(`${this.apiUrl}/${id}`);
  }
}
