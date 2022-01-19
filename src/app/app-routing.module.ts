import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';

const routes: Routes = [
  { path: 'pedidos', component: PedidoListComponent },
  { path: 'analise', component: PedidoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
