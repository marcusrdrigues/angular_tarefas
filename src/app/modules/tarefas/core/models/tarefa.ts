/*
    Modelo de dados de tarefa
*/
export interface Tarefa {
    id: number, //identificador da tarefa
    nome: string, // nome da tarefa
    data: string, //data da tarefa
    hora_inicio: string, //hora de início da tarefa
    hora_fim: string, // hora fim da tarefa
    prioridade: 'Baixa' | 'Média' | 'Alta', //prioridade (enum)
    finalizado: boolean //finalizado (sim ou não)
}
