import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from '../app/search/search.component';


const appRoutes: Routes = [
  {
     path: 'search',
     component: SearchComponent
   }
 
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
