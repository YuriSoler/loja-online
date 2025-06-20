// app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Loja } from './pages/loja/loja';
import { Produtos } from './pages/produtos/produtos';
import { Cursos } from './pages/cursos/cursos';
import { Devs } from './pages/devs/devs';
import { Projetos } from './pages/projetos/projetos';
import { Sobre } from './pages/sobre/sobre';
import { Suporte } from './pages/suporte/suporte';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'loja', component: Loja },
  { path: 'produtos', component: Produtos },
  { path: 'cursos', component: Cursos },
  { path: 'devs', component: Devs },
  { path: 'projetos', component: Projetos },
  { path: 'sobre', component: Sobre },
  { path: 'suporte', component: Suporte },
  { path: '**', redirectTo: 'home' },
];
