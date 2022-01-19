import { Component, OnInit } from '@angular/core';
import { Pedido } from '../entity/pedido';
import { PedidoService } from '../service/pedido.service';
import {PedidoDTO} from "../entity/pedido-dto";

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})

export class PedidoListComponent implements OnInit {

  pedidos: Pedido[];

  constructor(private pedidoService: PedidoService) {
    this.pedidos = [];
  }

  ngOnInit() {
    this.pedidoService.findAll().subscribe(data => {
      this.pedidos = data;
    });
  }

}
