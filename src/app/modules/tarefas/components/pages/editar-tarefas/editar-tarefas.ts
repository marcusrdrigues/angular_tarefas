import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarefaService } from '../../../core/services/tarefa';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarefaValidator } from '../../../core/validators/tarefa-validator';
import { Tarefa } from '../../../core/models/tarefa';


@Component({
  selector: 'app-editar-tarefas',
  standalone: false,
  templateUrl: './editar-tarefas.html',
  styleUrl: './editar-tarefas.css'
})
export class EditarTarefas {

  mensagem = signal<string>('');

  activatedRoute = inject(ActivatedRoute);
  tarefaService = inject(TarefaService);
 
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

  id: number = 0;

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.tarefaService.getById(this.id)
      .subscribe((tarefa) => {
        this.form.patchValue({
          nome: tarefa.nome,
          data: tarefa.data,
          hora_inicio: tarefa.hora_inicio,
          hora_fim: tarefa.hora_fim,
          prioridade: tarefa.prioridade,
          finalizado: tarefa.finalizado
        });
      });      
  }

  onSubmit() {

   if(this.form.invalid) {
         this.form.markAllAsTouched();
         return;
       }
   
       var tarefa : Tarefa = this.form.getRawValue();
       tarefa.id = this.id;
   
       this.tarefaService.put(tarefa)
         .subscribe({
           next: (response) => { //Sucesso
             this.mensagem.set(`Tarefa '${response.nome}' atualizada com sucesso!`);
           },
           error: (error) => { //Erro
             console.log(error);
             this.mensagem.set('Erro ao atualizar tarefa. Tente novamente mais tarde.');
           }
         });
  }


}
