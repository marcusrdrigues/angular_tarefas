import { Routes } from '@angular/router';
import { NotFound } from './components/errors/not-found/not-found';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { CriarTarefas } from './components/pages/criar-tarefas/criar-tarefas';
import { ConsultarTarefas } from './components/pages/consultar-tarefas/consultar-tarefas';
import { EditarTarefas } from './components/pages/editar-tarefas/editar-tarefas';


export const routes: Routes = [
    { path : '', pathMatch: 'full', redirectTo: '/dashboard' }, //rota padrão
    { path : 'dashboard', component: Dashboard },
    { path : 'criar-tarefas', component: CriarTarefas },
    { path : 'consultar-tarefas', component: ConsultarTarefas },
    { path : 'editar-tarefas/:id/:nome', component: EditarTarefas },
    { path : '**', component: NotFound }, //rota 404
];