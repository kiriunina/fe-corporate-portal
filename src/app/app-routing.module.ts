import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './components/auth/auth.component';
import {DocumentComponent} from './components/document/document.component';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: '', component: DocumentComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
