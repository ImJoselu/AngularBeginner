import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ShippingBoardComponent} from "./shipping-board/shipping-board.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'table', component: ShippingBoardComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
