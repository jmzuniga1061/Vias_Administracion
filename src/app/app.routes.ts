import { Routes } from '@angular/router';

export const routes: Routes = [
  {
<<<<<<< HEAD
    path: '',
    redirectTo: 'home', // Al abrir la app, va directo al Home diseñado
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
=======
    path: 'parenterales',
    loadComponent: () => import('./page/parenterales/parenterales.page').then(m => m.ParenteralesPage)
>>>>>>> main
  },
  {
    path: 'intramuscular',
    loadComponent: () => import('./page/intramuscular/intramuscular.page').then(m => m.IntramuscularPage)
  },
<<<<<<< HEAD
  // ... asegúrate de que tus otras rutas (intradermica, parenterales) estén aquí abajo
];
=======
  {
    path: 'inicio',
    loadComponent: () => import('./page/inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    path: '',
    redirectTo: 'parenterales',
    pathMatch: 'full'
  }
];
>>>>>>> main
