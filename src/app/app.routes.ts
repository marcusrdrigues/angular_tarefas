import { Routes } from '@angular/router';
import { NotFound } from './errors/not-found/not-found';

export const routes: Routes = [
    {
        path: 'tarefas', //rota principal do módulo de tarefas
        loadChildren: () => import(
            './modules/tarefas/tarefas.module'
        ).then(m => m.TarefasModule)
    },
    { path : '', pathMatch: 'full', redirectTo: '/tarefas/dashboard' }, //rota padrão
    { path : '**', component: NotFound }, //rota 404
];