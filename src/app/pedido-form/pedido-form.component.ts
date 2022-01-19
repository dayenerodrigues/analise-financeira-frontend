import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from '../service/pedido.service';
import { PedidoDTO } from "../entity/pedido-dto";

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})

export class PedidoFormComponent implements OnInit {
  pedidoDto: PedidoDTO;

  constructor(private route: ActivatedRoute, private router: Router,
              private pedidoService: PedidoService) {
    this.pedidoDto = new PedidoDTO();
  }

  onSubmit() {
    this.pedidoService.analiseCredito(this.pedidoDto).subscribe(result => this.atualizaPedidosList());
  }

  atualizaPedidosList() {
    this.router.navigate(['/pedidos']);
  }

  ngOnInit(): void {
  }
}
