import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsultarTarefas } from "./components/pages/consultar-tarefas/consultar-tarefas";
import { CriarTarefas } from "./components/pages/criar-tarefas/criar-tarefas";
import { Dashboard } from "./components/pages/dashboard/dashboard";
import { EditarTarefas } from "./components/pages/editar-tarefas/editar-tarefas";


 // Mapeamento de rotas do módulo de tarefas   
export const routes : Routes = [
    { path : 'dashboard', component: Dashboard },
    { path : 'criar-tarefas', component: CriarTarefas },
    { path : 'consultar-tarefas', component: ConsultarTarefas },
    { path : 'editar-tarefas/:id', component: EditarTarefas },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TarefasRoutingModule {}