import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import {NavComponent} from "./nav/nav.component";

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: NavComponent
  },
  {
    path: 'frosthaven',
    loadComponent: () =>
      loadRemoteModule('statistics', './Component').then((m) => m.AppComponent),
  },
];
