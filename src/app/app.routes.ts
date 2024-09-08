
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path:'details',
    component: DetailsComponent
  }
];
