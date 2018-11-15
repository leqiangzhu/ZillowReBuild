import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from '../app/search/search.component';
import {WelcomeComponent} from '../app/welcome/welcome.component'

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'home',
    component: WelcomeComponent
  },
  {
     path: 'search',
     component: SearchComponent
   }
 
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
