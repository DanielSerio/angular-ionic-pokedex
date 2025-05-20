import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'browse',
    loadComponent: () => import('./pages/browse/browse.page').then(m => m.BrowsePage)
  },
  {
    path: 'list-view',
    loadComponent: () => import('./pages/list-view/list-view.page').then(m => m.ListViewPage)
  },
  {
    path: 'details-view',
    loadComponent: () => import('./pages/details-view/details-view.page').then(m => m.DetailsViewPage)
  },
  {
    path: '',
    redirectTo: 'browse',
    pathMatch: 'full',
  },
];
