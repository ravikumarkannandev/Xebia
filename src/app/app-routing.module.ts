import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './nutrition/components/search/search.component';
import { SearchresultComponent } from './nutrition/components/searchresult/searchresult.component';

const routes: Routes = [
  {
    path:'',
    component:SearchComponent
  },
  {
    path:'Nutrisearch',
    component:SearchComponent
  },
  {
    path:'Searchresult',
    component:SearchresultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'ignore'
  })],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
