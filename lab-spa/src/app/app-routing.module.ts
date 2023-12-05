import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoTabelaComponent } from './components/produto-tabela/produto-tabela.component';
import { RotaNotFoundComponent } from './components/rota-not-found/rota-not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'produtotabela', component: ProdutoTabelaComponent },
  { path: '**', component: RotaNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
