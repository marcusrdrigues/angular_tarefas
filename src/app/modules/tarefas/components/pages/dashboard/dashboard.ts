import { Component, inject, signal } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { TarefaService } from '../../../core/services/tarefa';


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {


  graficoDonut = signal<Chart>(new Chart());
  graficoColunas = signal<Chart>(new Chart());


  private tarefaService = inject(TarefaService);


  ngOnInit() {
      this.criarGraficoDonut();
      this.criarGraficoColunas();
  }


  criarGraficoDonut() {
    this.tarefaService.getAll()
      .subscribe((response) => {
       
        let baixa = 0;
        let media = 0;
        let alta = 0;


        response.forEach((tarefa) => {
          if (tarefa.prioridade === 'Baixa') baixa++;
          else if (tarefa.prioridade === 'Média') media++;
          else if (tarefa.prioridade === 'Alta') alta++;
        });


        const conteudo: any[] = [];
        conteudo.push(['Prioridade Baixa', baixa]);
        conteudo.push(['Prioridade Média', media]);
        conteudo.push(['Prioridade Alta', alta]);


        this.graficoDonut.set(new Chart({
          chart: { type : 'pie' },
          title: { text: 'Distribuição de Tarefas por Prioridade' },
          subtitle: { text: 'Sistema de Agenda de Tarefas' },
          plotOptions: { pie : { innerSize: '50%', dataLabels: { enabled: true } } },
          series: [ { data: conteudo, type : 'pie', name : 'Tarefas' } ],
          credits: { enabled: false },
          legend: { enabled: false }
        }));


      })
  }


  criarGraficoColunas() {
    this.tarefaService.getAll()
      .subscribe((response) => {


        let concluida = 0;
        let pendente = 0;
       
        response.forEach((tarefa) => {
          if (tarefa.finalizado) concluida++;
          else pendente++;
        });


        const status: string[] = ['Tarefas pendentes', 'Tarefas concluídas'];
        const quantidade: number[] = [pendente, concluida];


        this.graficoColunas.set(new Chart({
          chart: { type : 'column' },
          title: { text: 'Status das Tarefas' },
          subtitle: { text: 'Sistema de Agenda de Tarefas' },
          xAxis: { categories: status, crosshair: true, title: { text: 'Status da tarefa' } },
          yAxis: { min: 0, title: { text: 'Quantidade de tarefas' } },
          plotOptions: { column : { borderRadius: 5 } },
          series: [ { name : 'Tarefas', type : 'column', data: quantidade } ],
          legend: { enabled: false },
          credits: { enabled: false }
        }));
      });
  }

}
