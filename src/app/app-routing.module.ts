import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { FrontComponent } from './layout/front/front.component';
import { UserComponent } from './layout/user/user.component';

const routes: Routes = [
  {path:'',component:FrontComponent},
  {path:'admin',component:AdminComponent,
  children:[
    {path:'dashboard',loadChildren:()=>import('./views/dashboard/dashboard.module').then(m=>m.DashboardModule)}
  ]},
  {path:'user',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
