import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


@NgModule({
  declarations: [UserComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [UserComponent , UserdetailsComponent]
})
export class UserModule { }
