import { NgModule } from "@angular/core";
import { Navbar } from "./components/shared/navbar/navbar";
import { Dashboard } from "./components/pages/dashboard/dashboard";
import { CriarTarefas } from "./components/pages/criar-tarefas/criar-tarefas";
import { ConsultarTarefas } from "./components/pages/consultar-tarefas/consultar-tarefas";
import { EditarTarefas } from "./components/pages/editar-tarefas/editar-tarefas";
import { RouterLink } from "@angular/router";
import { TarefasRoutingModule } from "./tarefas-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
    declarations: [
        //Mapeamento dos componentes que
        //fazem parte do módulo de tarefas
        Navbar,
        Dashboard,
        CriarTarefas,
        ConsultarTarefas,
        EditarTarefas
    ],
    imports: [
        //importações de outros módulos
        RouterLink,
        TarefasRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        NgxPaginationModule
    ]
})
export class TarefasModule { }