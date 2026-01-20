import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'inicio', // <--- AQUÍ ESTÁ EL CAMBIO (antes decía 'home')
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./page/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'parenterales',
    loadComponent: () => import('./page/parenterales/parenterales.page').then( m => m.ParenteralesPage)
  },
  {
    path: 'intradermica',
    loadComponent: () => import('./page/intradermica/intradermica.page').then( m => m.IntradermicaPage)
  },
];
