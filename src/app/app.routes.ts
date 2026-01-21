import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Al abrir la app, va directo al Home diseñado
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'intramuscular',
    loadComponent: () => import('./page/intramuscular/intramuscular.page').then(m => m.IntramuscularPage)
  },
  // ... asegúrate de que tus otras rutas (intradermica, parenterales) estén aquí abajo
];
