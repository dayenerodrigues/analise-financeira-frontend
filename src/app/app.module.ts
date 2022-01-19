import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';
import {  } from './service/pedido.service';

@NgModule({
  declarations: [
    AppComponent,
    PedidoListComponent,
    PedidoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
