import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {UserdetailsComponent} from './userData/userdetails/userdetails.component';
const routes: Routes = [
// {path: 'allUser' , component: HeaderComponent},
// {path: 'userDetails/:id', component: FooterComponent},
{path: 'user' , loadChildren: './userData/user.module#UserModule'},
{path: 'userDetails/:id' , component: UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
