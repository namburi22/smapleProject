import { NgModule } from '@angular/core';
import { Routes,Route, RouterModule } from '@angular/router';
import { SearchComponent } from './component/search-component';
import { AuthGuard } from 'src/commonServices/auth-guard.service';

export const SearchRoutes: Route[] = [
  {
      path:'search',
      component:SearchComponent,
      canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(SearchRoutes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
