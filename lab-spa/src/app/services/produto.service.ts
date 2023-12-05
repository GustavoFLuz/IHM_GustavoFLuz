import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly URI_Produtos = "http://localhost:8081/produto"
  constructor(private client: HttpClient) { }

  public findAll(): Observable<Produto[]>{ 
    return this.client.get<Produto[]>(this.URI_Produtos);
  }
}
