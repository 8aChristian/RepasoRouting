import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {//instaciar pagina hija inicio
        path: "inicio",
        loadChildren: () => import("./inicio/inicio.module").then(vista => vista.InicioPageModule)
      },
      {//instaciar pagina hija inudo
        path: "nudo",
        loadChildren: () => import("./nudo/nudo.module").then(vista => vista.NudoPageModule)
      },
      {//instaciar pagina hija desenlace
        path: "desenlace",
        loadChildren: () => import("./desenlace/desenlace.module").then(vista => vista.DesenlacePageModule)
      },
      {//por defecto abrir inicio
        path: "",
        redirectTo: "inicio",
        pathMatch: "full"
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
