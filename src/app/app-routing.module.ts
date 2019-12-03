import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchRoutes } from './search/search-routing';
import { SearchComponent } from './search/component/search-component';

const routes: Routes = [
  {
    path:'',
    component:SearchComponent,
  },
  ...SearchRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
