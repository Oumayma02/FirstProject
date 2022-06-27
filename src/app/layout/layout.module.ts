import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { FrontComponent } from './front/front.component';



@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    FrontComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
