import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
      { path: '', pathMatch: 'full', redirectTo: 'home'},
      { path: 'login', component: LoginComponent },
      { path: '404', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
