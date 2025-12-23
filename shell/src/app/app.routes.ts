// import { loadRemoteModule } from '@angular-architects/native-federation';
// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'mfe1',
//     pathMatch: 'full'
//   },
//   {
//     path: 'mfe1',
//     loadComponent: () => loadRemoteModule('mfe1',  './bootstrap').then(m => m.AppComponent)
//   },
//   {
//     path: 'mfe2',
//     loadComponent: () => loadRemoteModule('mfe2', './Component').then((m) => m.AppComponent),
//   },
//   {
//     path: 'landing',
//     loadComponent: () => loadRemoteModule('mfe-landing', './Component').then((m) => m.AppComponent),
//   },
//   {
//     path: '**',
//     redirectTo: 'mfe1'
//   }
// ];
import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mfe1',
    pathMatch: 'full'
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule('mfe1', './routes')
        .then(m => m.routes)
  }
];
