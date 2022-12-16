import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorksListComponent } from './pages/works-list/works-list.component';
import { WorksViewComponent } from './pages/works-view/works-view.component';

const routes: Routes = [
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   component: WorksListComponent
  // },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: WorksListComponent
  },
  {
    path: 'view/:DOI',
    component: WorksViewComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 