import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      loadRemoteModule('statistics', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'statistics',
    loadComponent: () =>
      loadRemoteModule('statistics', './Component').then((m) => m.AppComponent),
  },
];
