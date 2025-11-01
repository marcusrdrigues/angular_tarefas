import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarefaValidator } from '../../../core/validators/tarefa-validator';
import { TarefaService } from '../../../core/services/tarefa';
import { Tarefa } from '../../../core/models/tarefa';

@Component({
  selector: 'app-criar-tarefas',
  standalone: false,
  templateUrl: './criar-tarefas.html',
  styleUrl: './criar-tarefas.css'
})
export class CriarTarefas {

  //Atributos
  mensagem = signal<string>('');

  //Injeções de dependência
  private tarefaService = inject(TarefaService);
  private fb = inject(FormBuilder);  

  form : FormGroup = this.fb.group({
    nome : ['', [Validators.required, Validators.minLength(6)]],
    data : ['', [Validators.required]],
    hora_inicio : ['', [Validators.required]],
    hora_fim : ['', [Validators.required]],
    prioridade : ['', [Validators.required]],
    finalizado : [false]
  }, {
    validators: [TarefaValidator.horaFimMaiorQueHoraInicio()]
  });

  prioridades = ['Alta', 'Média', 'Baixa'];

  onSubmit() {

    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    var tarefa : Tarefa = this.form.getRawValue();

    this.tarefaService.post(tarefa)
      .subscribe({
        next: (response) => { //Sucesso
          this.mensagem.set(`Tarefa '${response.nome}' criada com sucesso!`);
          this.form.reset(); //Limpa o formulário
        },
        error: (error) => { //Erro
          console.log(error);
          this.mensagem.set('Erro ao criar tarefa. Tente novamente mais tarde.');
        }
      });
  }
}
