import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  //Atributos da classe
  private http: HttpClient = inject(HttpClient); //injeção de dependência do HttpClient
  private apiUrl: string = 'http://localhost:3000'; //endereço da API

  //Função para consultar as tarefas na API
  getAll() {
    //chamada HTTP GET no endpoin de tarefas e retornar os dados
    return this.http.get<Tarefa[]>(`${this.apiUrl}/tarefas`);
  }
  
}
