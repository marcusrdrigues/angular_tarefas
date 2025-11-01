import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export class TarefaValidator {


    /* método de validação customizada */
    static horaFimMaiorQueHoraInicio(): ValidatorFn {
        return (group: AbstractControl): ValidationErrors | null => {

            //capturar os campos
            const horaInicio = group.get('hora_inicio')?.value;
            const horaFim = group.get('hora_fim')?.value;
            const data = group.get('data')?.value;

            //verificar se os campos estão preenchidos
            if (!data || !horaInicio || !horaFim) return null; //não há erros de validação

            //converter as horas para o formato Date
            const dataInicio = new Date(`${data}T${horaInicio}`);
            const dataFim = new Date(`${data}T${horaFim}`);

            //verificar se a hora de fim é maior que a hora de início
            if (dataFim <= dataInicio) {
                group.get('hora_fim')?.setErrors({ horaInvalida: true }); //erro de validação
                return { horaInvalida: true }; //erro de validação
            }

            return null; //não há erros de validação
        }
    }
}
