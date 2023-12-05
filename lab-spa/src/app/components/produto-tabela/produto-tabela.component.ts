import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { AlertService } from 'src/app/services/alert.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-tabela',
  templateUrl: './produto-tabela.component.html',
  styleUrls: ['./produto-tabela.component.scss'],
})
export class ProdutoTabelaComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(
    private service: ProdutoService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.service.findAll().subscribe({
      next: (dados) => (this.produtos = dados),
      error: (e) => this.alertService.error("Erro buscando produtos", e.message),
    });
  }
}
