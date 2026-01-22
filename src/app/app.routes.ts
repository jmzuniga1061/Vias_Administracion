import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'parenterales',
    loadComponent: () => import('./page/parenterales/parenterales.page').then(m => m.ParenteralesPage)
  },
  {
    path: 'intramuscular',
    loadComponent: () => import('./page/intramuscular/intramuscular.page').then(m => m.IntramuscularPage)
  },
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
    path: 'parenterales',
    loadComponent: () => import('./page/parenterales/parenterales.page').then( m => m.ParenteralesPage)
  },
  {
    path: 'intradermica',
    loadComponent: () => import('./page/intradermica/intradermica.page').then( m => m.IntradermicaPage)
  },
  {
    path: 'intravenosa',
    loadComponent: () => import('./page/intravenosa/intravenosa.page').then( m => m.IntravenosaPage)
  },
];
