import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../entity/pedido'
import { PedidoDTO } from '../entity/pedido-dto'

const url = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(url + "pedidos");
  }

  public analiseCredito(pedidoDTO: PedidoDTO) {
    return this.http.post<Pedido>(url + "analise", pedidoDTO);
  }
}
